import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px",
          background:
            "linear-gradient(145deg, #ecfeff 0%, #e0f2fe 42%, #ccfbf1 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.45,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#115e59",
              fontWeight: 600,
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: 84,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#020617",
              fontWeight: 700,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#115e59",
            }}
          >
            {site.title}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "#334155",
              maxWidth: 880,
            }}
          >
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}