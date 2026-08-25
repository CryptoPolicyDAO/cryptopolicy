"use client"

import React, { useEffect, useState } from "react"

import "./friction.css"

// ---------- research model shape ----------

interface BeforeAfter {
  Before: number
  After: number
}
type QuestionSet = Record<string, BeforeAfter>
type SubjectMap = Record<string, QuestionSet>
type AreaMap = Record<string, SubjectMap>
type ResearchAreaMap = Record<string, AreaMap>
type CategoryMap = Record<string, ResearchAreaMap>
type MatrixState = Record<string, CategoryMap>

const TOPICS = [
  "Stablecoins",
  "MedicalRecords",
  "TrustlessVoting",
  "IDVerification",
  "DataStorage",
  "Insurance",
] as const

const CATEGORIES = [
  "MeasuringBureaucraticFriction",
  "ReductionOfBureaucraticFriction",
  "RiskManagement",
] as const

/** Research areas per category — these keys drive Part B and the aggregation. */
const RESEARCH_AREAS: Record<(typeof CATEGORIES)[number], string[]> = {
  MeasuringBureaucraticFriction: [
    "Administrative",
    "DataStorage",
    "Security",
    "IdVerification",
    "TransactionExpediency",
  ],
  ReductionOfBureaucraticFriction: [
    "IndividualRegulationEfficiency",
    "DepartmentEfficiency",
    "PerConstituent",
    "PerEmployee",
    "PerDollarTaxed",
  ],
  RiskManagement: ["Individual", "LocalGovt", "State", "Federal"],
}

const ba = (): BeforeAfter => ({ Before: 0, After: 0 })

/** The question template applied to every measured research area. */
function buildAreaTemplate(): AreaMap {
  return {
    Production: {
      Response: {
        "Increases response rate when requests > permitted with excess staff":
          ba(),
        "Increases response rate when requests > permitted with expected staff":
          ba(),
        "Increases response rate when requests > permitted with less than expected staff":
          ba(),
      },
      Retrieval: {
        "Increases retrieval rate when requests > permitted with excess staff":
          ba(),
        "Increases retrieval rate when requests > permitted with expected staff":
          ba(),
        "Increases retrieval rate when requests > permitted with less than expected staff":
          ba(),
      },
    },
    Implementation: {
      Administrative: {
        "Implemention training to current training ratio": ba(),
        "Maintenance of processed records ratio": ba(),
      },
      Financial: {
        "New cost per constituent ratio per use increase": ba(),
        "Cost per constituent annual maintenance increase": ba(),
      },
    },
    "Data Storage": {
      "Per Use by Constituent": {
        "Storage Consumption per use ratio": ba(),
        "Storage Consumption per constituent ratio": ba(),
        "Storage per update ratio": ba(),
      },
    },
  }
}

/**
 * Part C state: every topic gets the full measured-friction question set for
 * each research area. (Reduction and Risk Management research areas are
 * scored in Part B but do not yet have Part C question templates.)
 */
function buildInitialMatrix(): MatrixState {
  const matrix: MatrixState = {}
  for (const topic of TOPICS) {
    matrix[topic] = {
      MeasuringBureaucraticFriction: Object.fromEntries(
        RESEARCH_AREAS.MeasuringBureaucraticFriction.map((area) => [
          area,
          buildAreaTemplate(),
        ])
      ),
    }
  }
  return matrix
}

function buildInitialModels(): Record<
  string,
  Record<string, Record<string, number>>
> {
  return Object.fromEntries(
    TOPICS.map((topic) => [
      topic,
      Object.fromEntries(
        CATEGORIES.map((category) => [
          category,
          Object.fromEntries(RESEARCH_AREAS[category].map((a) => [a, 0])),
        ])
      ),
    ])
  )
}

function buildInitialPriority(): Record<string, Record<string, number>> {
  return Object.fromEntries(
    TOPICS.map((topic) => [
      topic,
      Object.fromEntries(CATEGORIES.map((c) => [c, 0])),
    ])
  )
}

/** "MeasuringBureaucraticFriction" -> "Measuring Bureaucratic Friction" */
function formatLabel(key: string): string {
  return key.replace(/([a-z])([A-Z])/g, "$1 $2")
}

const Friction = () => {
  const [researchPriority, setResearchPriority] = useState(buildInitialPriority)
  const [models, setModels] = useState(buildInitialModels)
  const [matrix, setMatrix] = useState<MatrixState>(buildInitialMatrix)

  // Aggregate Part C answers up into Part B research-area scores.
  useEffect(() => {
    setModels((prev) => {
      const next = JSON.parse(JSON.stringify(prev)) as typeof prev
      for (const [topic, categories] of Object.entries(matrix)) {
        for (const [category, researchAreas] of Object.entries(categories)) {
          for (const [researchArea, areas] of Object.entries(researchAreas)) {
            let total = 0
            for (const subjects of Object.values(areas)) {
              for (const questions of Object.values(subjects)) {
                for (const q of Object.values(questions)) {
                  total += q.After - q.Before
                }
              }
            }
            next[topic][category][researchArea] = total
          }
        }
      }
      return next
    })
  }, [matrix])

  // Aggregate Part B scores up into Part A priorities.
  useEffect(() => {
    setResearchPriority((prev) => {
      const next = JSON.parse(JSON.stringify(prev)) as typeof prev
      for (const [topic, categories] of Object.entries(models)) {
        for (const [category, areas] of Object.entries(categories)) {
          next[topic][category] = Object.values(areas).reduce(
            (sum, value) => sum + value,
            0
          )
        }
      }
      return next
    })
  }, [models])

  // Handler for matrix input changes
  const handleMatrixChange = (
    topic: string,
    category: string,
    researchArea: string,
    area: string,
    subject: string,
    question: string,
    field: "Before" | "After",
    value: string
  ) => {
    setMatrix((prevMatrix) => {
      const newMatrix = JSON.parse(JSON.stringify(prevMatrix)) as MatrixState
      newMatrix[topic][category][researchArea][area][subject][question][field] =
        parseFloat(value) || 0
      return newMatrix
    })
  }

  return (
    <div>
      <h1 className="header">Bureaucratic Research Model Summary</h1>
      <div className="content">
        <p>
          Our goal is to create a research model for the purpose of advancing
          public policy and the adoption of blockchain technology within our
          government. Though our research and proposal objectives will evolve
          over-time as politics often do, our initial objectives will be to
          research and propose public policy that improves government efficiency
          at all levels, and not just within the United States. Our founding
          principle is to research and propose public policy that is a catalyst
          for the governments adoption of blockchain technology by applying the
          below formula as the basis of our rationale:
        </p>
        <br />
        <p className="equation">
          <strong>
            Bureaucratic Friction <span className="spaced-symbol">+</span>{" "}
            Friction-Reduction Yield <span className="spaced-symbol">+</span>{" "}
            Risk Management <span className="spaced-symbol">=</span> Proposed
            Public Policy
          </strong>
        </p>
        <br />
        <p>
          Our mission is to propose public policy only when each variable above
          is at its maximum, and not just when one variable is at its maximum.
          More on that below, though in our model, bureaucratic friction is the
          “red-tape” delay that exists within the processes of implementing,
          monitoring, and executing current regulation. Our first step will
          attempt to measure the bureaucratic friction that is potentially
          avoidable where blockchain implementation would be an improvement. Our
          second step will attempt to measure the resulting yield, or lack
          thereof, that exists after introducing blockchain technology. And our
          third step will be to mitigate the security, vulnerability, and
          privacy concerns when considering step one and two.
        </p>
        <br></br>
        <p>
          To better illustrate our approach, consider an opportunity to use
          blockchain technology for state and federal ID verification. By
          storing personal identification data on the blockchain, we can create
          a system where individuals have a secure and immutable digital ID.
          This system would simplify the process of verifying identities for
          various services, such as voting, accessing government benefits, or
          even routine tasks like age verification. Implementing blockchain for
          ID verification would drastically reduce bureaucratic friction by
          eliminating the need for repetitive identity checks and paperwork.
          However, while this satisfies our first step, the second step requires
          ensuring the system's usability and accessibility for all citizens.
          Without proper education and infrastructure, the benefits of
          blockchain-based IDs could be underutilized. Lastly, risk management
          involves addressing concerns about data security, privacy, and the
          potential for misuse. Our research will focus on how to mitigate these
          risks while maximizing the system's efficiency.
        </p>
        <br />
        <p>
          In summary, the Crypto Policy Center would not propose public policy
          unless it satisfies all three variables above to their fullest
          concurrently. The point is to introduce public policy that increases
          the efficiency of our government and decreases bureaucratic red tape
          and not just for the sake of introducing blockchain technology.
        </p>
        <br />

        <div className="mb-5 pl-10 text-left">
          <div className="section-title">
            Levels to organizing public policy from the constituents
            perspective:
          </div>
          <ul className="list-disc pl-12">
            <li>Consumer to Automated Money Maker (ie Binance, pancakeswap)</li>
            <li>Consumer to Regulated Exchange (ie Coinbase, Crypto.Com)</li>
            <li>
              Consumer to local municipalities (ie utilities, property taxes)
            </li>
            <li>Consumer to Federal Government</li>
            <li>Consumer to consumer (peer-to-peer)</li>
          </ul>
        </div>
        <div className="mb-5 pl-10 text-left">
          <div className="section-title">
            Levels to organizing public policy from the government's
            perspective:
          </div>
          <ul className="list-disc pl-12">
            <li>Municipality/City</li>
            <ul className="list-disc pl-12">
              <li>Internal</li>
              <ul className="list-disc pl-12">
                <li>Internal Cashflow</li>
                <ul className="list-disc pl-12">
                  <li>Cashflow expediency</li>
                  <li>Asset Security</li>
                  <li>Public Transparency</li>
                </ul>
                <li>Data Storage</li>
                <ul className="list-disc pl-12">
                  <li>Storage Quantity</li>
                  <li>Data Retrieval</li>
                  <li>Data Access</li>
                  <li>Expediency of access</li>
                </ul>
              </ul>
              <li>External</li>
              <ul className="list-disc pl-12">
                <li>External Cashflow</li>
                <li>ID Verification</li>
              </ul>
            </ul>
          </ul>
        </div>
        <div className="mb-5 pl-10 text-left">
          <div className="section-title">Research Priorities</div>
          <ul className="list-disc pl-12">
            <li>Bureaucratic Friction:</li>
            <ul className="list-disc pl-12">
              <li>Identify bureaucratic friction</li>
              <li>Quantify bureaucratic friction</li>
            </ul>
            <li>Bureaucratic-friction yield objective:</li>
            <ul className="list-disc pl-12">
              <li>
                Identify how the yield of reducing bureaucratic friction is
                determined
              </li>
              <li>Quantify bureaucratic-friction yield</li>
            </ul>
            <li>Security/Vulnerability/Privacy Objectives:</li>
            <ul className="list-disc pl-12">
              <li>Utilize blockchain when it increases security</li>
              <li>Utilize blockchain when it decreases vulnerabilities</li>
              <li>
                Utilize blockchain to increase privacy, decrease identity theft
              </li>
            </ul>
          </ul>
        </div>
        <div className="mb-5 pl-10 text-left">
          <div className="section-title">Initial Research Objectives</div>
          <ul className="list-disc pl-12">
            <li>
              Define barriers to entry of implementing crypto public policy
            </li>
            <ul className="list-disc pl-12">
              <li>
                Barriers to Learn (ie no mandatory quarterly financial reports)
              </li>
              <ul className="list-disc pl-12">
                <li>For individuals</li>
                <li>For municipalities individually</li>
              </ul>
              <li>Barriers to Purchase</li>
              <ul className="list-disc pl-12">
                <li>For individuals</li>
                <li>For municipalities individually</li>
              </ul>
            </ul>
            <li>Understand the levels of anonymity within cryptocurrency</li>
            <ul className="list-disc pl-12">
              <li>Anonymous to third parties on the blockchain</li>
              <li>Anonymous-to-KYC levels to Govt</li>
              <li>
                Bridge the gap between legally using crypto while still being
                anonymous on the blockchain
              </li>
            </ul>
            <li>Define Benefits</li>
            <ul className="list-disc pl-12">
              <li>Intellectual Property</li>
              <li>Titles, Deeds, Hiring Contracts</li>
              <li>Store of Value</li>
              <li>Residual Yield (passive income)</li>
            </ul>
            <li>
              Risks Creating a policy outline that addresses and can monitor
              known risks
            </li>
            <ul className="list-disc pl-12">
              <li>Security</li>
              <ul className="list-disc pl-12">
                <li>Personal Phone security</li>
                <li>Wallet/App Security</li>
                <li>Exchange Security</li>
                <li>Blockchain/Protocol Smart Contract Security</li>
                <li>Social Engineering Attacks</li>
              </ul>
              <li>No Regulation or Government Backstop (ie FDIC)</li>
              <li>Environmental Energy Concerns</li>
              <li>Protocol Financial/Credit Security & Rating</li>
              <li>Cryptocurrency Insurance</li>
              <li>Systemic Liquidation</li>
              <ul className="list-disc pl-12">
                <li>
                  Over-dependence on several stable coins and backed by
                  Ethereum. (too much correlation risk for all when a few whales
                  move funds)
                </li>
              </ul>
            </ul>
            <li>Insurance</li>
            <ul className="list-disc pl-12">
              <li>Protecting digital assets</li>
              <li>Solvency and regulation</li>
              <li>Enforcement of contracts</li>
              <li>Currency Risk</li>
            </ul>
            <li>Education</li>
            <ul className="list-disc pl-12">
              <li>Youth Coding</li>
              <li>Security Analysis</li>
              <li>Positive Value Hackathons</li>
              <li>Interaction with schools/universities</li>
            </ul>
            <li>Community Use</li>
            <ul className="list-disc pl-12">
              <li>Education</li>
              <li>Art (ie – sponsorships, galleries)</li>
              <li>
                Community Funding (ie – specific events/needs needed locally)
              </li>
            </ul>
            <li>International Instances</li>
            <ul className="list-disc pl-12">
              <li>Crime</li>
              <li>Consumer Purchases</li>
              <li>Individual to Individual conflict</li>
              <li>Currency exchanges</li>
            </ul>
            <li>Banking</li>
            <ul className="list-disc pl-12">
              <li>CBDC Integration</li>
              <li>Accepting Non-CBDC crypto</li>
              <li>No More Overdraft Fee’s</li>
            </ul>
            <li>Federal Taxation</li>
            <ul className="list-disc pl-12">
              <li>Fraud Prevention</li>
            </ul>
          </ul>
        </div>
        <div className="mb-5 pl-10 text-left">
          <p>
            This is the start of the research model for you to interact with.
            This research model is in three parts starting with the Research
            Topics, the Research Models, and then the Research Matrix. This
            model is meant to be interacted with by you, so feel free to edit
            the information in the light yellow cells. Basically, in this model,
            you choose the topics to research in Part A, the research areas of
            each topic in Part B, and then in Part C, you answer the questions
            in the context of each research area within each research topic. The
            scores from Part C will aggregate in Part B and then in Part A,
            giving you a final score.
          </p>
          <p>
            For the most part, this model is meant to present an unbiased and
            objective example of how blockchain technology can be utilized
            outside of being a token.
          </p>
          <br />
          <h2>Part A:</h2>
          <p>
            These are the topics for you to update to your choice, though at the
            Crypto Policy Center, the currently listed 6 topics are the ones we
            are going to research ourselves using this model. The scores to the
            right of each topic are the final scores that are being aggregated
            from what is entered in Part C.
          </p>
          <br /> <h2>Part A: Research Priority</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Research Topic</th>
                  <th>Measuring Bureaucratic Friction</th>
                  <th>Reduction of Bureaucratic Friction</th>
                  <th>Risk Management</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(researchPriority).map(([topic, scores]) => (
                  <tr key={topic}>
                    <td>{formatLabel(topic)}</td>
                    <td>{scores.MeasuringBureaucraticFriction}</td>
                    <td>{scores.ReductionOfBureaucraticFriction}</td>
                    <td>{scores.RiskManagement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>Part B:</h2>
          <p>
            These are the areas to research within each topic. Not all of the
            areas are going to be the same for each research topic, though these
            are the ones we believe are relevant to the research topics we are
            choosing for ourselves.
          </p>
          <br />
          <h2>Part B: Models</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Research Topic</th>
                  <th colSpan={2}>Measuring Bureaucratic Friction</th>
                  <th colSpan={2}>Reduction of Bureaucratic Friction</th>
                  <th colSpan={2}>Risk Management</th>
                </tr>
                <tr>
                  <th></th>
                  <th>Research Area</th>
                  <th>Score</th>
                  <th>Research Area</th>
                  <th>Score</th>
                  <th>Research Area</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(models).map(([topic, categories]) => (
                  <tr key={topic}>
                    <td>{formatLabel(topic)}</td>
                    <td>
                      {Object.keys(
                        categories.MeasuringBureaucraticFriction
                      ).map((area) => (
                        <div key={area}>{formatLabel(area)}</div>
                      ))}
                    </td>
                    <td>
                      {Object.values(
                        categories.MeasuringBureaucraticFriction
                      ).map((score, index) => (
                        <div key={index}>{score}</div>
                      ))}
                    </td>
                    <td>
                      {Object.keys(
                        categories.ReductionOfBureaucraticFriction
                      ).map((area) => (
                        <div key={area}>{formatLabel(area)}</div>
                      ))}
                    </td>
                    <td>
                      {Object.values(
                        categories.ReductionOfBureaucraticFriction
                      ).map((score, index) => (
                        <div key={index}>{score}</div>
                      ))}
                    </td>
                    <td>
                      {Object.keys(categories.RiskManagement).map((area) => (
                        <div key={area}>{formatLabel(area)}</div>
                      ))}
                    </td>
                    <td>
                      {Object.values(categories.RiskManagement).map(
                        (score, index) => (
                          <div key={index}>{score}</div>
                        )
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>Part C:</h2>
          <p className="mb-20">
            This is the matrix that we believe fits accordingly to the topics
            and areas we have chosen to research. Of course, many questions will
            need to be revised, though this matrix provides a framework in order
            for us to efficiently research the benefits of blockchain technology
            in reducing governmental bureaucratic friction. In this part, you
            answer each of the questions and edit the information in the light
            yellow cells. The measurement factor of each question will change,
            though for now, this matrix is asking for a generic "before" and
            "after" result based on your judgment.
          </p>
        </div>
        <h2>Part C: Matrix</h2>
        <div className="matrix-container">
          {Object.entries(matrix).map(([topic, categories]) => (
            <div key={topic}>
              <h3>{formatLabel(topic)}</h3>
              {Object.entries(categories).map(([category, researchAreas]) => (
                <div key={`${topic}-${category}`}>
                  <h4>{formatLabel(category)}</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Research Topic</th>
                        <th>Research Area</th>
                        <th>Area</th>
                        <th>Subject</th>
                        <th>Question</th>
                        <th>Before</th>
                        <th>After</th>
                        <th>Amount</th>
                        <th>Sum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(researchAreas).map(
                        ([researchArea, areas]) => (
                          <React.Fragment
                            key={`${topic}-${category}-${researchArea}`}
                          >
                            {Object.entries(areas).map(
                              ([area, subjects], areaIndex) => (
                                <React.Fragment
                                  key={`${topic}-${category}-${researchArea}-${area}`}
                                >
                                  {Object.entries(subjects).map(
                                    ([subject, questions], subjectIndex) => (
                                      <React.Fragment
                                        key={`${topic}-${category}-${researchArea}-${area}-${subject}`}
                                      >
                                        {Object.entries(questions).map(
                                          (
                                            [question, values],
                                            questionIndex
                                          ) => (
                                            <tr
                                              key={`${topic}-${category}-${researchArea}-${area}-${subject}-${question}`}
                                            >
                                              {areaIndex === 0 &&
                                                subjectIndex === 0 &&
                                                questionIndex === 0 && (
                                                  <td
                                                    rowSpan={Object.values(
                                                      areas
                                                    ).reduce(
                                                      (acc, area) =>
                                                        acc +
                                                        Object.values(
                                                          area
                                                        ).reduce(
                                                          (subAcc, subject) =>
                                                            subAcc +
                                                            Object.keys(subject)
                                                              .length,
                                                          0
                                                        ),
                                                      0
                                                    )}
                                                  >
                                                    {formatLabel(topic)}
                                                  </td>
                                                )}
                                              {areaIndex === 0 &&
                                                subjectIndex === 0 &&
                                                questionIndex === 0 && (
                                                  <td
                                                    rowSpan={Object.values(
                                                      areas
                                                    ).reduce(
                                                      (acc, area) =>
                                                        acc +
                                                        Object.values(
                                                          area
                                                        ).reduce(
                                                          (subAcc, subject) =>
                                                            subAcc +
                                                            Object.keys(subject)
                                                              .length,
                                                          0
                                                        ),
                                                      0
                                                    )}
                                                  >
                                                    {formatLabel(researchArea)}
                                                  </td>
                                                )}
                                              {subjectIndex === 0 &&
                                                questionIndex === 0 && (
                                                  <td
                                                    rowSpan={Object.values(
                                                      subjects
                                                    ).reduce(
                                                      (acc, questions) =>
                                                        acc +
                                                        Object.keys(questions)
                                                          .length,
                                                      0
                                                    )}
                                                  >
                                                    {area}
                                                  </td>
                                                )}
                                              {questionIndex === 0 && (
                                                <td
                                                  rowSpan={
                                                    Object.keys(questions)
                                                      .length
                                                  }
                                                >
                                                  {subject}
                                                </td>
                                              )}
                                              <td>{question}</td>
                                              <td>
                                                <input
                                                  type="number"
                                                  value={values.Before}
                                                  onChange={(e) =>
                                                    handleMatrixChange(
                                                      topic,
                                                      category,
                                                      researchArea,
                                                      area,
                                                      subject,
                                                      question,
                                                      "Before",
                                                      e.target.value
                                                    )
                                                  }
                                                />
                                              </td>
                                              <td>
                                                <input
                                                  type="number"
                                                  value={values.After}
                                                  onChange={(e) =>
                                                    handleMatrixChange(
                                                      topic,
                                                      category,
                                                      researchArea,
                                                      area,
                                                      subject,
                                                      question,
                                                      "After",
                                                      e.target.value
                                                    )
                                                  }
                                                />
                                              </td>
                                              <td>
                                                {values.After - values.Before}
                                              </td>
                                              {areaIndex === 0 &&
                                                subjectIndex === 0 &&
                                                questionIndex === 0 && (
                                                  <td
                                                    rowSpan={Object.values(
                                                      areas
                                                    ).reduce(
                                                      (acc, area) =>
                                                        acc +
                                                        Object.values(
                                                          area
                                                        ).reduce(
                                                          (subAcc, subject) =>
                                                            subAcc +
                                                            Object.keys(subject)
                                                              .length,
                                                          0
                                                        ),
                                                      0
                                                    )}
                                                  >
                                                    {Object.values(
                                                      areas
                                                    ).reduce(
                                                      (acc, area) =>
                                                        acc +
                                                        Object.values(
                                                          area
                                                        ).reduce(
                                                          (subAcc, subject) =>
                                                            subAcc +
                                                            Object.values(
                                                              subject
                                                            ).reduce(
                                                              (sum, q) =>
                                                                sum +
                                                                (q.After -
                                                                  q.Before),
                                                              0
                                                            ),
                                                          0
                                                        ),
                                                      0
                                                    )}
                                                  </td>
                                                )}
                                            </tr>
                                          )
                                        )}
                                      </React.Fragment>
                                    )
                                  )}
                                </React.Fragment>
                              )
                            )}
                          </React.Fragment>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Friction
