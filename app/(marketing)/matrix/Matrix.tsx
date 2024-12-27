"use client"

import React from "react"

import CentralizedElectricity from "../brm/centralized/CentralizedElectricity"

function Matrix() {
  const inlineStyles = `

    .body {
        font-family: 'Poppins', sans-serif;
        font-weight: 150;
        line-height: 1.7;
        color: var(--effect-2);
        background-color: #1f2029;
        margin: 0;
        padding: 0;

      }
      
      p{
        font-family: 'Poppins', sans-serif;
        line-height: 1.2;
        color: var(--effect-2);
        margin: 0;
      }

      .section-fluid-main{
        position: relative;
        display: block;
        overflow: hidden;
        width: calc(100% - 10px);
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 940px;
        padding: 50px 0;
      }
      .section-row{
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
      }
      .section-row:hover .section-col{
        opacity: 0.1;
      }
      .section-col{
        position: relative;
        width: 100%;
        -ms-flex: 0 0 50%;
        flex: 0 0 calc(100% / 3);
        max-width: 100%;
        transition: opacity 250ms linear;
        justify-content: center;
        align-items: center;
        
      }
      .section-row .section-col:hover{
        opacity: .5;
      }
      .section{
        position: relative;
        display: block;
        width: 100%;
        overflow: hidden;
        cursor: pointer;
        padding: 15px;
        justify-content: center;
        align-items: center;
      }

      .section-in {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .section-in{
        display: block;
        width: 100%;
        height: auto;
        transition: transform 250ms linear;
      }
      .section-col:hover .section-in{
        transform: scale(1.2);
          opacity: 0.5;
      }
      
      .hover-text{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 100;
        pointer-events: none;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        -moz-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        -ms-flex-pack: center;
        text-align: center;
          -ms-flex-item-align: center;
          align-self: center;
      }
      .hover-text h2{
        font-family: 'Poppins', sans-serif;        
        line-height: 1.2;
        color: var(--effect-2);
        opacity: 0;
        transform: scale(0.8);
        transition: transform 250ms linear, opacity 250ms ease;
      }
      .section-col:hover + .hover-text h2{
        opacity: 1;
        transform: scale(1);
      }
      
          
      @media (max-width: 767px) {
        .section-col{
          -ms-flex: 0 0 100%;
          flex: 0 0 100%;
          max-width: 100%;
        }
        .hover-text h2{
          font-size: 3vw;
        }
        .section-fluid-main {
            position: relative;
            width: calc(100% - 20px);
          }
          
          .section-fluid-main h1 {
            position: sticky;
            top: 0;
            z-index: 1;
          }
          .image1 {
            background-image: var(--image1);
            width: "80px",
            height: "80px",
          }

          .image2 {
            background-image: var(--image2);
            width: "80px",
            height: "80px",
          }
        }

        @media (max-width: 620px) {
        .section-col{
          -ms-flex: 0 0 100%;
          flex: 0 0 100%;
          max-width: 100%;
        }
        .hover-text h2{
          font-size: 3vw;
        }
        .section-fluid-main {
            position: relative;
            width: calc(100% - 20px);
          }
          
          .section-fluid-main h1 {
            position: sticky;
            top: 0;
            z-index: 1;
          }
          .image1 {
            background-image: var(--image1);
            width: "80px",
            height: "80px",
          }

          .image2 {
            background-image: var(--image2);
            width: "80px",
            height: "80px",
          }
        }

        .section-row .section-col {
          position: relative;
          width: 100%;
          -ms-flex: 0 0 50%;
          flex: 0 0 calc(100% / 3);
          max-width: 100%;
          transition: opacity 250ms linear;
          justify-content: center;
          align-items: center;
        }

          .header {
            color: var(--header-color);
            font-weight: bold;
            font-size: 1.5rem;
          }

          .topic {
            color: var(--hover-text);
            font-size: 1rem;
          }

          .description {
            color: var(--hover-subtext);
            font-size: 1rem;
          }

          .image1 {
            background-image: var(--image1);
          }

          .image2 {
            background-image: var(--image2);
          }
        `

  return (
    <div className="section-fluid-main">
      <div className="section-row">
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Electricity</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Protecting consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                      <li>
                        Concentration of electricity supplied to a blockchain
                        from within countries or areas.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                      <li>Limiting economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="e10.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to entities that are producing the electricity
            that powers the blockchain.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Electricity</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
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
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Settlement Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Not being able to update / edit fraudulent transactions
                      </li>
                      <li>
                        Not being able to identify immoral activity that could
                        be deemed fraudulent
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>Lack of due diligence</li>
                      <li>Security and attacks</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential displacement of development activities to more
                        permissive jurisdictions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill the
                    above concerns, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12">
                    <li>
                      Proof of Stake (PoS) consensus algorithms that require
                      significantly less energy
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="s1.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to the layer of the blockchain where
            transactions settle permanently.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Settlement Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Not being able to update / edit fraudulent transactions
                      </li>
                      <li>
                        Not being able to identify immoral activity that could
                        be deemed fraudulent
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>Lack of due diligence</li>
                      <li>Security and attacks</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential centralization of the blockchain settlement
                        layer.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential displacement of development activities to more
                        permissive jurisdictions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12">
                    <li>
                      Proof of Stake (PoS) consensus algorithms that require
                      significantly less energy
                    </li>
                    <li>
                      Byzantine Fault Tolerance (BFT) protocols ensuring fault
                      tolerance
                    </li>
                    <li>
                      Advanced encryption techniques for secure transactions and
                      data privacy
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Node / Validator Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>Not reporting income</li>
                      <li>Fault tolerant consensus</li>
                      <li>Decryption Standards</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>Private Transactions</li>
                      <li>Selective Transactions</li>
                      <li>MEV Protection</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>Centralization</li>
                      <li>Inhibiting technological growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential displacement of development activities to more
                        permissive jurisdictions
                      </li>
                      <li>Transaction monitoring</li>
                      <li>Selective transactions and private transactions</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="Node.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to the nodes or validators that are validating
            the transactions for each block.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Node / Validator Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>Not reporting income</li>
                      <li>Fault tolerant consensus</li>
                      <li>Decryption Standards</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>Private Transactions</li>
                      <li>Selective Transactions</li>
                      <li>MEV Protection</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential centralization of the nodes / validators
                        layer.
                      </li>
                      <li>
                        Potential displacement of development activities to more
                        permissive jurisdictions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        not being able to update or edit fraudulent transactions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">
                Computation-intensive Consensus Mechanisms
              </div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Amount of electricity being used comparatively to
                        similar technology that uses less
                      </li>
                      <li>Fault tolerant consensus</li>
                      <li>Decryption Standards</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        High energy consumption leading to environmental
                        concerns
                      </li>
                      <li>Potential centralization of mining power</li>
                      <li>Vulnerability to 51% attacks</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="computation.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to the blockchains with computation-intensive
            consensus mechanisms.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">
                Computation-intensive Consensus Mechanisms
              </div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Amount of electricity being used comparatively to
                        similar technology that uses less
                      </li>
                      <li>Fault tolerant consensus</li>
                      <li>Decryption Standards</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        High energy consumption leading to environmental
                        concerns
                      </li>
                      <li>Potential centralization of mining power</li>
                      <li>Vulnerability to 51% attacks</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Lack of standardization leading to security
                        vulnerabilities
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">
                Capabilities-based Consensus Mechanisms
              </div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>Upgrading consumer security standards</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>Insufficient protection of user data and privacy</li>
                      <li>
                        Potential exposure to smart contract vulnerabilities
                      </li>
                      <li>
                        Lack of recourse in case of unauthorized transactions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="capabilities.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to the blockchains with capabilities-based
            consensus mechanisms.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">
                Capabilities-based Consensus Mechanisms
              </div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>Upgrading consumer security standards</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>Insufficient protection of user data and privacy</li>
                      <li>
                        Potential exposure to smart contract vulnerabilities
                      </li>
                      <li>
                        Lack of recourse in case of unauthorized transactions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Voting-based Consensus Mechanisms</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>Ensuring fair and transparent voting processes</li>
                      <li>Preventing voter fraud and manipulation</li>
                      <li>Addressing potential collusion or vote-buying</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Lack of anonymity in voting leading to privacy concerns
                      </li>
                      <li>
                        Vulnerability to Sybil attacks or stake concentration
                      </li>
                      <li>Complexity of verifying the legitimacy of votes</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="voting.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to the blockchains with voting-based consensus
            mechanisms.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Voting-based Consensus Mechanisms</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>Ensuring fair and transparent voting processes</li>
                      <li>Preventing voter fraud and manipulation</li>
                      <li>Addressing potential collusion or vote-buying</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Lack of anonymity in voting leading to privacy concerns
                      </li>
                      <li>
                        Vulnerability to Sybil attacks or stake concentration
                      </li>
                      <li>Complexity of verifying the legitimacy of votes</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Transaction Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Ensuring traceability and transparency of transactions
                      </li>
                      <li>
                        Preventing illegal activities such as money laundering
                        and fraud
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>Exposure to potential transaction delays or fees</li>
                      <li>
                        Privacy concerns related to transaction history being
                        publicly accessible
                      </li>
                      <li>Risk of inaccurate or irreversible transactions</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="transaction.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to the layer of the blockchain processing the
            transactions before they are permanently settled on the blockchain.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Transaction Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Not being able to remediate theft or crime within their
                        jurisdiction
                      </li>
                      <li>
                        Not being able to identify the criminal(s) behind the
                        the exploits or scams
                      </li>
                      <li>
                        Fair transaction processes during times of increased
                        activity
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">On-chain Data Storage</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
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
                        Addressing the potential use of blockchain for illegal
                        or illicit data storage
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Exposure of sensitive or personal data to public
                        scrutiny
                      </li>
                      <li>
                        Risk of data loss or corruption due to the immutability
                        of blockchain
                      </li>
                      <li>
                        Challenges in managing data access and permissions in a
                        decentralized system
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Lack of standardized data storage practices leading to
                        security vulnerabilities
                      </li>
                      <li>
                        Difficulty in addressing disputes related to ownership
                        and control of stored data
                      </li>
                      <li>
                        Potential misuse of blockchain for storing illegal or
                        harmful content
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="onchain.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to permanently storing data on the blockchain.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">On-chain Data Storage</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>That misinformation cannot be censored</li>
                      <li>Illicit profits from non-original work </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Original artists not being able to censor copycats.
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Asset Layer - Stablecoins</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Ensuring stability and value preservation of stablecoins
                      </li>
                      <li>
                        Preventing money laundering and illegal transactions
                      </li>
                      <li>
                        Are stablecoins defined correctly in programming terms
                      </li>
                      <li>
                        The effects of internal inflation based on the unlimited
                        burning / minting mechanisms of popular stables
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Hindering the growth and innovation of stablecoin use
                        cases
                      </li>
                      <li>
                        Restricting accessibility and availability of stablecoin
                        services
                      </li>
                      <li>
                        Imposing barriers for startups and new entrants in the
                        stablecoin market
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Lack of consumer protection and accountability in
                        stablecoin issuance
                      </li>
                      <li>
                        Vulnerability to financial crises or market manipulation
                      </li>
                      <li>
                        Difficulty in addressing cross-border regulatory
                        challenges
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="stable.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to the asset layer, or token layer, and is
            only referring to stablecoins.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Asset Layer - Stablecoins</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Asset Layer - Fungible Tokens</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Mutability presents a scenario of being &quot;derived
                        from the efforts of others&quot; which leans towards
                        being a security.
                      </li>
                      <li>
                        Protecting consumers from fraudulent or misleading token
                        offerings.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Overly stringent regulations could stifle innovation in
                        fungible token use cases and hinder the growth of
                        blockchain projects and applications.
                      </li>
                      <li>
                        Excessive regulation might discourage token issuers and
                        developers from exploring new models and tokenization
                        methods.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Lack of regulatory oversight could lead to fraudulent or
                        misleading token offerings, potentially resulting in
                        financial losses for investors.
                      </li>
                      <li>
                        Absence of clear regulations might deter legitimate
                        projects from entering the market due to uncertainties
                        surrounding legal compliance.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="fungible.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to the asset layer, or token layer, and is
            only referring to fungible tokens.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Asset Layer - Fungible Tokens</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">
                Asset Layer - Non-Fungible Tokens (NFTs)
              </div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        classification uncertainty for diverse NFT assets like
                        property records, medical records, or even voting
                        mechanisms
                      </li>
                      <li>Data privacy of sensitive NFT content</li>
                      <li>
                        Not registering with FinCen or the SEC if selling
                        securities
                      </li>
                      <li>Being a vehicle for money laundering</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
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
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>Stifled innovation due to heavy regulations</li>
                      <li>
                        Barrier to entry for startups due to compliance costs
                      </li>
                      <li>
                        Lack of security standards and risk management standards
                      </li>
                      <li>
                        Limited consumer protection from upgradable features
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>Vulnerability to NFT fraud without clear rules</li>
                      <li>Ownership ambiguity leading to disputes</li>
                      <li>Lack of potential international economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="nonfungible.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to the asset layer, or token layer, and is
            only referring to non-fungible tokens (NFTs).
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">
                Asset Layer - Non-Fungible Tokens (NFTs)
              </div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12"></ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="description list-disc pl-12"></ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Exchange Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Protecting consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                      <li>Limiting economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="exchange.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies to companies that operate as an exchange.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Exchange Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
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
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Protocol Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Protecting consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                      <li>Limiting economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="protocol.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies to companies that operate as a project deployed on
            the blockchain.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Protocol Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
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
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Application Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Protecting consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                      <li>Limiting economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="application.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies to companies that apps giving access to other
            protocols that are on the blockchain.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Application Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
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
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Permanent Storage Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Protecting consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                      <li>Limiting economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="permanent.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies to protocols providing immutable data storage to
            their users.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Permanent Storage Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
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
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Internet Browser</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Protecting consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                      <li>Limiting economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="internet.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies to internet browsers and their context of the
            blockchain.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Internet Browser</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
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
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">The Developer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Protecting consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                      <li>Limiting economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="developer.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies to developers who are coding any aspect of their
            project relating to the blockchain.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">The Developer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
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
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">DeFi Architecture and Security</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Protecting consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                      <li>Limiting economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="defi.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies to the security of DeFi architecture concerning the
            dependency of other third-party apps when building on the
            blockchain.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">DeFi Architecture and Security</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
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
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">
                DeFi Architecture Standards / Auditor
              </div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Protecting consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                      <li>Limiting economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="defi2.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies to creating standards for the DeFi Stack and its
            Architecture, and for future DeFi Interopability Auditors.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">
                DeFi Architecture Standards / Auditor
              </div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
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
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Fiat Onboarding / Offboarding Access</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Protecting consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                      <li>Limiting economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="fiat.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "99px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "50px",
              height: "2px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies to protocols providing access for users to onboard
            and offboard fiat to their users.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "99px",
                  height: "99px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="mb-5 pl-10 text-left">
              <div className="header">Fiat Onboarding / Offboarding Access</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="description list-disc pl-12">
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
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="description list-disc pl-12">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <style>{inlineStyles}</style>
      </div>
    </div>
  )
}

export default Matrix
