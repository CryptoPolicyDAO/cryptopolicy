import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Support",
  description:
    "Support the Crypto Policy Center's work on clear, principle-based Web3 regulation — directly on-chain, through open-source contribution, or by getting in touch.",
  alternates: { canonical: "/support" },
}

export default function SupportPage() {
  return (
    <section className="container mx-auto max-w-[64rem] py-12 md:py-24">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] md:text-5xl">
          Support Clear and Concise Web3-Friendly Regulation
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          Your financial contributions empower us to lobby for web3-friendly
          regulation. Choose how you want to support the Center:
        </p>
      </div>

      {/* Membership Benefits Section */}
      <div className="mb-10 mt-12">
        <h3 className="mb-6 text-center text-2xl font-bold md:text-3xl">
          Membership Benefits
        </h3>
        <ul className="mx-auto grid max-w-md grid-cols-1 gap-4 text-sm text-muted-foreground sm:grid-cols-2">
          <li className="flex items-center">
            <Icons.check className="mr-2 size-4" />
            DAO Membership
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 size-4" />
            Discord Access
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 size-4" />
            Invite-Only Events
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 size-4" />
            Newsletter
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 size-4" />
            Membership NFT
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 size-4" />
            Direct Web3 Support Provider
          </li>
        </ul>
      </div>
      {/* Donation Sections */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Web3 Donation Section */}
        <div className="flex flex-col items-center rounded-lg border p-6">
          <h3 className="mb-4 text-xl font-bold md:text-2xl">
            Support with Web3
          </h3>
          <p className="mb-6 text-center text-base text-muted-foreground">
            Send your support directly to the DAO wallet:
          </p>
          <div className="mb-6 flex flex-col items-center">
            <p className="mb-2 text-sm text-muted-foreground">
              CryptoPolicy.DAO (Send directly to CryptoPolicy.DAO)
            </p>
            <p className="mb-2 break-all text-center text-sm text-muted-foreground">
              0xD156382c8B7CF309865c7ACAc5Caea323f8C30A4
            </p>
            <p>Scan the QR code:</p>
            <Image
              src="/images/walletQR.png"
              alt="QR Code"
              width={150}
              height={150}
            />
          </div>
        </div>

        {/* Contribute / Contact Section */}
        <div className="flex flex-col items-center rounded-lg border p-6">
          <h3 className="mb-4 text-xl font-bold md:text-2xl">
            Other Ways to Support
          </h3>
          <p className="mb-6 text-center text-base text-muted-foreground">
            Contribute knowledge instead of funds: every cell of the{" "}
            <Link href="/matrix" className="underline underline-offset-4">
              Blockchain Regulation Matrix
            </Link>{" "}
            has a &quot;Suggest an addition&quot; link, and our work is open
            source on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
          <p className="mb-6 text-center text-base text-muted-foreground">
            For fiat contributions or membership questions, reach out on{" "}
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Twitter
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
