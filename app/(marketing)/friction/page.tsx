"use client"

import React, { useEffect, useState } from "react"

import "./friction.css"

const Friction = () => {
  // State for Part A (Research Priority)
  const [researchPriority, setResearchPriority] = useState({
    Stablecoins: {
      MeasuringBureaucraticFriction: 0,
      ReductionOfBureaucraticFriction: 0,
      RiskManagement: 0,
    },
    MedicalRecords: {
      MeasuringBureaucraticFriction: 0,
      ReductionOfBureaucraticFriction: 0,
      RiskManagement: 0,
    },
    TrustlessVoting: {
      MeasuringBureaucraticFriction: 0,
      ReductionOfBureaucraticFriction: 0,
      RiskManagement: 0,
    },
    IDVerification: {
      MeasuringBureaucraticFriction: 0,
      ReductionOfBureaucraticFriction: 0,
      RiskManagement: 0,
    },
    DataStorage: {
      MeasuringBureaucraticFriction: 0,
      ReductionOfBureaucraticFriction: 0,
      RiskManagement: 0,
    },
    Insurance: {
      MeasuringBureaucraticFriction: 0,
      ReductionOfBureaucraticFriction: 0,
      RiskManagement: 0,
    },
  })
  // State for Part B (Models)
  const [models, setModels] = useState({
    Stablecoins: {
      MeasuringBureaucraticFriction: {
        Administrative: 0,
        DataStorage: 0,
        Security: 0,
        IdVerification: 0,
        TransactionExpediency: 0,
      },
      ReductionOfBureaucraticFriction: {
        IndividualRegulationEfficiency: 0,
        DepartmentEfficiency: 0,
        PerConstituent: 0,
        PerEmployee: 0,
        PerDollarTaxed: 0,
      },
      RiskManagement: {
        Individual: 0,
        LocalGovt: 0,
        State: 0,
        Federal: 0,
      },
    },
    MedicalRecords: {
      MeasuringBureaucraticFriction: {
        Administrative: 0,
        DataStorage: 0,
        Security: 0,
        IdVerification: 0,
        TransactionExpediency: 0,
      },
      ReductionOfBureaucraticFriction: {
        IndividualRegulationEfficiency: 0,
        DepartmentEfficiency: 0,
        PerConstituent: 0,
        PerEmployee: 0,
        PerDollarTaxed: 0,
      },
      RiskManagement: {
        Individual: 0,
        LocalGovt: 0,
        State: 0,
        Federal: 0,
      },
    },
    TrustlessVoting: {
      MeasuringBureaucraticFriction: {
        Administrative: 0,
        DataStorage: 0,
        Security: 0,
        IdVerification: 0,
        TransactionExpediency: 0,
      },
      ReductionOfBureaucraticFriction: {
        IndividualRegulationEfficiency: 0,
        DepartmentEfficiency: 0,
        PerConstituent: 0,
        PerEmployee: 0,
        PerDollarTaxed: 0,
      },
      RiskManagement: {
        Individual: 0,
        LocalGovt: 0,
        State: 0,
        Federal: 0,
      },
    },
    IDVerification: {
      MeasuringBureaucraticFriction: {
        Administrative: 0,
        DataStorage: 0,
        Security: 0,
        IdVerification: 0,
        TransactionExpediency: 0,
      },
      ReductionOfBureaucraticFriction: {
        IndividualRegulationEfficiency: 0,
        DepartmentEfficiency: 0,
        PerConstituent: 0,
        PerEmployee: 0,
        PerDollarTaxed: 0,
      },
      RiskManagement: {
        Individual: 0,
        LocalGovt: 0,
        State: 0,
        Federal: 0,
      },
    },
    DataStorage: {
      MeasuringBureaucraticFriction: {
        Administrative: 0,
        DataStorage: 0,
        Security: 0,
        IdVerification: 0,
        TransactionExpediency: 0,
      },
      ReductionOfBureaucraticFriction: {
        IndividualRegulationEfficiency: 0,
        DepartmentEfficiency: 0,
        PerConstituent: 0,
        PerEmployee: 0,
        PerDollarTaxed: 0,
      },
      RiskManagement: {
        Individual: 0,
        LocalGovt: 0,
        State: 0,
        Federal: 0,
      },
    },
    Insurance: {
      MeasuringBureaucraticFriction: {
        Administrative: 0,
        DataStorage: 0,
        Security: 0,
        IdVerification: 0,
        TransactionExpediency: 0,
      },
      ReductionOfBureaucraticFriction: {
        IndividualRegulationEfficiency: 0,
        DepartmentEfficiency: 0,
        PerConstituent: 0,
        PerEmployee: 0,
        PerDollarTaxed: 0,
      },
      RiskManagement: {
        Individual: 0,
        LocalGovt: 0,
        State: 0,
        Federal: 0,
      },
    },
  })

  // State for Part C (Matrix)
  const [matrix, setMatrix] = useState({
    Stablecoins: {
      MeasuringBureaucraticFriction: {
        Production: { Before: 0, After: 0 },
        Implementation: { Before: 0, After: 0 },
        DataStorage: { Before: 0, After: 0 },
      },
      ReductionOfBureaucraticFriction: {
        Production: { Before: 0, After: 0 },
        Implementation: { Before: 0, After: 0 },
        DataStorage: { Before: 0, After: 0 },
      },
      RiskManagement: {
        Security: { Before: 0, After: 0 },
        InvestmentFDIC: { Before: 0, After: 0 },
      },
    },
    // Repeat the structure for other research topics...
  })

  // Update models based on matrix input
  useEffect(() => {
    const newModels = { ...models }
    Object.entries(matrix).forEach(([topic, categories]) => {
      Object.entries(categories).forEach(([category, areas]) => {
        Object.entries(areas).forEach(([area, values]) => {
          const areaTotal = values.After - values.Before
          newModels[topic][category][area] = areaTotal
        })
      })
    })
    setModels(newModels)
  }, [matrix])

  // Update research priority based on models
  useEffect(() => {
    const newResearchPriority = { ...researchPriority }
    Object.entries(models).forEach(([topic, categories]) => {
      Object.entries(categories).forEach(([category, areas]) => {
        newResearchPriority[topic][category] = Object.values(areas).reduce(
          (sum, value) => sum + value,
          0
        )
      })
    })
    setResearchPriority(newResearchPriority)
  }, [models])

  // Handler for matrix input changes
  const handleMatrixChange = (topic, category, area, field, value) => {
    setMatrix((prevMatrix) => ({
      ...prevMatrix,
      [topic]: {
        ...prevMatrix[topic],
        [category]: {
          ...prevMatrix[topic][category],
          [area]: {
            ...prevMatrix[topic][category][area],
            [field]: parseInt(value) || 0,
          },
        },
      },
    }))
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
        <p>
          <strong>
            {" "}
            Bureaucratic Friction + Friction-Reduction Yield + Risk Management =
            Proposed Public Policy
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
          To better illustrate our approach, an initial opportunity to introduce
          blockchain technology could be to increase compensation packages for
          all of our teachers and first responders. By introducing a percentage
          of pay in certain cryptocurrencies, similar to a 401K plan, this could
          allow for an increase in pay that could yield significant future
          returns. However, so far in our model, this only satisfies step one.
          An opportunity to offer a new form of compensation with blockchain
          technology creates an immediate need for education, and without fully
          embracing education in this example, the benefits of utilizing the
          blockchain could be underutilized. For employers, in some instances,
          just by offering healthcare benefits and a 401K in compensation
          packages, employers will have to educate their employees on how to
          receive and use those additional benefits, though the learning curve
          for introducing blockchain technology will be steeper than a
          traditional 401k. So, just because introducing cryptocurrency as an
          additional pay benefit in step one might sound great, it could
          potentially be underutilized, or misused, without proper and efficient
          education. And in our last variable regarding risk management,
          utilizing cryptocurrency as a payment brings on significant risks to
          both the government and the employee receiving that pay. The risks are
          broad and vary from the actual blockchain layer to currency exchange
          risk to theft, but we will attempt to understand and mitigate these
          risks throughout our research and proposal of public policy.
        </p>
        <br />
        <p>
          In summary, CryptoPolicyDAO would not propose public policy unless it
          satisfies all three variables above to their fullest concurrently. The
          point is to introduce public policy that increases the efficiency of
          our government and decreases bureaucratic red tape and not just for
          the sake of introducing blockchain technology.
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
            These are the topics for you to update to your choice, though at
            Crypto Policy DAO, the currently listed 6 topics are the ones we are
            going to research ourselves using this model. The scores to the
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
                    <td>{topic}</td>
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
                  <th colSpan="2">Measuring Bureaucratic Friction</th>
                  <th colSpan="2">Reduction of Bureaucratic Friction</th>
                  <th colSpan="2">Risk Management</th>
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
                    <td>{topic}</td>
                    <td>
                      {Object.keys(
                        categories.MeasuringBureaucraticFriction
                      ).map((area) => (
                        <div key={area}>{area}</div>
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
                        <div key={area}>{area}</div>
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
                        <div key={area}>{area}</div>
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
          <table>
            <thead>
              <tr>
                <th>Research Topic</th>
                <th colSpan="3">Measuring Bureaucratic Friction</th>
                <th colSpan="3">Reduction of Bureaucratic Friction</th>
                <th colSpan="3">Risk Management</th>
              </tr>
              <tr>
                <th></th>
                <th>Area</th>
                <th>Before</th>
                <th>After</th>
                <th>Area</th>
                <th>Before</th>
                <th>After</th>
                <th>Area</th>
                <th>Before</th>
                <th>After</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(matrix).map(([topic, categories]) => (
                <React.Fragment key={topic}>
                  <tr>
                    <td rowSpan="3">{topic}</td>
                    <td>Production</td>
                    <td>
                      <input
                        type="number"
                        value={
                          categories.MeasuringBureaucraticFriction.Production
                            .Before
                        }
                        onChange={(e) =>
                          handleMatrixChange(
                            topic,
                            "MeasuringBureaucraticFriction",
                            "Production",
                            "Before",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={
                          categories.MeasuringBureaucraticFriction.Production
                            .After
                        }
                        onChange={(e) =>
                          handleMatrixChange(
                            topic,
                            "MeasuringBureaucraticFriction",
                            "Production",
                            "After",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>Production</td>
                    <td>
                      <input
                        type="number"
                        value={
                          categories.ReductionOfBureaucraticFriction.Production
                            .Before
                        }
                        onChange={(e) =>
                          handleMatrixChange(
                            topic,
                            "ReductionOfBureaucraticFriction",
                            "Production",
                            "Before",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={
                          categories.ReductionOfBureaucraticFriction.Production
                            .After
                        }
                        onChange={(e) =>
                          handleMatrixChange(
                            topic,
                            "ReductionOfBureaucraticFriction",
                            "Production",
                            "After",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>Security</td>
                    <td>
                      <input
                        type="number"
                        value={categories.RiskManagement.Security.Before}
                        onChange={(e) =>
                          handleMatrixChange(
                            topic,
                            "RiskManagement",
                            "Security",
                            "Before",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={categories.RiskManagement.Security.After}
                        onChange={(e) =>
                          handleMatrixChange(
                            topic,
                            "RiskManagement",
                            "Security",
                            "After",
                            e.target.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Implementation</td>
                    <td>
                      <input
                        type="number"
                        value={
                          categories.ReductionOfBureaucraticFriction
                            .Implementation.Before
                        }
                        onChange={(e) =>
                          handleMatrixChange(
                            topic,
                            "ReductionOfBureaucraticFriction",
                            "Implementation",
                            "Before",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={
                          categories.ReductionOfBureaucraticFriction
                            .Implementation.After
                        }
                        onChange={(e) =>
                          handleMatrixChange(
                            topic,
                            "ReductionOfBureaucraticFriction",
                            "Implementation",
                            "After",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>Investment/FDIC</td>
                    <td>
                      <input
                        type="number"
                        value={categories.RiskManagement.InvestmentFDIC.Before}
                        onChange={(e) =>
                          handleMatrixChange(
                            topic,
                            "RiskManagement",
                            "InvestmentFDIC",
                            "Before",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={categories.RiskManagement.InvestmentFDIC.After}
                        onChange={(e) =>
                          handleMatrixChange(
                            topic,
                            "RiskManagement",
                            "InvestmentFDIC",
                            "After",
                            e.target.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Data Storage</td>
                    <td>
                      <input
                        type="number"
                        value={
                          categories.ReductionOfBureaucraticFriction.DataStorage
                            .Before
                        }
                        onChange={(e) =>
                          handleMatrixChange(
                            topic,
                            "ReductionOfBureaucraticFriction",
                            "DataStorage",
                            "Before",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={
                          categories.ReductionOfBureaucraticFriction.DataStorage
                            .After
                        }
                        onChange={(e) =>
                          handleMatrixChange(
                            topic,
                            "ReductionOfBureaucraticFriction",
                            "DataStorage",
                            "After",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Friction
