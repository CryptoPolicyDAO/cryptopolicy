import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Support",
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
          regulation. Choose how you want to support the DAO:
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
        {/* Stripe Donation Section */}
        <div className="flex flex-col items-center rounded-lg border p-6">
          <h3 className="mb-4 text-xl font-bold md:text-2xl">
            Support with Stripe
          </h3>
          <p className="mb-6 text-center text-base text-muted-foreground">
            Make a one-time or monthly donation using Stripe.
          </p>
          <div className="mb-6 flex w-full justify-between">
            {/* One-time Donation */}
            <div className="flex flex-col items-center">
              <h4 className="text-4xl font-bold md:text-5xl">$5</h4>
              <p className="text-base text-muted-foreground md:text-lg">
                One-time Support
              </p>
              <Link href="/stripe-donation" passHref>
                <p className={cn(buttonVariants({ size: "lg" }))}>Donate Now</p>
              </Link>
            </div>
            {/* Monthly Donation */}
            <div className="flex flex-col items-center">
              <h4 className="text-4xl font-bold md:text-5xl">$5</h4>
              <p className="text-base text-muted-foreground md:text-lg">
                Monthly Support
              </p>
              <Link href="/stripe-donation" passHref>
                <p className={cn(buttonVariants({ size: "lg" }))}>Donate Now</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Web3 Donation Section */}
        <div className="flex flex-col items-center rounded-lg border p-6">
          <h3 className="mb-4 text-xl font-bold md:text-2xl">
            Support with Web3
          </h3>
          <p className="mb-6 text-center text-base text-muted-foreground">
            Choose any of these options to send your support directly to our DAO
            wallet:
          </p>
          <div className="mb-6 flex flex-col items-center">
            <p className="mb-2 text-sm text-muted-foreground">
              CryptoPolicy.DAO (Send directly to CryptoPolicy.DAO)
            </p>
            <p className="mb-2 text-sm text-muted-foreground">
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
      </div>
    </section>
  )
}
