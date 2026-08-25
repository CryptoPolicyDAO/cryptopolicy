export const metadata = {
  title: "Join",
  description:
    "Join the Crypto Policy Center — member-governed on-chain. Contribute to the Blockchain Regulation Matrix or support our lobbying for Web3-friendly regulation.",
  alternates: { canonical: "/join" },
}

export default function Join() {
  return (
    <div className="quando-regular ">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1
          className="mb-5 mt-10 text-center text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          style={{ color: "var(--header-color)" }}
        >
          Contribute and Join
        </h1>
        <p
          className="my-10 text-center text-2xl font-bold sm:text-2xl"
          style={{ color: "var(--description-color)" }}
        >
          Join the Crypto Policy Center — member-governed on-chain — to enhance
          regulatory clarity and promote blockchain innovation
        </p>
        <div>
          <p
            className="mx-auto mb-10 text-center text-xl"
            style={{
              color: "var(--content-color)",
              maxWidth: "900px",
            }}
          >
            There are two ways to join the Crypto Policy Center; you can either
            support financially or contribute to our open-source projects. You
            can find more information about financially supporting the Center
            under the Support tab, though more information about contributing to
            our open-source projects is provided below.
          </p>
          <p
            className="mx-auto mb-10 text-center text-xl"
            style={{
              color: "var(--content-color)",
              maxWidth: "900px",
            }}
          >
            If you want to contribute to our open-source projects, there are
            several projects and ways to contribute to each. The first way is by
            providing context and insight into the{" "}
            <a href="/matrix" className="underline underline-offset-4">
              Blockchain Regulation Matrix
            </a>
            {" — "}every cell of the matrix has a &quot;Suggest an
            addition&quot; link that opens a prefilled contribution on GitHub.
            The second way to contribute is through the specific topics of
            research being conducted by the Center, which you can find in the{" "}
            <a href="/docs" className="underline underline-offset-4">
              documents
            </a>{" "}
            section.
          </p>
          <p
            className="mx-auto  mb-10 text-center text-xl"
            style={{
              color: "var(--content-color)",
              maxWidth: "900px",
            }}
          >
            As the Center earns revenue for its crypto lobbying efforts, all
            members split the on-chain treasury every quarter.
          </p>
        </div>
        <div className="container flex max-w-[40rem] flex-col items-center gap-4">
          <video autoPlay loop muted style={{ borderRadius: "20px" }}>
            <source src="/images/MemberNFT.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
