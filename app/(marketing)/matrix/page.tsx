import MatrixPage from "./matrix-page"

export const metadata = {
  title: "Blockchain Regulation Matrix",
  description:
    "A layer-by-layer framework for Web3 regulation: government concerns, consumer risks, and the cases for and against regulation across all 21 layers of the blockchain stack — with the current regulatory landscape mapped to every cell.",
  alternates: { canonical: "/matrix" },
  openGraph: {
    title: "Blockchain Regulation Matrix",
    description:
      "21 layers of the blockchain stack, analyzed for regulators and builders — centralized and decentralized, with a regulatory heat map.",
    url: "/matrix",
    images: [
      {
        url: "/api/og?heading=Blockchain%20Regulation%20Matrix&type=Interactive%20Framework",
        width: 1200,
        height: 630,
        alt: "Blockchain Regulation Matrix",
      },
    ],
  },
}

export default function Page() {
  return <MatrixPage />
}
