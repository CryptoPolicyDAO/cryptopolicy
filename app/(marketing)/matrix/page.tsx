"use client"

import Matrix from "./Matrix"
import MatrixLongForm from "./MatrixLongForm"

export default function Contribute() {
  return (
    <div className="quando-regular">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1
          className="mt-20 text-center"
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
            The Blockchain Regulation Matrix (BRM) establishes a framework
            outlining the concerns of regulating the blockchain from the
            governments and the consumers perspective. By doing so, it provides
            a backbone to approach web3 regulation pragmatically and clearly.
            The BRM outlines regulation aspects of the blockchain by viewing it
            as a blockchain stack in many layers starting with the electricity
            supporting the blockchain all the way to offloading your crypto for
            fiat. With centralization and decentralization on either side of the
            matrix. the primary objective of the BRM is to understand where and
            how regulation of the blockchain should be approached in order to
            provide friendly web3 regulation.
          </p>
          <br></br>
          <p
            className="mx-auto text-center"
            style={{
              color: "var(--content-color)",
              maxWidth: "900px",
              fontSize: "1.5rem",
            }}
          >
            The first layer of the BRM starts with the electricty supporting the
            blockchain. As you hover over the images of each row, you'll see the
            specifics for that topic within that layer. The left side refers to
            projects that are centralized, while the right side refers to
            projects that are decentralized. For example, if there was a
            municipality that wanted to provide electricity to miners in their
            area, that would be a centralized project. Or if there was a solar
            farm that wanted to provide electricity to miners, that could be a
            decentralized project, depending on the structure of the solar farm.
          </p>
          <br></br>
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
            There are two illustrations of the Blockchain Regulation Matrix
            below, a short-form immediately below and a long-form after.
          </p>
          <br></br>
          <p>Hover over each of the images below to read more information.</p>
        </div>
      </div>
      <Matrix />
      <br />
      <br />
      <MatrixLongForm />
    </div>
  )
}
