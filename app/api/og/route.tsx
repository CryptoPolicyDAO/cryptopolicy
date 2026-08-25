import { ImageResponse } from "next/og"

export const runtime = "edge"

/**
 * Branded Open Graph card generator: /api/og?heading=...&type=...
 * Used by blog/docs/guides/members metadata and the site-wide default card.
 */
export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const heading = (
    searchParams.get("heading") ?? "Lobbying for Web3-Friendly Regulation"
  ).slice(0, 140)
  const type = (searchParams.get("type") ?? "Crypto Policy Center").slice(0, 60)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #101a4d 0%, #1b365d 55%, #234f88 100%)",
          color: "#f0f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#88b7dc",
          }}
        >
          {type}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: heading.length > 80 ? 54 : 68,
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          {heading}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 30,
            color: "#a2c2d8",
          }}
        >
          <div style={{ display: "flex" }}>Crypto Policy Center</div>
          <div style={{ display: "flex" }}>cryptopolicy.center</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
