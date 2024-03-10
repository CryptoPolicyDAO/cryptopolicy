export const metadata = {
  title: "DAO Members",
}

export default function Members() {
  return (
    <div className="quando-regular ">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1
          className="mb-5 mt-10 text-center text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          style={{ color: "var(--header-color)" }}
        >
          Meet the DAO Members
        </h1>
        <p
          className=" text-center text-2xl font-bold sm:text-2xl"
          style={{ color: "var(--description-color)" }}
        >
          Founder - Michael Weaver
        </p>
        <div>
          <p
            className="mx-auto text-center text-xl"
            style={{
              color: "var(--content-color)",
              maxWidth: "900px",
            }}
          >
            Michael saw the need for a DAO that could help provide regulatory
            clarity and wanted to create a community that could help provide
            that clarity. He has a bachelors degree in Political Science and an
            MBA in data analytics from the University of South Carolina.
          </p>
        </div>
        <div className="container flex max-w-[40rem] flex-col items-center gap-4">
          <img
            src="/images/weaver.jpg"
            alt="Logo"
            width={200} // Adjust width as needed
            height={100} // Adjust height as needed
          />
        </div>
      </div>
    </div>
  )
}
