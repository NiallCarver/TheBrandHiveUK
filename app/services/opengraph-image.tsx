import { ImageResponse } from "next/og";
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0B0B0F",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 10, height: 40, background: "#F5C542", borderRadius: 6 }} />
          <div style={{ fontSize: 24, color: "#B5B7C0" }}>The Brand Hive UK</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>Services</div>
          <div style={{ fontSize: 32, color: "#B5B7C0" }}>Authority that converts</div>
        </div>
      </div>
    ),
    size
  );
}
