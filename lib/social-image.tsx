import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

export const socialImageAlt =
  "CodigoYo. Learn. Work. Build. Technology for skills, opportunity, and creation.";

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#070B14",
          color: "#F3F6FB",
          padding: "68px 76px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -80,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "rgba(47, 111, 232, 0.38)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: 80,
            width: 420,
            height: 420,
            borderRadius: 420,
            background: "rgba(62, 224, 197, 0.14)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: 5,
            color: "#3EE0C5",
            fontWeight: 600,
          }}
        >
          CODIGOYO
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 104,
            lineHeight: 0.92,
            fontWeight: 600,
            letterSpacing: -3,
          }}
        >
          <div style={{ display: "flex" }}>Learn.</div>
          <div style={{ display: "flex" }}>Work.</div>
          <div style={{ display: "flex" }}>Build.</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: 680,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#C5D0E4",
            }}
          >
            Technology that helps people learn skills, find opportunity, and build what comes next.
          </div>
          <div style={{ display: "flex", gap: 12, fontSize: 20, fontWeight: 600 }}>
            <div
              style={{
                display: "flex",
                color: "#3EE0C5",
                border: "1px solid rgba(62, 224, 197, 0.45)",
                borderRadius: 999,
                padding: "8px 16px",
              }}
            >
              LEARN
            </div>
            <div
              style={{
                display: "flex",
                color: "#8EB4FF",
                border: "1px solid rgba(142, 180, 255, 0.4)",
                borderRadius: 999,
                padding: "8px 16px",
              }}
            >
              WORK
            </div>
            <div
              style={{
                display: "flex",
                color: "#C4BBFF",
                border: "1px solid rgba(196, 187, 255, 0.4)",
                borderRadius: 999,
                padding: "8px 16px",
              }}
            >
              BUILD
            </div>
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
