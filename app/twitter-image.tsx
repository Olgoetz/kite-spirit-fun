import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Move, Spirit und Fun Event - Ocean Edition in Soma Bay";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "30px",
          padding: "60px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#1a202c",
            textAlign: "center",
            marginBottom: "20px",
            lineHeight: "1.2",
          }}
        >
          Move, Spirit & Fun
        </h1>
        <div
          style={{
            fontSize: "42px",
            color: "#667eea",
            fontWeight: "600",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Ocean Edition
        </div>
        <div
          style={{
            fontSize: "36px",
            color: "#4a5568",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Soma Bay, Ägypten
        </div>
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "30px",
            fontSize: "28px",
            color: "#2d3748",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            🏄‍♀️ Kitesurfen
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            🧘‍♀️ Yoga
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            💪 Fitness
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
