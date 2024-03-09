"use client"

import { useState } from "react"

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
            <div>Electricity</div>
            <div>Settlement Layer</div>
            <div>Node / Validator</div>
            <div>
              Consensus Layer
              <ul className="list-disc pl-12">
                <li>Computation Intensive Based</li>
                <li>Capabilities Based</li>
                <li>Voting Based</li>
              </ul>
            </div>
            <div>Transaction Layer</div>
            <div>On-chain Data Storage</div>
            <div>
              Asset Layer
              <ul className="list-disc pl-12">
                <li>Stablecoins</li>
                <li>Fungible Tokens (erc20, etc)</li>
                <li>Non-Fungible Tokens (erc721)</li>
              </ul>
            </div>
            <div>Exchange Layer</div>
            <div>Protocol Layer</div>
            <div>Application Layer</div>
            <div>Permanent Storage Layer</div>
            <div>Internet Browser</div>
            <div>Developer</div>
            <div>Programming Language Auditor</div>
            <div>DeFi Architecture Security</div>
            <div>DeFi Architecture Standards / Auditor</div>
            <div>Fiat Onboarding / Offboarding Access</div>
          </div>

          <p
            className="mt-10 text-center text-2xl"
            style={{ color: "var(--sub-header-color)" }}
          >
            Each layer demands consideration across various categories, inviting
            contributions to the Crypto Policy DAO
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
          <h3
            className="mb-5 mt-5 text-center text-3xl"
            style={{ color: "var(--header-color)" }}
          >
            Centralized Projects
          </h3>
          <h3
            className="mb-10 mt-5 text-center text-2xl"
            style={{ color: "var(--sub-header-color)" }}
          >
            The content below applies only to centralized projects
          </h3>
          <div className="mb-5 pl-10 text-left">
            <div
              style={{ color: "var(--sub-header-color)", fontWeight: "bold" }}
            >
              Electricity
            </div>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                {" "}
                Government Concerns
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--description-color)" }}
                >
                  <li>
                    Protecting consumers from loss of use due to a geopolitical
                    situation
                  </li>
                  <li>
                    Amount of electricity required to maintain the blockchain
                    and the amount per transaction
                  </li>
                </ul>
              </div>
            </ul>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                Consumer Risks
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--description-color)" }}
                >
                  <li>
                    Potential geopolitical risks leading to electricity access
                    disruptions
                  </li>
                </ul>
              </div>
            </ul>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                Cons to over-regulation
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--description-color)" }}
                >
                  <li>
                    Potential risks of concentration and control by certain
                    countries
                  </li>
                </ul>
              </div>
            </ul>

            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                <h3>Cons to lack of regulation</h3>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--description-color)" }}
                >
                  <li>
                    Potential displacement of development activities to more
                    permissive jurisdictions
                  </li>
                </ul>
              </div>
            </ul>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                <h3>
                  Does blockchain technology currently exist to fulfill these
                  obligations, and if so, what is it?
                </h3>
              </div>
            </ul>
          </div>
          <div className="mb-5 pl-10 text-left">
            <div
              style={{ color: "var(--sub-header-color)", fontWeight: "bold" }}
            >
              Settlement Layer
            </div>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                <h3>Government Concerns</h3>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--description-color)" }}
                >
                  <li>
                    Not being able to update / edit fraudulent transactions
                  </li>
                  <li>
                    Not being able to identify immoral activity that could be
                    deemed fraudulent
                  </li>
                </ul>
              </div>
            </ul>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                <h3>Consumer Risks</h3>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--description-color)" }}
                >
                  <li>Lack of due diligence</li>
                  <li>Security and attacks</li>
                </ul>
              </div>
            </ul>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                <h3>Cons to over-regulation</h3>
              </div>
            </ul>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                <h3>Cons to lack of regulation</h3>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--description-color)" }}
                >
                  <li>
                    Potential displacement of development activities to more
                    permissive jurisdictions
                  </li>
                </ul>
              </div>
            </ul>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                <h3>
                  Does blockchain technology currently exist to fulfill these
                  obligations, and if so, what is it?
                </h3>
              </div>
            </ul>
          </div>
          <div className="mb-5 pl-10 text-left">
            <div
              style={{ color: "var(--sub-header-color)", fontWeight: "bold" }}
            >
              Node / Validator
            </div>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                <h3>Government Concerns</h3>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--description-color)" }}
                >
                  <li>Not reporting income</li>
                  <li>Fault tolerant consensus</li>
                  <li>Decryption Standards</li>
                </ul>
              </div>
            </ul>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                <h3>Consumer Risks</h3>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--description-color)" }}
                >
                  <li>Private Transactions</li>
                  <li>Selective Transactions</li>
                  <li>MEV Protection</li>
                </ul>
              </div>
            </ul>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                <h3>Cons to over-regulation</h3>
              </div>
            </ul>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <div>
                <h3>Cons to lack of regulation</h3>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--description-color)" }}
                >
                  <li>
                    Potential displacement of development activities to more
                    permissive jurisdictions
                  </li>
                </ul>
              </div>
            </ul>
          </div>
          <div className="mb-5 pl-10 text-left">
            <div
              style={{ color: "var(--sub-header-color)", fontWeight: "bold" }}
            >
              Consensus Layer
            </div>
            <ul
              className="list-disc pl-12"
              style={{ color: "var(--sub-header-color)" }}
            >
              <li>
                Computation Intensive Based
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--description-color)" }}
                >
                  <li>
                    Government Concerns
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Amount of electricity being used comparatively to
                        similar technology that uses less
                      </li>
                      <li>Fault tolerant consensus</li>
                      <li>Decryption Standards</li>
                    </ul>
                  </li>
                  <li>
                    Consumer Risks
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        High energy consumption leading to environmental
                        concerns
                      </li>
                      <li>Potential centralization of mining power</li>
                      <li>Vulnerability to 51% attacks</li>
                    </ul>
                  </li>
                  <li>
                    Cons to over-regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Stifling innovation and development of energy-efficient
                        consensus mechanisms
                      </li>
                      <li>
                        Driving blockchain projects to operate in jurisdictions
                        with more favorable regulations
                      </li>
                      <li>
                        Disincentivizing network participation due to excessive
                        compliance requirements
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to lack of regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Lack of standardization leading to security
                        vulnerabilities
                      </li>
                      <li>
                        Potential for concentration of power among mining
                        entities
                      </li>
                      <li>
                        Difficulty in addressing fraudulent or malicious
                        activities
                      </li>
                    </ul>
                  </li>
                  <li>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Proof of Stake (PoS) consensus algorithms that require
                        significantly less energy
                      </li>
                      <li>
                        Byzantine Fault Tolerance (BFT) protocols ensuring fault
                        tolerance
                      </li>
                      <li>
                        Advanced encryption techniques for secure transactions
                        and data privacy
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Capabilities Based
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <li>
                    Government Concerns
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>Upgrading consumer security standards</li>
                    </ul>
                  </li>
                  <li>
                    Consumer Risks
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>Insufficient protection of user data and privacy</li>
                      <li>
                        Potential exposure to smart contract vulnerabilities
                      </li>
                      <li>
                        Lack of recourse in case of unauthorized transactions
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to over-regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Hampering innovation by imposing rigid security
                        standards
                      </li>
                      <li>
                        Reducing accessibility and inclusivity by raising entry
                        barriers
                      </li>
                      <li>
                        Limiting the potential of decentralized applications
                        (dApps) due to excessive control
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to lack of regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Proliferation of insecure smart contracts leading to
                        financial losses
                      </li>
                      <li>
                        Erosion of consumer trust and confidence in blockchain
                        applications
                      </li>
                      <li>
                        Difficulty in addressing cross-border disputes and
                        fraudulent activities
                      </li>
                    </ul>
                  </li>
                  <li>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li />
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Voting Based
                <ul
                  className="mb-5 list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <li>
                    Government Concerns
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>Ensuring fair and transparent voting processes</li>
                      <li>Preventing voter fraud and manipulation</li>
                      <li>Addressing potential collusion or vote-buying</li>
                    </ul>
                  </li>
                  <li>
                    Consumer Risks
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Lack of anonymity in voting leading to privacy concerns
                      </li>
                      <li>
                        Vulnerability to Sybil attacks or stake concentration
                      </li>
                      <li>Complexity of verifying the legitimacy of votes</li>
                    </ul>
                  </li>
                  <li>
                    Cons to over-regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Overly strict regulations hindering the flexibility and
                        innovation of voting mechanisms
                      </li>
                      <li>
                        Potential centralization of voting power due to
                        stringent requirements
                      </li>
                      <li>
                        Difficulty in adapting to rapidly changing technological
                        advancements
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to lack of regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Vulnerability to malicious attacks on the voting process
                      </li>
                      <li>
                        Lack of accountability and transparency in voting
                        results
                      </li>
                      <li>
                        Challenges in addressing disputes and irregularities
                      </li>
                    </ul>
                  </li>
                  <li>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    ></ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="mb-5 pl-10 text-left">
              <div
                style={{ color: "var(--sub-header-color)", fontWeight: "bold" }}
              >
                Transaction Layer
              </div>
              <ul
                className="list-disc pl-12"
                style={{ color: "var(--sub-header-color)" }}
              >
                <li>
                  Government Concerns
                  <ul
                    className="list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  >
                    <li>
                      Ensuring traceability and transparency of transactions
                    </li>
                    <li>
                      Preventing illegal activities such as money laundering and
                      fraud
                    </li>
                    <li>
                      Addressing cross-border transaction challenges and
                      regulatory compliance
                    </li>
                    <li>
                      An anonymous public ledger inhibits appropriate
                      recordkeeping
                    </li>
                  </ul>
                </li>
                <li>
                  Consumer Risks
                  <ul
                    className="list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  >
                    <li>Exposure to potential transaction delays or fees</li>
                    <li>
                      Privacy concerns related to transaction history being
                      publicly accessible
                    </li>
                    <li>Risk of inaccurate or irreversible transactions</li>
                  </ul>
                </li>
                <li>
                  Cons to over-regulation
                  <ul
                    className="list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  >
                    <li>
                      Stifling innovation and experimentation with new
                      transaction models
                    </li>
                    <li>
                      Restricting financial inclusion by imposing excessive
                      compliance requirements
                    </li>
                    <li>
                      Hampering the usability and efficiency of blockchain
                      transactions
                    </li>
                  </ul>
                </li>
                <li>
                  Cons to lack of regulation
                  <ul
                    className="list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  >
                    <li>
                      Increased susceptibility to fraudulent or malicious
                      transactions
                    </li>
                    <li>
                      Difficulty in resolving disputes related to unauthorized
                      or erroneous transactions
                    </li>
                    <li>Lack of consumer protection and accountability</li>
                  </ul>
                </li>
                <li>
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>
                  <ul
                    className="mb-5 list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  ></ul>
                </li>
              </ul>
            </div>
            <div className="mb-5 pl-10 text-left">
              <div
                style={{ color: "var(--sub-header-color)", fontWeight: "bold" }}
              >
                On-chain Data Storage
              </div>
              <ul
                className="list-disc pl-12"
                style={{ color: "var(--sub-header-color)" }}
              >
                <li>
                  Government Concerns
                  <ul
                    className="list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  >
                    <li>Storage space mapping</li>
                    <li>
                      Data sovereignty and jurisdictional challenges in a
                      decentralized environment
                    </li>
                    <li>
                      Ensuring compliance with data protection and privacy
                      regulations
                    </li>
                    <li>
                      Addressing the potential use of blockchain for illegal or
                      illicit data storage
                    </li>
                  </ul>
                </li>
                <li>
                  Consumer Risks
                  <ul
                    className="list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  >
                    <li>
                      Exposure of sensitive or personal data to public scrutiny
                    </li>
                    <li>
                      Risk of data loss or corruption due to the immutability of
                      blockchain
                    </li>
                    <li>
                      Challenges in managing data access and permissions in a
                      decentralized system
                    </li>
                  </ul>
                </li>
                <li>
                  Cons to over-regulation
                  <ul
                    className="list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  >
                    <li>
                      Impeding the adoption of blockchain for legitimate and
                      innovative data storage use cases
                    </li>
                    <li>
                      Limiting the potential of decentralized applications
                      (dApps) requiring data storage
                    </li>
                    <li>
                      Inhibiting data interoperability and portability across
                      different blockchain networks
                    </li>
                  </ul>
                </li>
                <li>
                  Cons to lack of regulation
                  <ul
                    className="list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  >
                    <li>
                      Lack of standardized data storage practices leading to
                      security vulnerabilities
                    </li>
                    <li>
                      Difficulty in addressing disputes related to ownership and
                      control of stored data
                    </li>
                    <li>
                      Potential misuse of blockchain for storing illegal or
                      harmful content
                    </li>
                  </ul>
                </li>
                <li>
                  Does blockchain technology currently exist to fulfill these
                  obligations, and if so, what is it?
                  <ul
                    className="mb-5 list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  ></ul>
                </li>
              </ul>
            </div>
            <div className="mb-5 pl-10 text-left">
              <div
                style={{ color: "var(--sub-header-color)", fontWeight: "bold" }}
              >
                Asset Layer
              </div>
              <ul
                className="list-disc pl-12"
                style={{ color: "var(--sub-header-color)" }}
              >
                <li>
                  Stablecoins
                  <ul
                    className="list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  >
                    <li>
                      Government Concerns
                      <ul
                        className="list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        <li>
                          Ensuring stability and value preservation of
                          stablecoins
                        </li>
                        <li>
                          Preventing money laundering and illegal transactions
                        </li>
                        <li>
                          Are stablecoins defined correctly in programming terms
                        </li>
                        <li>
                          The effects of internal inflation based on the
                          unlimited burning / minting mechanisms of popular
                          stables
                        </li>
                        <li>
                          Addressing potential systemic risks from widespread
                          stablecoin adoption
                        </li>
                        <li>
                          Does crypto transaction provenance equally replace not
                          having serial numbers on gov&apos;t released
                          stablecoins?
                        </li>
                      </ul>
                    </li>
                    <li>
                      Consumer Risks
                      <ul
                        className="list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        <li>
                          Risk of stablecoin issuer insolvency or mismanagement
                        </li>
                        <li>
                          Lack of transparency in stablecoin reserves and
                          collateral
                        </li>
                        <li>
                          Potential loss of value due to changes in underlying
                          collateral
                        </li>
                        <li>Irrevocability of fraudulent transactions</li>
                      </ul>
                    </li>
                    <li>
                      Cons to over-regulation
                      <ul
                        className="list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        <li>
                          Hindering the growth and innovation of stablecoin use
                          cases
                        </li>
                        <li>
                          Restricting accessibility and availability of
                          stablecoin services
                        </li>
                        <li>
                          Imposing barriers for startups and new entrants in the
                          stablecoin market
                        </li>
                      </ul>
                    </li>
                    <li>
                      Cons to lack of regulation
                      <ul
                        className="list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        <li>
                          Lack of consumer protection and accountability in
                          stablecoin issuance
                        </li>
                        <li>
                          Vulnerability to financial crises or market
                          manipulation
                        </li>
                        <li>
                          Difficulty in addressing cross-border regulatory
                          challenges
                        </li>
                      </ul>
                    </li>
                    <li>
                      Does blockchain technology currently exist to fulfill
                      these obligations, and if so, what is it?
                      <ul
                        className="mb-5 list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        {/* Include specific technology fulfilling these obligations */}
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul
                className="list-disc pl-12"
                style={{ color: "var(--sub-header-color)" }}
              >
                <li>
                  Fungible Tokens (ERC20s, etc)
                  <ul
                    className="list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  >
                    <li>
                      Government Concerns
                      <ul
                        className="list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        <li>
                          Mutability presents a scenario of being &quot;derived
                          from the efforts of others&quot; which leans towards
                          being a security.
                        </li>
                        <li>
                          Protecting consumers from fraudulent or misleading
                          token offerings.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Consumer Risks
                      <ul
                        className="list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        <li>
                          Security of transactions: Ensuring that transactions
                          involving fungible tokens are secure, protecting users
                          from hacking, theft, or unauthorized access to their
                          tokens.
                        </li>
                        <li>
                          Centralization risks affecting token liquidity, market
                          stability, and control.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Cons to over-regulation
                      <ul
                        className="list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        <li>
                          Overly stringent regulations could stifle innovation
                          in fungible token use cases and hinder the growth of
                          blockchain projects and applications.
                        </li>
                        <li>
                          Excessive regulation might discourage token issuers
                          and developers from exploring new models and
                          tokenization methods.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Cons to lack of regulation
                      <ul
                        className="list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        <li>
                          Lack of regulatory oversight could lead to fraudulent
                          or misleading token offerings, potentially resulting
                          in financial losses for investors.
                        </li>
                        <li>
                          Absence of clear regulations might deter legitimate
                          projects from entering the market due to uncertainties
                          surrounding legal compliance.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Does blockchain technology currently exist to fulfill
                      these obligations, and if so, what is it?
                      <ul
                        className="mb-5 list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      ></ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul
                className="list-disc pl-12"
                style={{ color: "var(--sub-header-color)" }}
              >
                <li>
                  Non-Fungible Tokens (NFTs)
                  <ul
                    className="list-disc pl-12"
                    style={{ color: "var(--description-color)" }}
                  >
                    <li>
                      Government Concerns
                      <ul
                        className="list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        <li>
                          classNameification uncertainty for diverse NFT assets
                          like property records, medical records, or even voting
                          mechanisms
                        </li>
                        <li>Data privacy of sensitive NFT content</li>
                        <li>
                          Not registering with FinCen or the SEC if selling
                          securities
                        </li>
                        <li>Being a vehicle for money laundering</li>
                      </ul>
                    </li>
                    <li>
                      Consumer Risks
                      <ul
                        className="list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        <li>
                          Data exposure in NFTs, even with restricted access
                        </li>
                        <li>Ownership disputes over real-world asset NFTs</li>
                        <li>Limited access to tokens due to over-regulation</li>
                        <li>
                          Inability to create securities in a regulated
                          environment
                        </li>
                      </ul>
                    </li>
                    <li>
                      Cons to over-regulation
                      <ul
                        className="list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        <li>Stifled innovation due to heavy regulations</li>
                        <li>
                          Barrier to entry for startups due to compliance costs
                        </li>
                        <li>
                          Lack of security standards and risk management
                          standards
                        </li>
                        <li>
                          Limited consumer protection from upgradable features
                        </li>
                      </ul>
                    </li>
                    <li>
                      Cons to lack of regulation
                      <ul
                        className="list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      >
                        <li>Vulnerability to NFT fraud without clear rules</li>
                        <li>Ownership ambiguity leading to disputes</li>
                        <li>Lack of potential international economic growth</li>
                      </ul>
                    </li>
                    <li>
                      Does blockchain technology currently exist to fulfill
                      these obligations, and if so, what is it?
                      <ul
                        className="mb-5 list-disc pl-12"
                        style={{ color: "var(--description-color)" }}
                      ></ul>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="mb-5 pl-10 text-left">
                <div
                  style={{
                    color: "var(--sub-header-color)",
                    fontWeight: "bold",
                  }}
                >
                  Exchange Layer
                </div>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <li>
                    Government Concerns
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Not registering with FinCen or the SEC if facilitating
                        securities trading
                      </li>
                      <li>
                        Potential facilitation of money laundering on the
                        platform
                      </li>
                    </ul>
                  </li>
                  <li>
                    Consumer Risks
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>High transaction fees in decentralized exchanges</li>
                      <li>Impermanent loss risk in liquidity provision</li>
                      <li>
                        Limited access to certain tokens due to regulatory
                        restrictions
                      </li>
                      <li>
                        Lack of traditional customer support and dispute
                        resolution
                      </li>
                      <li>
                        Interoperability challenges within the decentralized
                        finance (DeFi) ecosystem
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to over-regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Overbearing regulations stifling innovation in
                        decentralized exchanges
                      </li>
                      <li>
                        Regulatory hurdles limiting access to tokenized assets
                      </li>
                      <li>
                        Difficulty in complying with complex and varying global
                        regulations
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to lack of regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Lack of investor protection and avenues for dispute
                        resolution
                      </li>
                      <li>
                        Potential for scams and fraudulent projects on
                        unregulated platforms
                      </li>
                      <li>
                        Difficulty in establishing trust without clear
                        regulatory standards
                      </li>
                      <li>
                        Absence of standardized security practices and risk
                        mitigation
                      </li>
                    </ul>
                  </li>
                  <li>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                    <ul
                      className="mb-5 list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    ></ul>
                  </li>
                </ul>
              </div>
              <div className="mb-5 pl-10 text-left">
                <div
                  style={{
                    color: "var(--sub-header-color)",
                    fontWeight: "bold",
                  }}
                >
                  Application Layer
                </div>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <li>
                    Gov&apos;t Concerns
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Lack of accountability in centralized applications
                        (cApps)
                      </li>
                      <li>
                        Operating without formal business registration and
                        oversight
                      </li>
                      <li>
                        Potential limited fiduciary liability for actions taken
                        on cApps
                      </li>
                    </ul>
                  </li>
                  <li>
                    Consumer Risks
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Data privacy concerns due to centralized control over
                        user information
                      </li>
                      <li>
                        Vulnerability to data breaches and security incidents
                      </li>
                      <li>
                        Dependence on the cApp operator&apos;s security and
                        practices
                      </li>
                      <li>
                        Limited recourse in case of disputes or malfunctions
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to over-regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Stifling innovation and growth of centralized cApp
                        ecosystem
                      </li>
                      <li>
                        Higher entry barriers for startups and new entrants
                      </li>
                      <li>
                        Potential reduction in user accessibility and choice
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to lack of regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Lack of standardized security and data protection
                        practices
                      </li>
                      <li>
                        Potential for unscrupulous behavior and fraudulent
                        activities
                      </li>
                      <li>
                        Limited avenues for consumer protection and dispute
                        resolution
                      </li>
                    </ul>
                  </li>
                  <li>
                    Does blockchain tech exist for this?
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li />
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mb-5 pl-10 text-left">
                <div
                  style={{
                    color: "var(--sub-header-color)",
                    fontWeight: "bold",
                  }}
                >
                  Internet Browser Layer
                </div>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <li>
                    Gov&apos;t Concerns
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Facilitating international business transactions and
                        trade
                      </li>
                      <li>
                        Enabling international dispute resolution mechanisms
                      </li>
                      <li>
                        Ensuring secure wallet integration and user data
                        protection
                      </li>
                    </ul>
                  </li>
                  <li>
                    Consumer Risks
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Privacy concerns due to browser tracking and data
                        collection
                      </li>
                      <li>
                        Potential exposure to malicious websites and phishing
                        attacks
                      </li>
                      <li>
                        Risk of unauthorized access to integrated wallets and
                        sensitive data
                      </li>
                      <li>
                        Dependence on browser security for safeguarding
                        cryptocurrency transactions
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to over-regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Excessive regulations stifling innovation and
                        development of blockchain-integrated browsers
                      </li>
                      <li>
                        Potential barriers to international collaboration and
                        cross-border data flows
                      </li>
                      <li>
                        Complex compliance requirements hindering user adoption
                        and accessibility
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to lack of regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Lack of specific support for addressing social
                        engineering threats through the browser
                      </li>
                    </ul>
                  </li>
                  <li>
                    Does blockchain tech exist for this?
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li />
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mb-5 pl-10 text-left">
                <div
                  style={{
                    color: "var(--sub-header-color)",
                    fontWeight: "bold",
                  }}
                >
                  Developer Layer
                </div>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <li>
                    Gov&apos;t Concerns
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Facilitating international business transactions and
                        trade
                      </li>
                      <li>
                        Why regulate the developer instead of the end product?
                      </li>
                      <li>
                        Is this a significant harm to the public currently being
                        unregulated?
                      </li>
                      <li>
                        Ensuring code quality and security in blockchain
                        applications
                      </li>
                      <li>
                        Minimizing risks of vulnerabilities and exploits in the
                        blockchain ecosystem
                      </li>
                      <li>
                        Addressing potential misuse of blockchain technology for
                        illegal or malicious purposes
                      </li>
                    </ul>
                  </li>
                  <li>
                    Consumer Risks
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        How can I protect myself without having to be a smart
                        contract auditor?
                      </li>
                      <li>
                        Exposure to smart contract vulnerabilities and financial
                        losses
                      </li>
                      <li>
                        Lack of recourse in case of errors or bugs in blockchain
                        applications
                      </li>
                      <li>
                        Difficulty in verifying the security and legitimacy of
                        third-party smart contracts
                      </li>
                      <li>
                        Limited understanding of complex blockchain technologies
                        leading to mistakes
                      </li>
                      <li>
                        No coding or certification requirements or standards
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to over-regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Excessive regulations stifling innovation and hindering
                        developer experimentation
                      </li>
                      <li>
                        Barriers to entry for developers, limiting accessibility
                        and diversity in the ecosystem
                      </li>
                      <li>
                        Potential migration of developers to more permissive
                        jurisdictions
                      </li>
                      <li>
                        Slowing down the pace of technological advancement in
                        the blockchain space
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to lack of regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Proliferation of insecure and unreliable smart contracts
                      </li>
                      <li>
                        Lack of standardized coding practices leading to
                        increased risks
                      </li>
                      <li>
                        Difficulty in addressing disputes and liabilities
                        arising from faulty code
                      </li>
                      <li>
                        Undermining public confidence in blockchain technology
                        due to frequent incidents
                      </li>
                    </ul>
                  </li>
                  <li>
                    Does any standardization exist for this?
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li />
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mb-5 pl-10 text-left">
                <div
                  style={{
                    color: "var(--sub-header-color)",
                    fontWeight: "bold",
                  }}
                >
                  DeFi Architecture Security
                </div>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <li>
                    Gov&apos;t Concerns
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>How are people losing assets and why?</li>
                      <li>DeFi stack interoperability standards</li>
                      <li>
                        Ensuring the protection of user assets from
                        cross-protocol vulnerabilities and exploits
                      </li>
                      <li>
                        Ensuring that a protocol can&apos;t be misused because
                        of a DeFi stack interoperability issue
                      </li>
                      <li>
                        Preventing the use of DeFi platforms for money
                        laundering and illicit activities
                      </li>
                    </ul>
                  </li>
                  <li>
                    Consumer Risks
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Exposure to smart contract vulnerabilities leading to
                        asset losses
                      </li>
                      <li>
                        Risk of funds being locked or inaccessible due to
                        unforeseen circumstances
                      </li>
                      <li>
                        Dependence on the platform&apos;s security measures and
                        risk management
                      </li>
                      <li>
                        Lack of understanding of complex DeFi protocols and
                        potential pitfalls
                      </li>
                      <li>
                        Limited recourse in case of platform hacks or security
                        incidents
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to over-regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Excessive regulations stifling innovation and hindering
                        DeFi development
                      </li>
                      <li>
                        Higher compliance costs limiting the accessibility of
                        DeFi products
                      </li>
                      <li>
                        Slowing down the introduction of new features and
                        functionalities
                      </li>
                      <li>
                        Potential displacement of development activities to more
                        permissive jurisdictions
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to lack of regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Proliferation of insecure DeFi platforms and protocols
                      </li>
                      <li>
                        Lack of standardized security practices leading to
                        increased risks
                      </li>
                      <li>
                        Difficulty in addressing disputes and liabilities
                        arising from vulnerabilities
                      </li>
                      <li>
                        Undermining public trust and confidence in DeFi due to
                        frequent security incidents
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mb-5 pl-10 text-left">
                <div
                  style={{
                    color: "var(--sub-header-color)",
                    fontWeight: "bold",
                  }}
                >
                  DeFi Architecture Standards / Auditor
                </div>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <li>
                    Gov&apos;t Concerns
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Ensuring regulatory compliance and consumer protection
                        in the absence of standardized credentials or education
                        requirements
                      </li>
                      <li>
                        Mitigating risks of financial fraud and money laundering
                        without established industry standards
                      </li>
                      <li>
                        Monitoring systemic risks within the DeFi ecosystem due
                        to the lack of uniform auditing procedures
                      </li>
                      <li>
                        Addressing potential disruptions in DeFi operations
                        amidst evolving technological landscape and novel risks
                      </li>
                      <li>
                        Differentiating between Product Liability, Professional
                        Liability, negligence, and true bugs
                      </li>
                    </ul>
                  </li>
                  <li>
                    Consumer Risks
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Exposure to unaudited DeFi protocols leading to
                        financial losses
                      </li>
                      <li>Lack of transparency in DeFi platform operations</li>
                      <li>Potential manipulation through algorithmic biases</li>
                      <li>Insufficient due diligence on DeFi projects</li>
                    </ul>
                  </li>
                  <li>
                    Cons to over-regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>Imposing high compliance costs for new entrants</li>
                      <li>Slowing down DeFi development and iteration</li>
                      <li>
                        Potential migration of projects to more permissive
                        jurisdictions
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to lack of regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>Lack of standardized security practices in DeFi</li>
                      <li>
                        Vulnerability to fraudulent schemes targeting users
                      </li>
                      <li>Difficulty in resolving cross-border disputes</li>
                      <li>Undermining public trust in DeFi</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mb-5 pl-10 text-left">
                <div
                  style={{
                    color: "var(--sub-header-color)",
                    fontWeight: "bold",
                  }}
                >
                  Fiat Onboarding / Offboarding Access Layer
                </div>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <li>
                    Gov&apos;t Concerns
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Ensuring compliance with anti-money laundering (AML) and
                        know-your-customer (KYC) regulations
                      </li>
                      <li>
                        Monitoring cross-border transactions and preventing
                        potential illicit activities
                      </li>
                      <li>
                        Addressing tax implications and reporting requirements
                        for fiat-to-crypto conversions
                      </li>
                      <li>
                        Preventing fraud and ensuring the legitimacy of fiat
                        onboarding/offboarding services
                      </li>
                    </ul>
                  </li>
                  <li>
                    Consumer Risks
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Exposure to potential legal consequences for
                        non-compliant or anonymous transactions
                      </li>
                      <li>
                        Risks associated with offloading blockchain assets to
                        fiat without proper documentation
                      </li>
                      <li>
                        Lack of investor protections and due diligence when
                        converting assets to fiat
                      </li>
                      <li>
                        Potential vulnerability to scams or fraudulent
                        intermediaries operating in the fiat-crypto space
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to over-regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Imposing high compliance costs and barriers for new
                        entrants
                      </li>
                      <li>
                        Slowing down the development of user-friendly and
                        efficient fiat onboarding/offboarding solutions
                      </li>
                      <li>
                        Potential hindrance to financial inclusion due to
                        stringent regulations
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons to lack of regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Lack of standardized security and quality practices in
                        fiat-crypto intermediaries
                      </li>
                      <li>
                        Vulnerability to fraudulent schemes targeting users
                        seeking fiat access
                      </li>
                      <li>
                        Difficulty in addressing cross-border disputes and
                        regulatory challenges
                      </li>
                      <li>
                        Potential exposure to money laundering and other illicit
                        activities
                      </li>
                      <li>Not ensuring a fair competitive landscape</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <h3
                className="my-5 text-center text-3xl"
                style={{ color: "var(--header-color)" }}
              >
                Decentralized Projects
              </h3>
              <h3
                className="mb-10 mt-5 text-center text-2xl"
                style={{ color: "var(--sub-header-color)" }}
              >
                The content below applies only to decentralized projects
              </h3>
              <div className="mb-5 pl-10 text-left">
                <div
                  style={{
                    color: "var(--sub-header-color)",
                    fontWeight: "bold",
                  }}
                >
                  Electricity
                </div>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    {" "}
                    Government Concerns
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Protecting Consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </ul>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    Consumer Risks
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </ul>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    Cons to over-regulation
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </ul>

                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </ul>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    <h3>
                      Does blockchain technology currently exist to fulfill
                      these obligations, and if so, what is it?
                    </h3>
                  </div>
                </ul>
              </div>
              <div className="mb-5 pl-10 text-left">
                <div
                  style={{
                    color: "var(--sub-header-color)",
                    fontWeight: "bold",
                  }}
                >
                  Settlement Layer
                </div>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    <h3>Government Concerns</h3>
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Not being able to update / edit fraudulent transactions
                      </li>
                      <li>
                        Not being able to identify immoral activity that could
                        be deemed fraudulent
                      </li>
                    </ul>
                  </div>
                </ul>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>Lack of due diligence</li>
                      <li>Security and attacks</li>
                    </ul>
                  </div>
                </ul>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    <h3>Cons to over-regulation</h3>
                  </div>
                </ul>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    ></ul>
                  </div>
                </ul>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    <h3>
                      Does blockchain technology currently exist to fulfill
                      these obligations, and if so, what is it?
                    </h3>
                  </div>
                </ul>
              </div>
              <div className="mb-5 pl-10 text-left">
                <div
                  style={{
                    color: "var(--sub-header-color)",
                    fontWeight: "bold",
                  }}
                >
                  Node / Validator
                </div>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    <h3>Government Concerns</h3>
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>Not reporting income</li>
                      <li>Fault tolerant consensus</li>
                      <li>Decryption Standards</li>
                    </ul>
                  </div>
                </ul>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>Private Transactions</li>
                      <li>Selective Transactions</li>
                      <li>MEV Protection</li>
                    </ul>
                  </div>
                </ul>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    <h3>Cons to over-regulation</h3>
                  </div>
                </ul>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Potential displacement of development activities to more
                        permissive jurisdictions
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
              <div className="mb-5 pl-10 text-left">
                <div
                  style={{
                    color: "var(--sub-header-color)",
                    fontWeight: "bold",
                  }}
                >
                  Consensus Layer
                </div>
                <ul
                  className="list-disc pl-12"
                  style={{ color: "var(--sub-header-color)" }}
                >
                  <li>
                    Computation Intensive Based
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--description-color)" }}
                    >
                      <li>
                        Government Concerns
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>
                            Amount of electricity being used comparatively to
                            similar technology that uses less
                          </li>
                          <li>Fault tolerant consensus</li>
                          <li>Decryption Standards</li>
                        </ul>
                      </li>
                      <li>
                        Consumer Risks
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>
                            High energy consumption leading to environmental
                            concerns
                          </li>
                          <li>Potential centralization of mining power</li>
                          <li>Vulnerability to 51% attacks</li>
                        </ul>
                      </li>
                      <li>
                        Cons to over-regulation
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>
                            Stifling innovation and development of
                            energy-efficient consensus mechanisms
                          </li>
                          <li>
                            Driving blockchain projects to operate in
                            jurisdictions with more favorable regulations
                          </li>
                          <li>
                            Disincentivizing network participation due to
                            excessive compliance requirements
                          </li>
                        </ul>
                      </li>
                      <li>
                        Cons to lack of regulation
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>
                            Lack of standardization leading to security
                            vulnerabilities
                          </li>
                          <li>
                            Potential for concentration of power among mining
                            entities
                          </li>
                          <li>
                            Difficulty in addressing fraudulent or malicious
                            activities
                          </li>
                        </ul>
                      </li>
                      <li>
                        Does blockchain technology currently exist to fulfill
                        these obligations, and if so, what is it?
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>
                            Proof of Stake (PoS) consensus algorithms that
                            require significantly less energy
                          </li>
                          <li>
                            Byzantine Fault Tolerance (BFT) protocols ensuring
                            fault tolerance
                          </li>
                          <li>
                            Advanced encryption techniques for secure
                            transactions and data privacy
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Capabilities Based
                    <ul
                      className="list-disc pl-12"
                      style={{ color: "var(--sub-header-color)" }}
                    >
                      <li>
                        Government Concerns
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>Upgrading consumer security standards</li>
                        </ul>
                      </li>
                      <li>
                        Consumer Risks
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>
                            Insufficient protection of user data and privacy
                          </li>
                          <li>
                            Potential exposure to smart contract vulnerabilities
                          </li>
                          <li>
                            Lack of recourse in case of unauthorized
                            transactions
                          </li>
                        </ul>
                      </li>
                      <li>
                        Cons to over-regulation
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>
                            Hampering innovation by imposing rigid security
                            standards
                          </li>
                          <li>
                            Reducing accessibility and inclusivity by raising
                            entry barriers
                          </li>
                          <li>
                            Limiting the potential of decentralized applications
                            (dApps) due to excessive control
                          </li>
                        </ul>
                      </li>
                      <li>
                        Cons to lack of regulation
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>
                            Proliferation of insecure smart contracts leading to
                            financial losses
                          </li>
                          <li>
                            Erosion of consumer trust and confidence in
                            blockchain applications
                          </li>
                          <li>
                            Difficulty in addressing cross-border disputes and
                            fraudulent activities
                          </li>
                        </ul>
                      </li>
                      <li>
                        Does blockchain technology currently exist to fulfill
                        these obligations, and if so, what is it?
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        ></ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Voting Based
                    <ul
                      className="mb-5 list-disc pl-12"
                      style={{ color: "var(--sub-header-color)" }}
                    >
                      <li>
                        Government Concerns
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>
                            Ensuring fair and transparent voting processes
                          </li>
                          <li>Preventing voter fraud and manipulation</li>
                          <li>Addressing potential collusion or vote-buying</li>
                        </ul>
                      </li>
                      <li>
                        Consumer Risks
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>
                            Lack of anonymity in voting leading to privacy
                            concerns
                          </li>
                          <li>
                            Vulnerability to Sybil attacks or stake
                            concentration
                          </li>
                          <li>
                            Complexity of verifying the legitimacy of votes
                          </li>
                        </ul>
                      </li>
                      <li>
                        Cons to over-regulation
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>
                            Overly strict regulations hindering the flexibility
                            and innovation of voting mechanisms
                          </li>
                          <li>
                            Potential centralization of voting power due to
                            stringent requirements
                          </li>
                          <li>
                            Difficulty in adapting to rapidly changing
                            technological advancements
                          </li>
                        </ul>
                      </li>
                      <li>
                        Cons to lack of regulation
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        >
                          <li>
                            Vulnerability to malicious attacks on the voting
                            process
                          </li>
                          <li>
                            Lack of accountability and transparency in voting
                            results
                          </li>
                          <li>
                            Challenges in addressing disputes and irregularities
                          </li>
                        </ul>
                      </li>
                      <li>
                        Does blockchain technology currently exist to fulfill
                        these obligations, and if so, what is it?
                        <ul
                          className="list-disc pl-12"
                          style={{ color: "var(--description-color)" }}
                        ></ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MatrixLongForm
