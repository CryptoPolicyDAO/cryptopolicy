import "./App.css"
import Matrix from "./Matrix"
import MatrixLongForm from "./MatrixLongForm"

export default function Contribute() {
  return (
    <div>
      <h1
        className="mb-5 mt-20 text-center"
        style={{ color: "var(--header-color)", fontSize: "2rem" }}
      >
        Blockchain Regulation Matrix
      </h1>
      <div>
        <p
          className="mx-auto my-10 text-center"
          style={{
            color: "var(--description-color)",
            fontSize: "1.5rem",
            maxWidth: "900px",
          }}
        >
          The Blockchain Regulation Matrix (BRM) aims to construct a
          comprehensive framework outlining blockchain&apos;s regulation
          aspects. It delves into centralized and decentralized protocols,
          emphasizing compliance without compromising blockchain ethos. This
          matrix categorizes technology stacks and invites contributions to
          assess each layer&apos;s government concerns, consumer risks,
          regulatory pros, and cons.
        </p>
        <br></br>
        <p
          className="mx-auto mb-10 text-center"
          style={{
            color: "var(--content-color)",
            maxWidth: "900px",
            fontSize: "1rem",
          }}
        >
          This initiative aims to spotlight areas of concern, particularly
          focusing on aspects related to the Howie test&apos;s significance in
          determining whether a token qualifies as a security or commodity.
          However, paramount to all objectives is the identification of spaces
          within blockchain technology that adhere to its ethos while ensuring
          regulatory compliance.
        </p>
        <br></br>
        <p
          className="mx-auto mb-10 text-center"
          style={{
            color: "var(--content-color)",
            maxWidth: "900px",
            fontSize: "1rem",
          }}
        >
          The BRM comprises a conglomerate of technology and resources
          constituting the foundational structure of the blockchain and all its
          derivatives. Initially, the BRM dissects the blockchain stack into two
          core categories: centralized and decentralized. Subsequently, each
          category is subjected to a predefined set of inquiries across various
          layers of the blockchain stack.
        </p>
      </div>
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
          There are two illustrations of the Blockchain Regulation Matrix below,
          a short-form immediately below and a long-form after.
        </p>
        <br></br>
        <p>Hover over each of the images below to read more information.</p>
      </div>
      <Matrix />
      <br />
      <br />
      <MatrixLongForm />
    </div>
  )
}
