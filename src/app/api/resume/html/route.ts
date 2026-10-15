import { promises as fs } from "fs";
import path from "path";
import mammoth from "mammoth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "resume",
      "Daniil_Gorlov_CV.docx",
    );
    const buffer = await fs.readFile(filePath);
    const result = await mammoth.convertToHtml({ buffer });

    return NextResponse.json({
      html: result.value,
      messages: result.messages,
    });
  } catch (error) {
    console.error("Resume convert failed:", error);
    return NextResponse.json(
      { error: "Unable to open the resume right now." },
      { status: 500 },
    );
  }
}
