"use client"

import React from "react"

export default function DecentralizedElectricity() {
  return (
    <div className="section-col" id="decentralized-electricity">
      <div className="section">
        <div className="section-in">
          {/* Possibly your "image2" background or an <img> */}
          <div
            className="image2"
            style={{
              width: "99px",
              height: "99px",
              margin: "0 auto",
              backgroundImage: "var(--image2)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>

      {/* Hover text or static text */}
      <div className="hover-text">
        <h2>
          <div className="mb-5 pl-10 text-left">
            <div className="header">Electricity (Decentralized)</div>
            <ul className="pl-12">
              <li className="topic">
                <div>
                  <h3>Government Concerns</h3>
                  <ul className="description list-disc pl-12">
                    <li>
                      Protecting consumers from loss of use due to geopolitical
                      situations
                    </li>
                    <li>
                      Amount of electricity required to maintain the blockchain
                      and the amount per transaction
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
                      Potential geopolitical risks leading to electricity access
                      disruptions
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <ul className="pl-12">
              <li className="topic">
                <div>
                  <h3>Cons to Over-Regulation</h3>
                  <ul className="description list-disc pl-12">
                    <li>
                      Potential geopolitical risks leading to electricity access
                      disruptions
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <ul className="pl-12">
              <li className="topic">
                <div>
                  <h3>Cons to Lack of Regulation</h3>
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
    </div>
  )
}
