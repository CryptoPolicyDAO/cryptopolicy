import Link from "next/link"

import MatrixExplorer from "./MatrixExplorer"
import MatrixLongForm from "./MatrixLongForm"
import { brmLayers, type BrmPin } from "./brm-data"

/**
 * Shared shell for /matrix and its deep-linked layer/cell routes: the intro
 * copy plus the interactive explorer (optionally with a cell pre-pinned)
 * and the long-form reading view.
 */
export default function MatrixPage({
  initialPin = null,
}: {
  initialPin?: BrmPin | null
}) {
  return (
    <div className="mx-auto mb-5 mt-10 flex max-w-[60rem] flex-col items-center space-y-4 text-center">
      <h1 className="quando-regular text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        Blockchain Regulation Matrix
      </h1>
      <p className="quando-regular max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        The Blockchain Regulation Matrix (BRM) establishes a framework outlining
        the concerns of regulating the blockchain from both the government and
        the consumer perspective, and in doing so, provides a pragmatic and
        clear approach to Web3 regulation. The BRM outlines regulation aspects
        of the blockchain by viewing it as a blockchain stack in many layers
        starting with the electricity physically supporting the blockchain at
        the base layer, all the way to the process of offloading crypto to fiat
        currency. With centralization and decentralization on either side of the
        matrix, the primary objective of the BRM is to understand where and how
        regulation of the blockchain should be developed specific to each layer.
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
      <div className="brm-scope w-full">
        <div className="brm-info">
          <p>
            There are two illustrations of the Blockchain Regulation Matrix
            below, a short-form immediately below and a long-form afterwards.
          </p>
          <br></br>
          <p>
            Hover over the icons to preview each topic, and click any icon to
            pin its details — the address bar then links straight to that cell,
            ready to share.
          </p>
        </div>
      </div>

      <MatrixExplorer initialPin={initialPin} />

      <nav className="brm-scope w-full" aria-label="Matrix layers">
        <div className="brm-layer-index">
          <span className="brm-layer-index-label">Layer deep links:</span>
          {brmLayers.map((layer) => (
            <Link key={layer.id} href={`/matrix/${layer.id}`}>
              {layer.shortTitle ?? layer.title}
            </Link>
          ))}
        </div>
      </nav>

      <br />
      <br />
      <MatrixLongForm />
      <style>
        @import
        url(https://fonts.googleapis.com/css2?family=Quando&display=swap)
      </style>
    </div>
  )
}
