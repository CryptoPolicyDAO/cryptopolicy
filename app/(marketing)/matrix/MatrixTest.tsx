"use client"

import React from "react"

// --------------- EXAMPLE IMPORTS ---------------
// For each layer, import the centralized and decentralized versions:
import CentralizedElectricity from "../brm/centralized/CentralizedElectricity"
import DecentralizedElectricity from "../brm/decentralized/DecentralizedElectricity"

// If you have more layers, continue importing them below:
// import CentralizedNodeValidator from "../brm/centralized/NodeValidator";
// import DecentralizedNodeValidator from "../brm/decentralized/NodeValidator";
// ... and so on.

export default function Matrix() {
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
    
    p {
      font-family: 'Poppins', sans-serif;
      line-height: 1.2;
      color: var(--effect-2);
      margin: 0;
    }

    .section-fluid-main {
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

    .section-row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
      position: relative;
    }

    /* On hover, fade out other columns */
    .section-row:hover .section-col {
      opacity: 0.1;
    }

    .section-col {
      position: relative;
      width: 100%;
      flex: 0 0 calc(100% / 3);
      max-width: 100%;
      transition: opacity 250ms linear;
      justify-content: center;
      align-items: center;
    }

    .section-row .section-col:hover {
      opacity: 0.5;
    }

    .section {
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
      transition: transform 250ms linear;
      width: 100%;
      height: auto;
    }

    .section-col:hover .section-in {
      transform: scale(1.2);
      opacity: 0.5;
    }

    .hover-text {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 100;
      pointer-events: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .hover-text h2 {
      font-family: 'Poppins', sans-serif;
      line-height: 1.2;
      color: var(--effect-2);
      opacity: 0;
      transform: scale(0.8);
      transition: transform 250ms linear, opacity 250ms ease;
    }

    .section-col:hover + .hover-text h2 {
      opacity: 1;
      transform: scale(1);
    }

    /* Responsiveness */
    @media (max-width: 767px) {
      .section-col {
        flex: 0 0 100%;
        max-width: 100%;
      }
      .hover-text h2 {
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
    }

    @media (max-width: 620px) {
      .section-col {
        flex: 0 0 100%;
        max-width: 100%;
      }
      .hover-text h2 {
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

    .line {
      position: absolute;
      top: 50%;
      width: 50px;
      height: 2px;
      background: var(--nav5);
    }
  `

  return (
    <>
      <style>{inlineStyles}</style>
      <div className="section-fluid-main">
        {/* ------------------- EXAMPLE 1: ELECTRICITY ------------------- */}
        <div className="section-row">
          {/* Left column: Centralized Electricity */}
          <CentralizedElectricity />

          {/* Middle “connection” column or design element, 
              if you want to keep the line or an icon. 
              Otherwise you can remove this. */}
          <div className="section-col">
            <div className="section">
              <div className="section-in">
                {/* Example center icon or line, same as your old structure */}
                <img
                  src="e10.png"
                  alt="Icon or Logo"
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
                left: "-3%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
            <div
              className="line"
              style={{
                right: "-1%",
                transform: "translate(50%, 50%)",
              }}
            ></div>
          </div>

          {/* Right column: Decentralized Electricity */}
          <DecentralizedElectricity />
        </div>

        {/* ------------------- EXAMPLE 2: SETTLEMENT LAYER ------------------- */}
        <div className="section-row">
          {/* Left column: Centralized Settlement */}

          {/* Middle “connection” column or design element */}
          <div className="section-col">
            <div className="section">
              <div className="section-in">
                <img
                  src="s1.png"
                  alt="Settlement Icon"
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
                left: "-3%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
            <div
              className="line"
              style={{
                right: "-1%",
                transform: "translate(50%, 50%)",
              }}
            ></div>
          </div>

          {/* Right column: Decentralized Settlement */}
        </div>

        {/* Repeat the above pattern for Node/Validator, Transaction, etc. */}
        {/* <div className="section-row">
          <CentralizedNodeValidator />
          ... middle ...
          <DecentralizedNodeValidator />
        </div> */}
      </div>
    </>
  )
}
