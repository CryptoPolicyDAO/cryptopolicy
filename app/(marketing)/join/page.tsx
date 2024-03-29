export const metadata = {
  title: "Join",
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
          Join Crypto Policy DAO to enhance regulatory clarity and promote
          blockchain innovation
        </p>
        <div>
          <p
            className="mx-auto mb-10 text-center text-xl"
            style={{
              color: "var(--content-color)",
              maxWidth: "900px",
            }}
          >
            There are two ways to join Crypto Policy DAO; you can either support
            financially or contribute to our open-source projects. You can find
            more information about financially supporting the DAO under the
            Support tab, though more information about contributing to our
            open-source projects is provided below.
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
            providing context and insight into the BRM, which you can find more
            infomartion about in the{" "}
            <a href="/documentation" className="underline underline-offset-4">
              documents
            </a>{" "}
            section. The second way to contribute is through the specific topics
            of research that is being conducted by the DAO, which you can find
            more about in the documents section as well.
          </p>
          <p
            className="mx-auto  mb-10 text-center text-xl"
            style={{
              color: "var(--content-color)",
              maxWidth: "900px",
            }}
          >
            As the DAO earns revenue for its crypto lobbying efforts, all
            members will split the DAO&apos;s treasury every quarter, and you
            can view the current revenue under the Treasury tab.
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
