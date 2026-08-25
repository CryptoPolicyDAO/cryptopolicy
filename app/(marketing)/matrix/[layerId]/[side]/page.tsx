import { notFound } from "next/navigation"

import { siteConfig } from "@/config/site"
import { JsonLd } from "@/components/json-ld"

import {
  brmLayers,
  getBrmAssessment,
  getBrmLayer,
  type BrmSide,
} from "../../brm-data"
import MatrixPage from "../../matrix-page"

interface CellPageProps {
  params: { layerId: string; side: string }
}

const SIDES: BrmSide[] = ["centralized", "decentralized"]

function sideLabel(side: BrmSide) {
  return side === "centralized" ? "Centralized" : "Decentralized"
}

export function generateStaticParams() {
  return brmLayers.flatMap((layer) =>
    SIDES.map((side) => ({ layerId: layer.id, side }))
  )
}

export function generateMetadata({ params }: CellPageProps) {
  const layer = getBrmLayer(params.layerId)
  if (!layer || !SIDES.includes(params.side as BrmSide)) return {}
  const side = params.side as BrmSide
  const assessment = getBrmAssessment(layer.id, side)
  const title = `${layer.title} — ${sideLabel(side)} Regulation`
  const description = assessment
    ? `${assessment.note} The ${side} side of the ${layer.title} in the Blockchain Regulation Matrix.`
    : layer.scope
  const ogImage = `/api/og?heading=${encodeURIComponent(
    `${layer.title} (${side})`
  )}&type=${encodeURIComponent("Blockchain Regulation Matrix")}`
  return {
    title,
    description,
    alternates: { canonical: `/matrix/${layer.id}/${side}` },
    openGraph: {
      title,
      description,
      url: `/matrix/${layer.id}/${side}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, images: [ogImage] },
  }
}

export default function Page({ params }: CellPageProps) {
  const layer = getBrmLayer(params.layerId)
  const side = params.side as BrmSide
  if (!layer || !SIDES.includes(side)) notFound()
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Blockchain Regulation Matrix",
              item: `${siteConfig.url}/matrix`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: layer.title,
              item: `${siteConfig.url}/matrix/${layer.id}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: sideLabel(side),
              item: `${siteConfig.url}/matrix/${layer.id}/${side}`,
            },
          ],
        }}
      />
      <MatrixPage initialPin={{ layerId: params.layerId, side }} />
    </>
  )
}
