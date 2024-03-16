"use client"

import Matrix from "./Matrix"
import MatrixLongForm from "./MatrixLongForm"

export default function Contribute() {
  return (
    <section className="quando-regular container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[60rem] flex-col items-center space-y-4 text-center">
        <h2 className="quando-regular text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Blockchain Regulation Matrix
        </h2>
        <p className="quando-regular max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          The Blockchain Regulation Matrix (BRM) establishes a framework
          outlining the concerns of regulating the blockchain from both the
          government and the consumer perspective, and in doing so, provides a
          pragmatic and clear approach to Web3 regulation. The BRM outlines
          regulation aspects of the blockchain by viewing it as a blockchain
          stack in many layers starting with the electricity physically
          supporting the blockchain at the base layer, all the way to the
          process of offloading crypto to fiat currency. With centralization and
          decentralization on either side of the matrix, the primary objective
          of the BRM is to understand where and how regulation of the blockchain
          should be developed specific to each layer.
        </p>
        <p className="quando-regular max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Beginning with the electricty supporting the blockchain, as you hover
          over the images of each row, you'll see the specifics for that topic
          within that layer. The left side refers to projects that are
          centralized, while the right side refers to projects that are
          decentralized. For example, if there was an organization or business
          that wanted to provide electricity to miners in their area, that would
          be a centralized project. However, if there was a solar farm operating
          as a DAO that wanted to provide electricity to miners, that could be a
          decentralized project.
        </p>

        <br></br>
        <div
          className="mx-auto w-full max-w-lg rounded-md px-4 py-3"
          style={{
            color: "var(--sub-header-color)",
            backgroundColor: "var(--bac4)",
            fontSize: "1rem",
          }}
        >
          <p>
            There are two illustrations of the Blockchain Regulation Matrix
            below, a short-form immediately below and a long-form after.
          </p>
          <br></br>
          <p>Hover over each of the images below to read more information.</p>
        </div>

        <Matrix />
        <br />
        <br />
        <MatrixLongForm />
      </div>
      <style>
        @import
        url(https://fonts.googleapis.com/css2?family=Quando&display=swap)
      </style>
    </section>
  )
}
