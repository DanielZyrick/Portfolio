import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "./lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121212",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, display: "flex" }}>
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 300,
            marginTop: 20,
            color: "#AAAAAA",
            display: "flex",
          }}
        >
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...size }
  );
}
