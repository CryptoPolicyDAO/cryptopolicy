// The friction page itself is a client component, so its metadata lives here.
export const metadata = {
  title: "Bureaucratic Friction Research Model",
  description:
    "An interactive research model measuring the bureaucratic friction blockchain technology can remove from government — across stablecoins, medical records, voting, ID verification, data storage, and insurance.",
  alternates: { canonical: "/friction" },
}

export default function FrictionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
