import { NextResponse } from "next/server";
import { z } from "zod";

import { saveMessage } from "@/lib/messages";
import { site } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  message: z.string().trim().min(10).max(2000),
});

const isProduction = process.env.NODE_ENV === "production";

async function sendEmail(payload: {
  name: string;
  email: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `Portfolio message from ${payload.name}`,
      text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}`,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Email provider error: ${detail}`);
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the form fields and try again." },
        { status: 400 },
      );
    }

    // Vercel (and other serverless hosts) cannot persist local files.
    // Production always delivers via Resend.
    if (isProduction) {
      if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
          {
            error:
              "Contact form is not configured yet. Please email me directly.",
          },
          { status: 503 },
        );
      }

      try {
        await sendEmail(parsed.data);
      } catch (error) {
        console.error("Contact email failed:", error);
        return NextResponse.json(
          { error: "Could not send your message. Please try again shortly." },
          { status: 502 },
        );
      }

      return NextResponse.json({
        ok: true,
        emailed: true,
        stored: false,
      });
    }

    // Local development: persist to disk; email if a key is present.
    const saved = await saveMessage(parsed.data);
    let emailed = false;

    if (process.env.RESEND_API_KEY) {
      try {
        await sendEmail(parsed.data);
        emailed = true;
      } catch (error) {
        console.error("Contact email failed:", error);
      }
    }

    return NextResponse.json({
      ok: true,
      id: saved.id,
      emailed,
      stored: true,
    });
  } catch (error) {
    console.error("Contact API failed:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again shortly." },
      { status: 500 },
    );
  }
}
