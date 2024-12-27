"use client"

import React from "react"

export default function CentralizedElectricity() {
  return (
    <div className="section-col" id="centralized-electricity">
      <div className="section">
        <div className="section-in">
          {/* You could use your original image1 style or an <img> tag here */}
          <div
            className="image1"
            style={{
              width: "99px",
              height: "99px",
              margin: "0 auto",
              backgroundImage: "var(--image1)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>

      {/* Hover text or static text—depending on your design */}
      <div className="hover-text">
        <h2>
          <div className="mb-5 pl-10 text-left">
            <div className="header">Electricity (Centralized)</div>
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
                    <li>
                      Concentration of electricity supplied to a blockchain from
                      within certain areas
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
