import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/cryptopolicydao/cryptopolicy",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <div>
      <>
        <section className="quando-regular space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Link
              href={siteConfig.links.twitter}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Twitter
            </Link>
            <h1 className="quando-regular text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Crypto Policy Center
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Lobbying for Web3-friendly Regulation
            </p>
            <div className="space-x-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="quando-regular container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              About
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our mission is to be a lobbying-firm that provides regulatory
              clarity and structure for Web3. The speed of blockchain innovation
              is outpacing the regulatory environment and leaving legislators
              behind in understanding and creating Web3-friendly regulation.
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              The underlying technology propelling the blockchain will
              continuously advance regardless of any political regulation, and
              for us to capture the benefits of emerging and innovative
              blockchain technology, we need to understand <strong>how</strong>{" "}
              and <strong>where</strong> regulation of the blockchain connect.
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              The backbone of Crypto Policy Center is the{" "}
              <a href="/matrix" className="underline underline-offset-4">
                Blockchain Regulation Matrix (BRM),{" "}
              </a>
              which approaches the blockchain as a stack that is to be regulated
              specific to each layer. The BRM is a tool to understand the
              regulatory environment of specific aspects of the blockchain from
              the consumer's perspective, as the main goal of Web3 regulation
              should be to protect the consumer.
            </p>

            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Membership in Crypto Policy Center will be limited and on an
              invitation-only basis. The goal is to produce pragmatic
              legislation that protects the consumer while promoting Web3
              innovation. This means that focus will be intent and collaboration
              will be concise in order to efficiently produce more effective
              results.
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              One of the ways to protect the consumer is to clearly identify
              criminal activity, which includes knowing that an exploit
              happened, how it happened, and who was responsible for it. Most
              legislation out there is reactive and not proactive, and the goal
              of Crypto Policy Center is to be at the forefront of consumer
              protection through proactive Web3-friendly lobbying and
              regulation. By producing pragmatic drafts of legislation, we can
              inform and educate while contributing to the momentum of web3
              innovation and helping to protect the Web3 consumer.
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              As we create legislative drafts, they will be posted in the{" "}
              <a href="../docs" className="underline underline-offset-4">
                documents
              </a>{" "}
              section for all to use.
            </p>
          </div>
        </section>
        <section id="open-source" className="container py-8 md:py-12 lg:py-24">
          <div className="quando-regular mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className=" text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Proudly Open Source
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Crypto Policy Center is completely open-source, meaning all of our
              work and any code is available on{" "}
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                GitHub
              </Link>
              {""} for you to review.
              <br />
            </p>
            {stars && (
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                <div className="flex size-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-5 text-foreground"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </div>
                <div className="flex items-center">
                  <div className="size-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                  <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                    {stars} stars on GitHub
                  </div>
                </div>
              </Link>
            )}
            <style>
              @import
              url(https://fonts.googleapis.com/css2?family=Quando&display=swap)
            </style>
          </div>
        </section>
        <div className="container relative flex max-w-[40rem] flex-col items-center gap-4">
          <video autoPlay loop muted style={{ borderRadius: "20px" }}>
            <source src="/images/logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    </div>
  )
}
