"use client"

import { Fragment, useState } from "react"

import {
  BRM_CATEGORIES,
  BRM_STATUS_META,
  brmLayers,
  brmOutline,
  getBrmAssessment,
  type BrmLayer,
  type BrmSide,
} from "./brm-data"

/** One layer's full five-question breakdown in the reading view. */
function LayerBlock({ layer, side }: { layer: BrmLayer; side: BrmSide }) {
  const content = layer[side]
  const assessment = getBrmAssessment(layer.id, side)
  const statusLabel = assessment
    ? BRM_STATUS_META.find((s) => s.status === assessment.status)?.label
    : null
  return (
    <div className="mb-5 pl-10 text-left">
      <div style={{ color: "var(--sub-header-color)", fontWeight: "bold" }}>
        {layer.title}
      </div>
      {assessment && (
        <p style={{ color: "var(--description-color)", fontStyle: "italic" }}>
          Regulatory status: {statusLabel} — {assessment.note}
        </p>
      )}
      {BRM_CATEGORIES.map((cat) => (
        <ul
          className="list-disc pl-12"
          style={{ color: "var(--sub-header-color)" }}
          key={cat.key}
        >
          <div>
            <h3>{cat.label}</h3>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--description-color)" }}
            >
              {content[cat.key].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </ul>
      ))}
      {content.regulation && content.regulation.length > 0 && (
        <ul
          className="list-disc pl-12"
          style={{ color: "var(--sub-header-color)" }}
        >
          <div>
            <h3>Current regulatory landscape</h3>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--description-color)" }}
            >
              {content.regulation.map((r) => (
                <li key={r.instrument}>
                  {r.instrument} — {r.jurisdiction}, {r.status}, {r.year}.{" "}
                  {r.note}
                </li>
              ))}
            </ul>
          </div>
        </ul>
      )}
    </div>
  )
}

function SideSection({ side }: { side: BrmSide }) {
  const sideTitle =
    side === "centralized" ? "Centralized Projects" : "Decentralized Projects"
  return (
    <>
      <h3
        className="my-5 text-center text-3xl"
        style={{ color: "var(--header-color)" }}
      >
        {sideTitle}
      </h3>
      <h3
        className="mb-10 mt-5 text-center text-2xl"
        style={{ color: "var(--sub-header-color)" }}
      >
        The content below applies only to {side} projects
      </h3>
      {brmLayers.map((layer) => (
        <Fragment key={layer.id}>
          <LayerBlock layer={layer} side={side} />
        </Fragment>
      ))}
    </>
  )
}

function MatrixLongForm() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="mx-auto text-center" style={{ maxWidth: "900px" }}>
      <button
        className={` focus:shadow-outline rounded px-4 py-2 font-bold focus:outline-none${
          !isExpanded ? " mb-20" : ""
        }`}
        onClick={toggleExpanded}
        style={{
          color: "var(--button-background)",
          backgroundColor: "var(--button-text)",
        }}
      >
        {isExpanded
          ? "Hide Blockchain Matrix Long Form"
          : "Show Blockchain Matrix Long Form"}
      </button>

      {isExpanded && (
        <div className="mx-auto mt-5">
          <h2
            className="text-center text-2xl"
            style={{ color: "var(--header-color)" }}
          >
            The Blockchain Stack encompasses the layers involved throughout a
            transaction, spanning from electricity generation to end-user
            interaction.
          </h2>
          <br></br>
          <p
            className="section-header text-left"
            style={{
              color: "var(--sub-header-color)",
              maxWidth: "600px",
              paddingLeft: "50px",
            }}
          >
            It consists of:
          </p>
          <div
            className="mt-5 text-left"
            style={{
              color: "var(--description-color)",
              maxWidth: "600px",
              paddingLeft: "70px",
            }}
          >
            {brmOutline().map((entry) =>
              entry.layers.length === 1 && !entry.layers[0].group ? (
                <div key={entry.title}>
                  {entry.layers[0].shortTitle ?? entry.layers[0].title}
                </div>
              ) : (
                <div key={entry.title}>
                  {entry.title}
                  <ul className="list-disc pl-12">
                    {entry.layers.map((layer) => (
                      <li key={layer.id}>{layer.shortTitle ?? layer.title}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>

          <p
            className="mt-10 text-center text-2xl"
            style={{ color: "var(--sub-header-color)" }}
          >
            Each layer demands consideration across various categories, inviting
            contributions to the Crypto Policy Center
          </p>
          <br></br>
          <div
            className="mt-5 text-left"
            style={{
              color: "var(--description-color)",
              maxWidth: "600px",
              paddingLeft: "70px",
            }}
          >
            <div>Government concerns</div>
            <div>Consumer risks</div>
            <div>Cons to over-regulation</div>
            <div>Cons to lack of regulation</div>
            <div>
              Assessment of existing blockchain technology meeting these
              obligations
            </div>
          </div>
          <br></br>
          <p
            className="mt-10 text-center text-4xl"
            style={{ color: "var(--header-color)" }}
          >
            Blockchain Regulation Matrix
          </p>
          <SideSection side="centralized" />
          <SideSection side="decentralized" />
        </div>
      )}
    </div>
  )
}

export default MatrixLongForm
