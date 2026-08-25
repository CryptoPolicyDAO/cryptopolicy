import { notFound } from "next/navigation"

import { siteConfig } from "@/config/site"
import { JsonLd } from "@/components/json-ld"

import { brmLayers, getBrmLayer } from "../brm-data"
import MatrixPage from "../matrix-page"

interface LayerPageProps {
  params: { layerId: string }
}

export function generateStaticParams() {
  return brmLayers.map((layer) => ({ layerId: layer.id }))
}

export function generateMetadata({ params }: LayerPageProps) {
  const layer = getBrmLayer(params.layerId)
  if (!layer) return {}
  const title = `${layer.title} Regulation`
  const description = `${layer.scope} Compare the centralized and decentralized sides: government concerns, consumer risks, notable incidents, and the current regulatory landscape.`
  const ogImage = `/api/og?heading=${encodeURIComponent(
    layer.title
  )}&type=${encodeURIComponent("Blockchain Regulation Matrix")}`
  return {
    title,
    description,
    alternates: { canonical: `/matrix/${layer.id}` },
    openGraph: {
      title,
      description,
      url: `/matrix/${layer.id}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: layer.title }],
    },
    twitter: { card: "summary_large_image", title, images: [ogImage] },
  }
}

export default function Page({ params }: LayerPageProps) {
  const layer = getBrmLayer(params.layerId)
  if (!layer) notFound()
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
          ],
        }}
      />
      <MatrixPage initialPin={{ layerId: params.layerId, side: "scope" }} />
    </>
  )
}
