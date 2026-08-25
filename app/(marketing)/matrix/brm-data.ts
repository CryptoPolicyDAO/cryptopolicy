/**
 * Blockchain Regulation Matrix (BRM) — canonical content.
 *
 * This file is the single source of truth for every layer and cell of the
 * BRM. Both the interactive explorer (MatrixExplorer.tsx) and the long-form
 * reading view (MatrixLongForm.tsx) render from this data — edit content
 * here, never in the components.
 *
 * Structure: each layer (row) has a centralized and a decentralized cell,
 * and each cell answers the five BRM questions (see BRM_CATEGORIES), plus a
 * mapped regulatory landscape. Layers also carry notable incidents that
 * evidence their risk lists. An empty array means that question is still
 * open for that cell — those gaps are intentional contribution targets.
 *
 * NOTE ON RECENCY: regulatory statuses change quickly — re-verify entries
 * here whenever market-structure legislation moves.
 */

import { siteConfig } from "@/config/site"

export type BrmSide = "centralized" | "decentralized"

export type BrmCategoryKey =
  | "governmentConcerns"
  | "consumerRisks"
  | "overRegulationCons"
  | "underRegulationCons"
  | "existingSolutions"

export type BrmRegStatus =
  | "enacted"
  | "proposed"
  | "guidance"
  | "ruling"
  | "enforcement"
  | "repealed"

/** One regulatory instrument (statute, rule, ruling, or action) mapped to a cell. */
export interface BrmRegulation {
  instrument: string
  jurisdiction: string
  status: BrmRegStatus
  year: string
  note: string
}

/** A real-world incident that evidences a layer's risk list. */
export interface BrmIncident {
  name: string
  year: string
  note: string
}

export interface BrmCellContent {
  governmentConcerns: string[]
  consumerRisks: string[]
  overRegulationCons: string[]
  underRegulationCons: string[]
  existingSolutions: string[]
  /** The current regulatory landscape mapped to this cell. */
  regulation?: BrmRegulation[]
}

export interface BrmLayer {
  /** Stable identifier, used for keys and deep links (/matrix/[id]/[side]). */
  id: string
  /** Full display title of the row. */
  title: string
  /** Compact name used in outline lists (defaults to title). */
  shortTitle?: string
  /** Parent grouping for sub-rows (e.g. the three consensus mechanisms). */
  group?: string
  /** Center-column icon, served from /public. */
  icon: string
  /** The row's scope statement, shown when hovering the center icon. */
  scope: string
  /** Related reading (blog posts, drafts) shown in the pinned detail panel. */
  related?: { label: string; href: string }[]
  /** Notable incidents that evidence this layer's risk lists. */
  incidents?: BrmIncident[]
  centralized: BrmCellContent
  decentralized: BrmCellContent
}

/** A pinned/previewed target: one side of a layer, or its scope (center icon). */
export interface BrmPin {
  layerId: string
  side: BrmSide | "scope"
}

/**
 * The DAO's analytical judgment of how well regulation currently covers a
 * cell — the signal behind the heat-map view. This is editorial assessment,
 * not a mechanical rollup of the instruments list.
 */
export type BrmAssessmentStatus = "regulated" | "partial" | "contested" | "gap"

export interface BrmAssessment {
  status: BrmAssessmentStatus
  note: string
}

/** The five BRM questions, in display order. */
export const BRM_CATEGORIES: { key: BrmCategoryKey; label: string }[] = [
  { key: "governmentConcerns", label: "Government Concerns" },
  { key: "consumerRisks", label: "Consumer Risks" },
  { key: "overRegulationCons", label: "Cons to over-regulation" },
  { key: "underRegulationCons", label: "Cons to lack of regulation" },
  {
    key: "existingSolutions",
    label:
      "Does blockchain technology currently exist to fulfill these obligations, and if so, what is it?",
  },
]

export const brmLayers: BrmLayer[] = [
  {
    id: "electricity",
    title: "Electricity",
    icon: "/images/e10.png",
    scope:
      "This row applies only to entities that are producing the electricity that powers the blockchain.",
    incidents: [
      {
        name: "China mining ban",
        year: "2021",
        note: "Over half of global Bitcoin hash rate relocated within months, straining grids in Kazakhstan and elsewhere — the defining geopolitical electricity event.",
      },
      {
        name: "Kazakhstan grid strain and blackouts",
        year: "2021–22",
        note: "Post-ban mining influx overloaded the national grid; unrest-related internet shutdowns then knocked ~13% of global hash rate offline overnight.",
      },
      {
        name: "ERCOT demand-response curtailments",
        year: "2022–23",
        note: "Texas miners curtailed load during grid stress events, demonstrating mining as a flexible, grid-stabilizing demand resource.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Protecting consumers from loss of use due to a geopolitical situation",
        "Amount of electricity required to maintain the blockchain and the amount per transaction",
        "Concentration of electricity supplied to a blockchain from within countries or areas.",
        "Grid stability when large mining loads concentrate behind a single utility or municipality",
      ],
      consumerRisks: [
        "Potential geopolitical risks leading to electricity access disruptions",
        "A single utility or provider outage halting local mining and validation operations",
      ],
      overRegulationCons: [
        "Inability to use the blockchain to solve real-world problems",
        "Inhibiting technological growth",
        "Limiting economic growth",
        "Pushing energy-intensive consensus operations into jurisdictions with dirtier grids",
      ],
      underRegulationCons: [
        "Potential risks of concentration and control by certain countries",
        "Potential displacement of development activities to more permissive jurisdictions",
      ],
      existingSolutions: [
        "Demand-response and curtailment programs (ERCOT model) that turn mining into a grid-stabilizing, interruptible load",
        "Flared-gas and stranded-energy capture mining that monetizes otherwise wasted energy",
        "Public energy-use indices (Cambridge CBECI) enabling evidence-based rather than anecdotal policy",
        "Ethereum's Merge (2022) proved a live network can migrate consensus and cut energy use by ~99.95%",
      ],
      regulation: [
        {
          instrument: "Proof-of-work moratorium (S6486D)",
          jurisdiction: "US — New York",
          status: "enacted",
          year: "2022",
          note: "Two-year moratorium on new permits for fossil-fueled proof-of-work mining — the first state law targeting a consensus mechanism's energy source.",
        },
        {
          instrument: "MiCA sustainability disclosures",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "Issuers and service providers must publish consensus-mechanism energy and environmental-impact indicators.",
        },
        {
          instrument: "Arkansas Data Centers Act (right to mine)",
          jurisdiction: "US — Arkansas",
          status: "enacted",
          year: "2023",
          note: "Protects mining operations from discriminatory local utility rates and zoning — the protective counter-model to New York's moratorium.",
        },
        {
          instrument: "EIA emergency miner energy survey",
          jurisdiction: "US",
          status: "repealed",
          year: "2024",
          note: "Emergency mandatory energy-use survey of miners was withdrawn after litigation — data collection now proceeds only through voluntary channels.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Whether community-owned generation, like a solar DAO, falls under utility regulation once it powers validators",
        "Taxing and metering energy that is produced and consumed entirely off-grid",
        "Safety and inspection standards for member-built generation and mining installations",
      ],
      consumerRisks: [
        "No regulated-utility reliability guarantees behind community power projects",
        "A small cooperative's failure can take local validators offline with no recourse or compensation",
      ],
      overRegulationCons: [
        "Utility-grade licensing requirements would make small energy cooperatives unviable",
        "Discouraging off-grid renewable buildouts that displace fossil-fuel mining",
      ],
      underRegulationCons: [
        "Unsafe electrical installations operating outside inspection regimes",
        "Hash power quietly concentrating behind a few unregulated energy sources",
      ],
      existingSolutions: [
        "Community microgrids with peer-to-peer energy trading (Brooklyn Microgrid pilot model)",
        "On-chain renewable energy certificates making green sourcing independently verifiable",
        "Demand-response participation letting cooperative mining loads stabilize rather than strain grids",
      ],
      regulation: [
        {
          instrument: "Renewable Energy Directive (RED II) energy communities",
          jurisdiction: "EU",
          status: "enacted",
          year: "2018",
          note: "Recognizes citizen energy communities — the closest existing legal template for a solar DAO powering validators.",
        },
        {
          instrument: "State net-metering and interconnection rules",
          jurisdiction: "US — states",
          status: "guidance",
          year: "ongoing",
          note: "Patchwork rules determine whether community generation can legally sell or share power with mining loads; no crypto-specific treatment exists.",
        },
      ],
    },
  },
  {
    id: "settlement",
    title: "Settlement Layer",
    icon: "/images/s1.png",
    scope:
      "This row applies only to the layer of the blockchain where transactions settle permanently.",
    incidents: [
      {
        name: "Ethereum finality incident",
        year: "2023",
        note: "The chain briefly lost finality for about an hour (client bug under load) while continuing to process blocks — a live test of finality-vs-liveness design.",
      },
      {
        name: "Ethereum Classic 51% attacks",
        year: "2019–20",
        note: "Repeated majority-hash attacks reorganized settled history and double-spent against exchanges — the canonical settlement-integrity failure.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Not being able to update / edit fraudulent transactions",
        "Not being able to identify immoral activity that could be deemed fraudulent",
        "Whether a centrally operated sequencer or consortium chain is a regulated payment or clearing system",
      ],
      consumerRisks: [
        "Lack of due diligence",
        "Security and attacks",
        "Operator halts: a centralized sequencer pausing withdrawals or reordering transactions",
      ],
      overRegulationCons: [
        "Inability to use the blockchain to solve real-world problems",
        "Inhibiting technological growth",
      ],
      underRegulationCons: [
        "Potential displacement of development activities to more permissive jurisdictions",
        "No finality guarantees for consumers when an operator can quietly reorganize history",
      ],
      existingSolutions: [
        "Proof of Stake (PoS) consensus algorithms that require significantly less energy",
        "Rollup escape hatches that let users force withdrawals even if the operator halts",
        "Proof-of-reserves attestations for consortium and sequencer operators",
      ],
      regulation: [
        {
          instrument: "UCC Article 12 (controllable electronic records)",
          jurisdiction: "US — states",
          status: "enacted",
          year: "2022–",
          note: "Adopting states give digital-asset settlement property-law clarity: who controls a record, and what a transferee takes free of.",
        },
        {
          instrument: "DLT Pilot Regime",
          jurisdiction: "EU",
          status: "enacted",
          year: "2023",
          note: "Sandbox letting licensed market infrastructure settle securities on DLT — the EU's template for regulated on-chain settlement.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Not being able to update / edit fraudulent transactions",
        "Not being able to identify immoral activity that could be deemed fraudulent",
        "No operator exists to serve legal process on when settled funds are stolen",
      ],
      consumerRisks: [
        "Lack of due diligence",
        "Security and attacks",
        "Chain splits or reorganizations during contentious upgrades",
      ],
      overRegulationCons: [
        "Potential centralization of the blockchain settlement layer.",
        "Regulating public settlement layers like clearinghouses presumes an operator that does not exist",
      ],
      underRegulationCons: [
        "Potential displacement of development activities to more permissive jurisdictions",
        "Consumers cannot distinguish chains with strong finality from chains that quietly rewrite history",
      ],
      existingSolutions: [
        "Proof of Stake (PoS) consensus algorithms that require significantly less energy",
        "Byzantine Fault Tolerance (BFT) protocols ensuring fault tolerance",
        "Advanced encryption techniques for secure transactions and data privacy",
        "Light clients letting anyone verify settlement independently without trusting an intermediary",
      ],
      regulation: [
        {
          instrument: "CLARITY Act 'mature blockchain' test",
          jurisdiction: "US",
          status: "proposed",
          year: "2025",
          note: "House-passed market structure bill turns on whether a settlement layer is decentralized ('mature') — the first statutory decentralization test.",
        },
        {
          instrument: "UCC Article 12",
          jurisdiction: "US — states",
          status: "enacted",
          year: "2022–",
          note: "Property-law treatment of on-chain settlement applies regardless of whether the ledger has an operator.",
        },
      ],
    },
  },
  {
    id: "node-validator",
    title: "Node / Validator Layer",
    shortTitle: "Node / Validator",
    icon: "/images/Node.png",
    scope:
      "This row applies only to the nodes or validators that are validating the transactions for each block.",
    incidents: [
      {
        name: "OFAC-filtered block building",
        year: "2022–23",
        note: "After Tornado Cash sanctions, a majority of Ethereum blocks briefly excluded sanctioned transactions — a live demonstration of censorship pressure entering at the builder/validator layer.",
      },
      {
        name: "Lido stake-share debate",
        year: "2023–",
        note: "A single liquid-staking protocol approaching one-third of staked ETH raised consensus-safety and governance-concentration alarms across the ecosystem.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Not reporting income",
        "Fault tolerant consensus",
        "Decryption Standards",
        "Custodial staking services pooling customer assets without clear classification",
      ],
      consumerRisks: [
        "Private Transactions",
        "Selective Transactions",
        "MEV Protection",
        "Provider slashing penalties and downtime losses passed through to customers",
      ],
      overRegulationCons: ["Centralization", "Inhibiting technological growth"],
      underRegulationCons: [
        "Potential displacement of development activities to more permissive jurisdictions",
        "Transaction monitoring",
        "Selective transactions and private transactions",
      ],
      existingSolutions: [
        "Proposer-builder separation (MEV-Boost) making block-building competition transparent",
        "Distributed validator technology (Obol, SSV) splitting one validator key across independent operators",
        "Slashing conditions that make validator misbehavior economically self-defeating",
      ],
      regulation: [
        {
          instrument: "SEC v. Kraken staking-as-a-service settlement",
          jurisdiction: "US",
          status: "enforcement",
          year: "2023",
          note: "Kraken paid $30M and shut its US custodial staking program — the action that defined custodial staking as the regulated end of this layer.",
        },
        {
          instrument: "SEC staff statement on protocol staking",
          jurisdiction: "US",
          status: "guidance",
          year: "2025",
          note: "Staff view that self/protocol staking (including certain delegated forms) is not a securities offering — reversing the Kraken-era chill.",
        },
        {
          instrument: "MiCA custody provisions",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "Custodial staking falls under CASP authorization and client-asset safeguarding rules.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Not reporting income",
        "Fault tolerant consensus",
        "Decryption Standards",
        "Home validators cannot realistically screen or KYC the transactions they include",
      ],
      consumerRisks: [
        "Private Transactions",
        "Selective Transactions",
        "MEV Protection",
        "MEV extraction concentrating in a few professional builders and searchers",
      ],
      overRegulationCons: [
        "Potential centralization of the nodes / validators layer.",
        "Potential displacement of development activities to more permissive jurisdictions",
      ],
      underRegulationCons: [
        "not being able to update or edit fraudulent transactions",
        "Potential displacement of development activities to more permissive jurisdictions",
      ],
      existingSolutions: [
        "Distributed validator technology letting small operators run resilient validators collectively",
        "Encrypted mempools (Shutter-style) blunting censorship and front-running at the inclusion step",
        "Client diversity programs reducing correlated-failure risk across the validator set",
      ],
      regulation: [
        {
          instrument: "OFAC compliance pressure on block builders",
          jurisdiction: "US",
          status: "guidance",
          year: "2022",
          note: "Post-Tornado sanctions, builders voluntarily filtered transactions; never a formal validator mandate, but the de-facto censorship test case.",
        },
        {
          instrument: "Van Loon v. Treasury",
          jurisdiction: "US",
          status: "ruling",
          year: "2024",
          note: "Fifth Circuit held immutable smart contracts are not sanctionable 'property' — easing the legal cloud over neutral transaction inclusion.",
        },
      ],
    },
  },
  {
    id: "consensus-computation",
    title: "Computation-intensive Consensus Mechanisms",
    shortTitle: "Computation Intensive Based",
    group: "Consensus Layer",
    icon: "/images/computation.png",
    scope:
      "This row applies only to the blockchains with computation-intensive consensus mechanisms.",
    incidents: [
      {
        name: "GHash.io majority hash rate",
        year: "2014",
        note: "A single pool briefly exceeded 51% of Bitcoin hash rate and voluntarily capped itself — proving pool concentration is a real, recurring dynamic.",
      },
      {
        name: "Bitcoin Gold 51% attack",
        year: "2018",
        note: "Rented hash power double-spent ~$18M against exchanges, showing smaller PoW chains inherit PoW's model without its security budget.",
      },
      {
        name: "The Ethereum Merge",
        year: "2022",
        note: "The largest PoW network migrated to PoS live, cutting energy use ~99.95% — the existence proof for consensus migration.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Amount of electricity being used comparatively to similar technology that uses less",
        "Fault tolerant consensus",
        "Decryption Standards",
        "Mining pool concentration placing block production in a handful of operators",
      ],
      consumerRisks: [
        "High energy consumption leading to environmental concerns",
        "Potential centralization of mining power",
        "Vulnerability to 51% attacks",
      ],
      overRegulationCons: [
        "Stifling innovation and development of energy-efficient consensus mechanisms",
        "Driving blockchain projects to operate in jurisdictions with more favorable regulations",
        "Disincentivizing network participation due to excessive compliance requirements",
      ],
      underRegulationCons: [
        "Lack of standardization leading to security vulnerabilities",
        "Potential for concentration of power among mining entities",
        "Difficulty in addressing fraudulent or malicious activities",
      ],
      existingSolutions: [
        "Proof of Stake (PoS) consensus algorithms that require significantly less energy",
        "Byzantine Fault Tolerance (BFT) protocols ensuring fault tolerance",
        "Advanced encryption techniques for secure transactions and data privacy",
      ],
      regulation: [
        {
          instrument: "SEC staff statement on proof-of-work mining",
          jurisdiction: "US",
          status: "guidance",
          year: "2025",
          note: "Staff view that solo and pooled PoW mining rewards are not securities offerings.",
        },
        {
          instrument: "MiCA sustainability disclosures",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "Mandatory publication of consensus-mechanism energy indicators — disclosure chosen over the once-debated PoW ban.",
        },
        {
          instrument: "New York proof-of-work moratorium",
          jurisdiction: "US — New York",
          status: "enacted",
          year: "2022",
          note: "Targets fossil-fueled PoW permitting specifically — regulation attaching at the consensus-mechanism level.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Amount of electricity being used comparatively to similar technology that uses less",
        "Fault tolerant consensus",
        "Decryption Standards",
      ],
      consumerRisks: [
        "High energy consumption leading to environmental concerns",
        "Potential centralization of mining power",
        "Vulnerability to 51% attacks",
      ],
      overRegulationCons: [
        "Stifling innovation and development of energy-efficient consensus mechanisms",
        "Driving blockchain projects to operate in jurisdictions with more favorable regulations",
        "Disincentivizing network participation due to excessive compliance requirements",
      ],
      underRegulationCons: [
        "Lack of standardization leading to security vulnerabilities",
        "Potential for concentration of power among mining entities",
        "Difficulty in addressing fraudulent or malicious activities",
      ],
      existingSolutions: [
        "Proof of Stake (PoS) consensus algorithms that require significantly less energy",
        "Byzantine Fault Tolerance (BFT) protocols ensuring fault tolerance",
        "Advanced encryption techniques for secure transactions and data privacy",
        "Stratum V2 letting individual miners, not pools, choose which transactions they mine",
      ],
      regulation: [
        {
          instrument: "SEC staff statement on proof-of-work mining",
          jurisdiction: "US",
          status: "guidance",
          year: "2025",
          note: "Applies equally to independent miners — the decentralized side of this layer is largely a declared-lawful gap.",
        },
      ],
    },
  },
  {
    id: "consensus-capabilities",
    title: "Capabilities-based Consensus Mechanisms",
    shortTitle: "Capabilities Based",
    group: "Consensus Layer",
    icon: "/images/capabilities.png",
    scope:
      "This row applies only to the blockchains with capabilities-based consensus mechanisms.",
    incidents: [
      {
        name: "stETH discount under stress",
        year: "2022",
        note: "During the Celsius/3AC unwind, liquid-staked ETH traded well below ETH, showing how staking derivatives add a second, market-priced layer of risk.",
      },
      {
        name: "Solana liveness outages",
        year: "2022–24",
        note: "Repeated full-network halts showed that stake-based designs can trade liveness for throughput — a consumer-facing consensus risk with no consumer remedy.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Upgrading consumer security standards",
        "Concentration of stake under a few custodial providers and exchanges",
      ],
      consumerRisks: [
        "Insufficient protection of user data and privacy",
        "Potential exposure to smart contract vulnerabilities",
        "Lack of recourse in case of unauthorized transactions",
        "Slashing and downtime losses on stake delegated to a provider",
      ],
      overRegulationCons: [
        "Hampering innovation by imposing rigid security standards",
        "Reducing accessibility and inclusivity by raising entry barriers",
        "Limiting the potential of decentralized applications (dApps) due to excessive control",
      ],
      underRegulationCons: [
        "Proliferation of insecure smart contracts leading to financial losses",
        "Erosion of consumer trust and confidence in blockchain applications",
        "Difficulty in addressing cross-border disputes and fraudulent activities",
      ],
      existingSolutions: [
        "Slashing conditions that make validator misbehavior economically self-defeating",
        "Distributed validator technology splitting one validator across independent operators",
        "Client diversity programs reducing correlated-failure risk",
      ],
      regulation: [
        {
          instrument: "SEC v. Kraken staking-as-a-service settlement",
          jurisdiction: "US",
          status: "enforcement",
          year: "2023",
          note: "Custodial staking programs marketed with yields were treated as unregistered securities offerings.",
        },
        {
          instrument: "SEC staff statement on protocol staking",
          jurisdiction: "US",
          status: "guidance",
          year: "2025",
          note: "Protocol-level staking held not to be a securities offering; the custodial/protocol line now defines this layer's regulatory boundary.",
        },
        {
          instrument: "MiCA whitepaper disclosure regime",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "Consensus incentives and staking mechanics must be disclosed in crypto-asset whitepapers.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Upgrading consumer security standards",
        "Liquid staking tokens creating a synthetic second layer of the base asset",
      ],
      consumerRisks: [
        "Insufficient protection of user data and privacy",
        "Potential exposure to smart contract vulnerabilities",
        "Lack of recourse in case of unauthorized transactions",
        "Liquid staking token depegs during market stress",
      ],
      overRegulationCons: [
        "Hampering innovation by imposing rigid security standards",
        "Reducing accessibility and inclusivity by raising entry barriers",
        "Limiting the potential of decentralized applications (dApps) due to excessive control",
      ],
      underRegulationCons: [
        "Proliferation of insecure smart contracts leading to financial losses",
        "Erosion of consumer trust and confidence in blockchain applications",
        "Difficulty in addressing cross-border disputes and fraudulent activities",
      ],
      existingSolutions: [
        "Non-custodial staking with user-controlled withdrawal credentials",
        "Distributed validator technology removing single-operator failure points",
        "Transparent, on-chain slashing history letting delegators assess operators",
      ],
      regulation: [
        {
          instrument: "SEC staff statement on protocol staking",
          jurisdiction: "US",
          status: "guidance",
          year: "2025",
          note: "Self-staking and delegated protocol staking declared outside securities registration — liquid staking tokens remain a gray zone.",
        },
      ],
    },
  },
  {
    id: "consensus-voting",
    title: "Voting-based Consensus Mechanisms",
    shortTitle: "Voting Based",
    group: "Consensus Layer",
    icon: "/images/voting.png",
    scope:
      "This row applies only to the blockchains with voting-based consensus mechanisms.",
    incidents: [
      {
        name: "Beanstalk governance raid",
        year: "2022",
        note: "An attacker flash-loaned voting power, passed a malicious proposal, and drained $182M in one transaction — the defining voting-mechanism exploit.",
      },
      {
        name: "Tornado Cash governance takeover",
        year: "2023",
        note: "A deceptive proposal briefly handed an attacker full governance control, proving proposal review is a consensus-security surface.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Ensuring fair and transparent voting processes",
        "Preventing voter fraud and manipulation",
        "Addressing potential collusion or vote-buying",
        "Validator cartels forming inside small permissioned voting sets",
      ],
      consumerRisks: [
        "Lack of anonymity in voting leading to privacy concerns",
        "Vulnerability to Sybil attacks or stake concentration",
        "Complexity of verifying the legitimacy of votes",
      ],
      overRegulationCons: [
        "Overly strict regulations hindering the flexibility and innovation of voting mechanisms",
        "Potential centralization of voting power due to stringent requirements",
        "Difficulty in adapting to rapidly changing technological advancements",
      ],
      underRegulationCons: [
        "Vulnerability to malicious attacks on the voting process",
        "Lack of accountability and transparency in voting results",
        "Challenges in addressing disputes and irregularities",
      ],
      existingSolutions: [
        "Time-locked execution with veto guardians between a vote passing and taking effect",
        "Separating off-chain signaling (Snapshot) from on-chain execution",
        "On-chain vote records making every ballot independently auditable",
      ],
      regulation: [
        {
          instrument: "Wyoming DAO LLC Act",
          jurisdiction: "US — Wyoming",
          status: "enacted",
          year: "2021",
          note: "First statute giving algorithmically-governed organizations a corporate form — voting mechanisms gain legal personality.",
        },
        {
          instrument: "Wyoming DUNA Act",
          jurisdiction: "US — Wyoming",
          status: "enacted",
          year: "2024",
          note: "Nonprofit unincorporated-association form built for member-governed protocols; addresses liability of token voters.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Ensuring fair and transparent voting processes",
        "Preventing voter fraud and manipulation",
        "Addressing potential collusion or vote-buying",
      ],
      consumerRisks: [
        "Lack of anonymity in voting leading to privacy concerns",
        "Vulnerability to Sybil attacks or stake concentration",
        "Complexity of verifying the legitimacy of votes",
        "Flash-loaned voting power capturing governance decisions in a single block",
      ],
      overRegulationCons: [
        "Overly strict regulations hindering the flexibility and innovation of voting mechanisms",
        "Potential centralization of voting power due to stringent requirements",
        "Difficulty in adapting to rapidly changing technological advancements",
      ],
      underRegulationCons: [
        "Vulnerability to malicious attacks on the voting process",
        "Lack of accountability and transparency in voting results",
        "Challenges in addressing disputes and irregularities",
      ],
      existingSolutions: [
        "Quadratic and delegated voting designs limiting whale capture",
        "Vote-escrow and snapshot-block techniques defeating flash-loaned ballots",
        "Time-locks giving token holders an exit window before contested changes execute",
      ],
      regulation: [
        {
          instrument: "Wyoming DUNA Act",
          jurisdiction: "US — Wyoming",
          status: "enacted",
          year: "2024",
          note: "Gives fully decentralized, member-voted protocols a recognized legal wrapper without imposing an operator.",
        },
      ],
    },
  },
  {
    id: "transaction",
    title: "Transaction Layer",
    icon: "/images/transaction.png",
    scope:
      "This row applies only to the layer of the blockchain processing the transactions before they are permanently settled on the blockchain.",
    incidents: [
      {
        name: "Tornado Cash sanctions cycle",
        year: "2022–25",
        note: "OFAC sanctioned an immutable mixer; the Fifth Circuit's Van Loon ruling (2024) held immutable contracts aren't sanctionable property, and the listing was withdrawn in 2025.",
      },
      {
        name: "Bybit hack laundering flows",
        year: "2025",
        note: "The $1.5B theft's rapid cross-chain laundering became a live stress test of exchange, bridge, and mixer chokepoints at the transaction layer.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Ensuring traceability and transparency of transactions",
        "Preventing illegal activities such as money laundering and fraud",
        "Addressing cross-border transaction challenges and regulatory compliance",
        "An anonymous public ledger inhibits appropriate recordkeeping",
      ],
      consumerRisks: [
        "Exposure to potential transaction delays or fees",
        "Privacy concerns related to transaction history being publicly accessible",
        "Risk of inaccurate or irreversible transactions",
      ],
      overRegulationCons: [
        "Stifling innovation and experimentation with new transaction models",
        "Restricting financial inclusion by imposing excessive compliance requirements",
        "Hampering the usability and efficiency of blockchain transactions",
      ],
      underRegulationCons: [
        "Increased susceptibility to fraudulent or malicious transactions",
        "Difficulty in resolving disputes related to unauthorized or erroneous transactions",
        "Lack of consumer protection and accountability",
      ],
      existingSolutions: [
        "Blockchain analytics have made public-ledger tracing routine for investigators — the ledger is more traceable than cash",
        "Travel-rule messaging networks (TRUST model) moving originator data between regulated intermediaries",
        "Layer-2 rollups cutting fees while inheriting base-layer settlement security",
      ],
      regulation: [
        {
          instrument: "FinCEN Travel Rule application to CVC",
          jurisdiction: "US",
          status: "guidance",
          year: "2019",
          note: "Money-transmitter originator/beneficiary rules applied to virtual-currency intermediaries above $3,000.",
        },
        {
          instrument: "EU Transfer of Funds Regulation (recast)",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "No-threshold originator/beneficiary data for CASP transfers; verification duties for self-hosted wallets above €1,000.",
        },
        {
          instrument: "IRS custodial broker reporting (Form 1099-DA)",
          jurisdiction: "US",
          status: "enacted",
          year: "2024",
          note: "Custodial brokers report digital-asset sales from tax year 2025 — transaction-level tax visibility at regulated intermediaries.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Not being able to remediate theft or crime within their jurisdiction",
        "Not being able to identify the criminal(s) behind the the exploits or scams",
        "Fair transaction processes during times of increased activity",
        "Mixers and privacy tools erasing the trace investigators rely on",
      ],
      consumerRisks: [
        "Sandwich and front-running bots extracting value from visible pending transactions",
        "No intermediary exists who can reverse a mistaken or fraudulent transfer",
        "Fee spikes during congestion pricing out small users",
      ],
      overRegulationCons: [
        "Identity mandates on every peer-to-peer transfer are unenforceable against software and push activity into opaque channels",
        "Criminalizing privacy tooling outlaws lawful financial privacy along with laundering",
      ],
      underRegulationCons: [
        "Drainer and scam proceeds wash through unregulated paths while victims lack any recourse process",
        "Manipulation of transaction ordering (MEV) operates with no market-conduct rules",
      ],
      existingSolutions: [
        "Encrypted mempools and private order flow blunting front-running",
        "View keys and zero-knowledge proofs enabling selective disclosure to auditors without public exposure",
        "Payment channels and rollups making small peer-to-peer transfers economically viable",
      ],
      regulation: [
        {
          instrument: "IRS DeFi broker rule repeal (CRA)",
          jurisdiction: "US",
          status: "repealed",
          year: "2025",
          note: "Congress repealed the rule extending broker reporting to DeFi front-ends — the first crypto rule undone by the Congressional Review Act.",
        },
        {
          instrument: "FinCEN mixing transactions NPRM",
          jurisdiction: "US",
          status: "proposed",
          year: "2023",
          note: "Would designate international convertible-virtual-currency mixing as a primary money-laundering concern with recordkeeping duties.",
        },
        {
          instrument: "Van Loon v. Treasury / Tornado delisting",
          jurisdiction: "US",
          status: "ruling",
          year: "2024–25",
          note: "Immutable privacy contracts held outside sanctions authority; OFAC removed the designation in 2025.",
        },
      ],
    },
  },
  {
    id: "onchain-data-storage",
    title: "On-chain Data Storage",
    icon: "/images/onchain.png",
    scope:
      "This row applies only to permanently storing data on the blockchain.",
    incidents: [
      {
        name: "Illicit content embedded in Bitcoin's chain",
        year: "2019",
        note: "Researchers documented links to illegal material written into the ledger — every node replicates it, and no one can delete it.",
      },
      {
        name: "Ordinals inscription wave",
        year: "2023",
        note: "Arbitrary images and files inscribed on Bitcoin strained nodes and reopened the debate over what a ledger should permanently store.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Storage space mapping",
        "Data sovereignty and jurisdictional challenges in a decentralized environment",
        "Ensuring compliance with data protection and privacy regulations",
        "Addressing the potential use of blockchain for illegal or illicit data storage",
      ],
      consumerRisks: [
        "Exposure of sensitive or personal data to public scrutiny",
        "Risk of data loss or corruption due to the immutability of blockchain",
        "Challenges in managing data access and permissions in a decentralized system",
      ],
      overRegulationCons: [
        "Impeding the adoption of blockchain for legitimate and innovative data storage use cases",
        "Limiting the potential of decentralized applications (dApps) requiring data storage",
        "Inhibiting data interoperability and portability across different blockchain networks",
      ],
      underRegulationCons: [
        "Lack of standardized data storage practices leading to security vulnerabilities",
        "Difficulty in addressing disputes related to ownership and control of stored data",
        "Potential misuse of blockchain for storing illegal or harmful content",
      ],
      existingSolutions: [
        "Store hashes on-chain and data off-chain (IPFS with managed pinning) so content stays deletable",
        "Crypto-shredding: encrypt on-chain payloads and destroy the keys as a practical right-to-erasure",
        "Zero-knowledge commitments proving facts about data without publishing the data itself",
      ],
      regulation: [
        {
          instrument: "GDPR",
          jurisdiction: "EU",
          status: "enacted",
          year: "2016",
          note: "The right to erasure collides head-on with immutability — the defining legal tension of this layer.",
        },
        {
          instrument: "EDPB draft guidelines on blockchain processing",
          jurisdiction: "EU",
          status: "guidance",
          year: "2025",
          note: "First supervisory guidance on reconciling GDPR with public ledgers: avoid on-chain personal data, prefer hashes and off-chain storage.",
        },
        {
          instrument: "EU Data Act (Art. 30 smart contracts)",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "Termination/interruption requirements for smart contracts in data-sharing — applying from Sept 2025, contested for permissionless systems.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "That misinformation cannot be censored",
        "Illicit profits from non-original work",
        "Every node in every jurisdiction replicates whatever anyone writes, including illegal content",
      ],
      consumerRisks: [
        "Original artists not being able to censor copycats.",
        "Doxxed personal data can never be removed once written",
      ],
      overRegulationCons: [
        "Erasure obligations on node operators would make running public infrastructure legally impossible",
      ],
      underRegulationCons: [
        "No flagging or remedy process exists for illegal or abusive payloads",
      ],
      existingSolutions: [
        "Crypto-shredding and off-chain storage patterns keep personal data off the permanent ledger",
        "Content filtering at the gateway and indexer level, rather than the protocol level",
        "Commitment schemes storing proofs of data instead of the data itself",
      ],
      regulation: [
        {
          instrument: "EDPB draft guidelines on blockchain processing",
          jurisdiction: "EU",
          status: "guidance",
          year: "2025",
          note: "Notes that nodes without control may not be 'controllers' — the liability question for public networks remains open.",
        },
      ],
    },
  },
  {
    id: "asset-stablecoins",
    title: "Asset Layer - Stablecoins",
    shortTitle: "Stablecoins",
    group: "Asset Layer",
    icon: "/images/stable.png",
    scope:
      "This row applies only to the asset layer, or token layer, and is only referring to stablecoins.",
    related: [
      { label: "Why Stablecoins Need Regulation", href: "/blog/stablecoins" },
    ],
    incidents: [
      {
        name: "Terra/UST collapse",
        year: "2022",
        note: "The algorithmic peg unwound in days, erasing roughly $40B and triggering the industry's credit crisis — the case that made stablecoin legislation inevitable.",
      },
      {
        name: "USDC depeg (Silicon Valley Bank)",
        year: "2023",
        note: "A fully-reserved stablecoin depegged because $3.3B of reserves sat in a failing bank — reserve custody, not just reserve existence, is the risk.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Ensuring stability and value preservation of stablecoins",
        "Preventing money laundering and illegal transactions",
        "Are stablecoins defined correctly in programming terms",
        "The effects of internal inflation based on the unlimited burning / minting mechanisms of popular stables",
        "Addressing potential systemic risks from widespread stablecoin adoption",
        "Does crypto transaction provenance equally replace not having serial numbers on gov't released stablecoins?",
      ],
      consumerRisks: [
        "Risk of stablecoin issuer insolvency or mismanagement",
        "Lack of transparency in stablecoin reserves and collateral",
        "Potential loss of value due to changes in underlying collateral",
        "Irrevocability of fraudulent transactions",
      ],
      overRegulationCons: [
        "Hindering the growth and innovation of stablecoin use cases",
        "Restricting accessibility and availability of stablecoin services",
        "Imposing barriers for startups and new entrants in the stablecoin market",
      ],
      underRegulationCons: [
        "Lack of consumer protection and accountability in stablecoin issuance",
        "Vulnerability to financial crises or market manipulation",
        "Difficulty in addressing cross-border regulatory challenges",
      ],
      existingSolutions: [
        "Monthly reserve attestations with published composition — now mandated for US payment stablecoins by GENIUS",
        "Reserves held in T-bills and cash equivalents under regulated trust charters (the NYDFS model)",
        "On-chain proof-of-reserves tooling supplementing accountant attestations with verifiable data",
      ],
      regulation: [
        {
          instrument: "GENIUS Act",
          jurisdiction: "US",
          status: "enacted",
          year: "2025",
          note: "First federal payment-stablecoin regime: 1:1 liquid reserves, monthly disclosure, redemption rights, federal or state issuer licensing, no yield-bearing issuance.",
        },
        {
          instrument: "MiCA e-money and asset-referenced token rules",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "EMT/ART issuers need authorization, redemption at par, and reserve segregation; large tokens face volume caps.",
        },
        {
          instrument: "NYDFS stablecoin guidance",
          jurisdiction: "US — New York",
          status: "guidance",
          year: "2022",
          note: "The pre-GENIUS template: full backing, monthly attestation, redemption within two business days.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "No issuer exists to license, examine, or subpoena when a decentralized peg fails",
        "Algorithmic designs can unwind systemically, as Terra/UST proved",
        "Collateral is itself volatile crypto, so 'backing' means something different than fiat reserves",
        "Whether governance token holders are de-facto issuers with issuer liability",
      ],
      consumerRisks: [
        "Death-spiral dynamics in algorithmic or undercollateralized designs",
        "Oracle failure mispricing collateral and triggering wrongful liquidations",
        "Governance capture changing collateral or peg rules underneath holders",
        "No redemption claim exists against any legal person",
      ],
      overRegulationCons: [
        "Treating overcollateralized DeFi-native stables as unlicensed banks bans the transparent designs along with the reckless ones",
        "Issuer-shaped rules simply push issuerless designs offshore rather than making them safe",
      ],
      underRegulationCons: [
        "Nothing prevents another UST-style design from scaling to systemic size",
        "Contagion flows unchecked into lending markets that accept these tokens as collateral",
        "Retail users cannot tell an overcollateralized design from an unbacked one",
      ],
      existingSolutions: [
        "Overcollateralization with automated liquidations — MakerDAO's model has held its peg through multiple market crashes",
        "Reserve composition verifiable on-chain every block: stronger transparency than any quarterly attestation",
        "Peg-stability modules and circuit breakers that slow runs instead of accelerating them",
      ],
      regulation: [
        {
          instrument: "GENIUS Act",
          jurisdiction: "US",
          status: "enacted",
          year: "2025",
          note: "Written for identifiable payment-stablecoin issuers; how truly issuerless designs fit is unresolved and under Treasury study.",
        },
        {
          instrument: "MiCA asset-referenced token rules",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "Algorithmic stablecoins are effectively barred from public offering in the EU; decentralized issuance sits in a compliance void.",
        },
      ],
    },
  },
  {
    id: "asset-fungible-tokens",
    title: "Asset Layer - Fungible Tokens",
    shortTitle: "Fungible Tokens (erc20, etc)",
    group: "Asset Layer",
    icon: "/images/fungible.png",
    scope:
      "This row applies only to the asset layer, or token layer, and is only referring to fungible tokens.",
    incidents: [
      {
        name: "BEC token integer overflow",
        year: "2018",
        note: "An arithmetic overflow let attackers mint astronomically large balances, zeroing the token's value — the incident behind checked-math standards.",
      },
      {
        name: "Squid Game token rug pull",
        year: "2021",
        note: "A sell-blocking honeypot rode a pop-culture wave and collapsed to zero — the archetypal permissionless-token consumer harm.",
      },
      {
        name: "FTT collapse",
        year: "2022",
        note: "An exchange token used as balance-sheet collateral evaporated, taking FTX with it — token design and custody risk compounding each other.",
      },
    ],
    centralized: {
      governmentConcerns: [
        'Mutability presents a scenario of being "derived from the efforts of others" which leans towards being a security.',
        "Protecting consumers from fraudulent or misleading token offerings.",
      ],
      consumerRisks: [
        "Security of transactions: Ensuring that transactions involving fungible tokens are secure, protecting users from hacking, theft, or unauthorized access to their tokens.",
        "Centralization risks affecting token liquidity, market stability, and control.",
      ],
      overRegulationCons: [
        "Overly stringent regulations could stifle innovation in fungible token use cases and hinder the growth of blockchain projects and applications.",
        "Excessive regulation might discourage token issuers and developers from exploring new models and tokenization methods.",
      ],
      underRegulationCons: [
        "Lack of regulatory oversight could lead to fraudulent or misleading token offerings, potentially resulting in financial losses for investors.",
        "Absence of clear regulations might deter legitimate projects from entering the market due to uncertainties surrounding legal compliance.",
      ],
      existingSolutions: [
        "Audited open standards (ERC-20 with OpenZeppelin implementations) make token behavior predictable and reviewable",
        "The constant-product AMM formula prices tokens transparently on-chain, with every trade auditable",
        "Team vesting and liquidity locks that are provable on-chain rather than promised in marketing",
      ],
      regulation: [
        {
          instrument: "SEC v. Ripple",
          jurisdiction: "US",
          status: "ruling",
          year: "2023",
          note: "Programmatic exchange sales held not to be securities offerings while institutional sales were; the case closed in 2025 after the SEC dropped its appeal.",
        },
        {
          instrument: "CLARITY Act",
          jurisdiction: "US",
          status: "proposed",
          year: "2025",
          note: "House-passed market structure bill creating a CFTC digital-commodity path with a decentralization ('mature blockchain') test.",
        },
        {
          instrument: "MiCA 'other crypto-assets' regime",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "Utility-style tokens require a compliant whitepaper and issuer accountability rather than full securities treatment.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "How securities analysis applies when there is no promoter and no ongoing managerial effort",
        "Tax treatment of airdropped and fair-launched tokens with no issuer",
        "Wash trading and manipulation inside permissionless AMM pools",
      ],
      consumerRisks: [
        "Rug pulls via liquidity removal moments after launch",
        "Honeypot contracts that allow buying but block selling",
        "Meme-token pump-and-dumps run through anonymous deployers",
      ],
      overRegulationCons: [
        "Registering every community token as a security is operationally impossible and criminalizes open-source deployment itself",
      ],
      underRegulationCons: [
        "Serial rug-pull operators act with practical impunity across chains",
        "No listing standards exist anywhere in the permissionless path from deployment to trading",
      ],
      existingSolutions: [
        "Renounced, immutable contracts remove the ongoing control that creates securities-law exposure",
        "On-chain liquidity locks and vesting proofs that anyone can verify before buying",
        "Deployer-reputation and token-scanner tooling flagging honeypot patterns automatically",
      ],
      regulation: [
        {
          instrument: "SEC staff statement on meme coins",
          jurisdiction: "US",
          status: "guidance",
          year: "2025",
          note: "Staff view that most meme coins are not securities — consumer protection falls to fraud and market-manipulation law instead.",
        },
        {
          instrument: "SEC v. Terraform Labs",
          jurisdiction: "US",
          status: "ruling",
          year: "2024",
          note: "Jury fraud verdict and multi-billion settlement: token classification aside, misrepresentation remains squarely actionable.",
        },
      ],
    },
  },
  {
    id: "asset-nfts",
    title: "Asset Layer - Non-Fungible Tokens (NFTs)",
    shortTitle: "Non-Fungible Tokens (erc721)",
    group: "Asset Layer",
    icon: "/images/nonfungible.png",
    scope:
      "This row applies only to the asset layer, or token layer, and is only referring to non-fungible tokens (NFTs).",
    incidents: [
      {
        name: "OpenSea insider trading conviction",
        year: "2023",
        note: "A marketplace employee was convicted for front-running featured listings — the first insider-trading case built on digital assets.",
      },
      {
        name: "Blue-chip NFT phishing waves",
        year: "2022",
        note: "Signature-phishing campaigns drained high-value collections wallet by wallet, showing NFT risk concentrates at the approval/signing step.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Classification uncertainty for diverse NFT assets like property records, medical records, or even voting mechanisms",
        "Data privacy of sensitive NFT content",
        "Not registering with FinCen or the SEC if selling securities",
        "Being a vehicle for money laundering",
      ],
      consumerRisks: [
        "Data exposure in NFTs, even with restricted access",
        "Ownership disputes over real-world asset NFTs",
        "Limited access to tokens due to over-regulation",
        "Inability to create securities in a regulated environment",
      ],
      overRegulationCons: [
        "Stifled innovation due to heavy regulations",
        "Barrier to entry for startups due to compliance costs",
        "Lack of security standards and risk management standards",
        "Limited consumer protection from upgradable features",
      ],
      underRegulationCons: [
        "Vulnerability to NFT fraud without clear rules",
        "Ownership ambiguity leading to disputes",
        "Lack of potential international economic growth",
      ],
      existingSolutions: [
        "ERC-721/1155 provenance answers authenticity by design — the chain itself is the certificate",
        "ERC-2981 royalty standard (technically solved; enforcement remains voluntary at marketplaces)",
        "Fully on-chain artwork removing dependence on off-chain metadata that can rot or be swapped",
      ],
      regulation: [
        {
          instrument: "SEC orders: Impact Theory and Stoner Cats",
          jurisdiction: "US",
          status: "enforcement",
          year: "2023",
          note: "NFT sales marketed with profit expectations treated as unregistered securities offerings — marketing, not the token format, drove the outcome.",
        },
        {
          instrument: "SEC closes OpenSea investigation",
          jurisdiction: "US",
          status: "guidance",
          year: "2025",
          note: "Probe dropped without action, signaling the enforcement-first approach to NFT marketplaces has ended.",
        },
        {
          instrument: "MiCA NFT exclusion",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "True NFTs sit outside MiCA, but fractionalized or large-series issues can fall back into scope as fungible in practice.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Classification of fully on-chain art versus financialized, fractionalized NFTs",
        "IP infringement minted permissionlessly with no gatekeeper to enjoin",
        "Whether royalty promises encoded in metadata are enforceable anywhere",
      ],
      consumerRisks: [
        "Stolen-art mints selling plagiarized work before takedowns can propagate",
        "Off-chain metadata rotting or being swapped, leaving tokens pointing at nothing",
        "Wash trading inflating collection prices against unsuspecting buyers",
        "Marketplace-bypassing trades quietly stripping creator royalties",
      ],
      overRegulationCons: [
        "Treating every NFT as a security chills digital art, gaming, and identity uses that have no investment character",
        "Requiring marketplaces to pre-clear every mint is incompatible with permissionless creation",
      ],
      underRegulationCons: [
        "Plagiarism mints and fake collections proliferate unchecked",
        "Insider knowledge of listings and reveals is traded without market-conduct rules",
      ],
      existingSolutions: [
        "On-chain provenance and verified-creator registries making authenticity checkable before purchase",
        "Fully on-chain storage (Art Blocks model) eliminating metadata-swap fraud",
        "Marketplace-level wash-trade filtering using public trade graphs",
      ],
      regulation: [
        {
          instrument: "Existing IP and copyright law",
          jurisdiction: "US / EU",
          status: "guidance",
          year: "ongoing",
          note: "Infringement law applies to the underlying work, but enforcement against pseudonymous minters remains the practical gap.",
        },
      ],
    },
  },
  {
    id: "exchange",
    title: "Exchange Layer",
    icon: "/images/exchange.png",
    scope: "This row applies to companies that operate as an exchange.",
    incidents: [
      {
        name: "FTX collapse",
        year: "2022",
        note: "An $8B customer shortfall from commingling and misappropriation; the founder was convicted of fraud in 2023 — the case behind every custody rule since.",
      },
      {
        name: "Mt. Gox",
        year: "2014",
        note: "The original exchange failure: ~850k BTC lost, creditors waited a decade — proof that exchange custody risk predates and outlives every cycle.",
      },
      {
        name: "Bybit hack",
        year: "2025",
        note: "$1.5B stolen via compromised signing infrastructure — the largest crypto theft ever, and it hit a major centralized venue's cold-wallet process.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Not registering with FinCen or the SEC if facilitating securities trading",
        "Potential facilitation of money laundering on the platform",
        "Commingling and rehypothecation of customer assets",
        "Reliability of proof-of-reserves claims made to the public",
      ],
      consumerRisks: [
        "Loss of funds in exchange insolvency or misappropriation of customer assets",
        "Account freezes, opaque delistings, and withdrawal halts",
        "Limited access to certain tokens due to regulatory restrictions",
        "Exchange data breaches exposing identity and holdings information",
      ],
      overRegulationCons: [
        "Overbearing regulations stifling innovation in exchange services",
        "Regulatory hurdles limiting access to tokenized assets",
        "Difficulty in complying with complex and varying global regulations",
      ],
      underRegulationCons: [
        "Lack of investor protection and avenues for dispute resolution",
        "Potential for scams and fraudulent projects on unregulated platforms",
        "Difficulty in establishing trust without clear regulatory standards",
        "Absence of standardized security practices and risk mitigation",
      ],
      existingSolutions: [
        "Merkle-tree proof-of-reserves with liability attestations (the post-FTX standard)",
        "On-chain segregation of customer assets in publicly attributable wallets",
        "Real-time public visibility of exchange hot and cold wallets — impossible in traditional brokerage",
      ],
      regulation: [
        {
          instrument: "MiCA CASP authorization",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "Full licensing regime for exchanges: custody segregation, conduct rules, and passporting across the EU from Dec 2024.",
        },
        {
          instrument: "Binance settlement (DOJ / FinCEN / OFAC)",
          jurisdiction: "US",
          status: "enforcement",
          year: "2023",
          note: "$4.3B for BSA and sanctions failures with a compliance monitorship — the AML baseline for centralized venues.",
        },
        {
          instrument: "SEC v. Coinbase dismissed",
          jurisdiction: "US",
          status: "ruling",
          year: "2025",
          note: "The registration-based enforcement theory against exchanges was abandoned, shifting the question to market-structure legislation.",
        },
        {
          instrument: "CLARITY Act",
          jurisdiction: "US",
          status: "proposed",
          year: "2025",
          note: "Would give spot digital-commodity venues a CFTC registration path — the missing federal exchange framework.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "No operator exists to register, license, or serve process on",
        "Sanctioned actors can trade against public liquidity pools",
        "Whether liability attaches to front-ends, liquidity providers, or governance token holders",
      ],
      consumerRisks: [
        "High transaction fees in decentralized exchanges",
        "Impermanent loss risk in liquidity provision",
        "Lack of traditional customer support and dispute resolution",
        "Interoperability challenges within the decentralized finance (DeFi) ecosystem",
        "Permissionless listing puts scam tokens beside legitimate ones with identical interfaces",
      ],
      overRegulationCons: [
        "Overbearing regulations stifling innovation in decentralized exchanges",
        "Registering an immutable AMM contract as an exchange demands an operator that does not exist",
      ],
      underRegulationCons: [
        "Wash trading and manipulation with no market surveillance anywhere in the stack",
        "Rug tokens listed freely with no listing standards or accountability",
      ],
      existingSolutions: [
        "The x·y=k pricing formula executes transparently on-chain, auditable by anyone in real time",
        "TWAP oracles and manipulation-resistant pricing designs",
        "Front-end token allow-lists and warning systems layered over permissionless pools",
      ],
      regulation: [
        {
          instrument: "SEC closes Uniswap Labs investigation",
          jurisdiction: "US",
          status: "guidance",
          year: "2025",
          note: "The probe testing whether a DEX front-end is an unregistered exchange ended without action.",
        },
        {
          instrument: "MiCA 'fully decentralized' exclusion",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "Services provided 'in a fully decentralised manner without any intermediary' fall outside MiCA — the boundary is deliberately undefined.",
        },
        {
          instrument: "CLARITY Act DeFi provisions",
          jurisdiction: "US",
          status: "proposed",
          year: "2025",
          note: "Would exempt non-custodial protocol activities from intermediary registration.",
        },
      ],
    },
  },
  {
    id: "protocol",
    title: "Protocol Layer",
    icon: "/images/protocol.png",
    scope:
      "This row applies to companies that operate as a project deployed on the blockchain.",
    incidents: [
      {
        name: "The DAO hack and hard fork",
        year: "2016",
        note: "A recursive-call exploit drained a third of The DAO's ETH; Ethereum forked to reverse it — the founding case study in immutability versus intervention.",
      },
      {
        name: "Euler Finance exploit",
        year: "2023",
        note: "$197M taken via a donation-function flaw in an audited protocol — then largely returned after negotiation, testing recovery without any legal mechanism.",
      },
      {
        name: "Nomad bridge free-for-all",
        year: "2022",
        note: "A faulty upgrade let anyone replay withdrawals; $190M drained by hundreds of copycats in hours — an upgrade-governance failure, not a cryptography failure.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Whether admin-key control over user funds makes a protocol team a money transmitter or custodian",
        "Upgradeability quietly defeating the 'code is law' representations made to users",
        "Hidden fee switches and parameter control concentrated in a team multisig",
      ],
      consumerRisks: [
        "Admin key compromise draining every user simultaneously",
        "Unilateral parameter or contract changes altering the deal users signed up for",
        "Team abandonment leaving contracts unmaintained but still holding funds",
      ],
      overRegulationCons: [
        "Licensing every deployed contract like a financial institution ends permissionless deployment",
        "Compliance overhead pushing serious teams to deploy pseudonymously instead of accountably",
      ],
      underRegulationCons: [
        "Upgradeable protocols can rug users with no disclosure duties",
        "No baseline exists separating audited, timelocked protocols from unaudited forks",
      ],
      existingSolutions: [
        "Timelocked upgrades with public queues — changes are visible before they execute",
        "Multisig councils with published signer sets and thresholds",
        "Formal verification and continuous audit of upgrade paths",
      ],
      regulation: [
        {
          instrument: "EU Data Act (Art. 30)",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "Termination and access-control requirements for smart contracts in data-sharing contexts — workable for admin-keyed protocols, contested for immutable ones.",
        },
        {
          instrument: "CLARITY Act decentralization test",
          jurisdiction: "US",
          status: "proposed",
          year: "2025",
          note: "Control-based test would formally distinguish team-controlled protocols from mature, governance-minimized ones.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "No legal person exists to serve process on when an immutable protocol causes harm",
        "Ossified protocols cannot be ordered to change, only abandoned",
        "Whether governance token voters inherit operator liability",
      ],
      consumerRisks: [
        "Immutable bugs cannot be patched — users can only exit",
        "Governance capture redirecting protocol funds or parameters",
        "Forked copycats carrying known vulnerabilities under trusted names",
      ],
      overRegulationCons: [
        "Mandated kill-switches in immutable contracts destroy the security model users chose them for",
        "Operator-shaped rules simply cannot bind software with no operator",
      ],
      underRegulationCons: [
        "Exploiters keep funds absent any recovery or restitution mechanism",
        "No disclosure standard tells users a protocol is immutable and unaudited",
      ],
      existingSolutions: [
        "Immutable escape hatches guaranteeing user withdrawal regardless of protocol state",
        "Circuit breakers and rate limits capping the damage of any single exploit",
        "Public bug bounties (Immunefi) creating a lawful market for vulnerability disclosure",
      ],
      regulation: [
        {
          instrument: "Van Loon v. Treasury",
          jurisdiction: "US",
          status: "ruling",
          year: "2024",
          note: "Immutable smart contracts held not to be 'property' subject to sanctions — the first appellate treatment of code without an operator.",
        },
        {
          instrument: "CLARITY Act DeFi exemptions",
          jurisdiction: "US",
          status: "proposed",
          year: "2025",
          note: "Would codify that publishing and maintaining non-custodial protocol code is not intermediary activity.",
        },
      ],
    },
  },
  {
    id: "application",
    title: "Application Layer",
    icon: "/images/application.png",
    scope:
      "This row applies to companies whose apps give access to other protocols on the blockchain.",
    incidents: [
      {
        name: "Ledger Connect Kit supply-chain attack",
        year: "2023",
        note: "A compromised npm library served wallet-drainer code across many dApp front-ends at once — the application layer's systemic dependency risk made real.",
      },
      {
        name: "BadgerDAO front-end injection",
        year: "2021",
        note: "Malicious script injected into the site UI harvested inflated approvals for months (~$120M) while the underlying contracts stayed uncompromised.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Whether an app that custodies or routes user funds is a money services business",
        "Disclosure standards for fees, risks, and the contracts an app actually calls",
      ],
      consumerRisks: [
        "Data privacy concerns due to centralized control over user information",
        "Vulnerability to data breaches and security incidents",
        "Dependence on the cApp operator's security and practices",
        "Limited recourse in case of disputes or malfunctions",
      ],
      overRegulationCons: [
        "Stifling innovation and growth of centralized cApp ecosystem",
        "Higher entry barriers for startups and new entrants",
        "Potential reduction in user accessibility and choice",
      ],
      underRegulationCons: [
        "Lack of standardized security and data protection practices",
        "Potential for unscrupulous behavior and fraudulent activities",
        "Limited avenues for consumer protection and dispute resolution",
      ],
      existingSolutions: [
        "Wallet-level transaction simulation showing users what an app will actually do before they sign",
        "Sign-In With Ethereum standardizing authentication without password databases",
        "On-chain verification that the interface serves the contract addresses it claims to",
      ],
      regulation: [
        {
          instrument: "MiCA CASP scope (custodial services)",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "Apps taking custody or executing orders are CASPs; purely non-custodial interfaces sit outside — the same boundary question as US law.",
        },
        {
          instrument: "State money-transmitter licensing",
          jurisdiction: "US — states",
          status: "guidance",
          year: "ongoing",
          note: "Custodial app operators generally need MTLs; interpretations for non-custodial apps vary state by state.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Sanctions and takedowns apply at the DNS/front-end level while the protocol persists",
        "Whether hosting an interface to someone else's protocol creates operator liability",
        "Cloned phishing front-ends impersonating legitimate applications",
      ],
      consumerRisks: [
        "A malicious or compromised front-end serving altered transactions to signers",
        "Wallet-drainer approvals harvested through fake or injected interfaces",
        "No way to distinguish the official front-end from a perfect clone",
      ],
      overRegulationCons: [
        "Holding interface hosts liable as operators of protocols they merely display collapses the app/protocol distinction",
        "Front-end licensing pushes users toward unhosted, unvetted interfaces",
      ],
      underRegulationCons: [
        "Phishing clones of major dApps proliferate with no takedown standard",
        "Compromised dependencies propagate across the ecosystem unchecked",
      ],
      existingSolutions: [
        "ENS + IPFS front-ends whose integrity users can verify against on-chain records",
        "Wallet-side simulation and allow-list registries flagging known-bad interfaces",
        "Subresource integrity and dependency pinning against supply-chain injection",
      ],
      regulation: [
        {
          instrument: "OFAC-driven front-end geoblocking practice",
          jurisdiction: "US",
          status: "guidance",
          year: "2022–",
          note: "Interface operators geoblock sanctioned regions voluntarily; the legal status of a pure interface remains judicially untested.",
        },
        {
          instrument: "IRS DeFi broker rule repeal",
          jurisdiction: "US",
          status: "repealed",
          year: "2025",
          note: "Congress rejected treating front-ends as brokers — the clearest legislative statement yet on interface liability.",
        },
      ],
    },
  },
  {
    id: "permanent-storage",
    title: "Permanent Storage Layer",
    icon: "/images/permanent.png",
    scope:
      "This row applies to protocols providing immutable data storage to their users.",
    incidents: [
      {
        name: "Illicit content in permanent storage",
        year: "2019–",
        note: "Studies documenting illegal material written into permanent ledgers and storage networks — content no party can remove — remain the layer's hardest policy problem.",
      },
      {
        name: "IPFS-hosted phishing waves",
        year: "2022–23",
        note: "Phishing sites pinned to decentralized storage evaded conventional takedowns, forcing gateway-level filtering as the practical control point.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Takedown capability exists at gateways and pinning services — and so does takedown liability (CSAM, DMCA)",
        "Data-residency and sovereignty rules colliding with globally replicated storage",
      ],
      consumerRisks: [
        "'Permanent' storage that quietly dies when the pinning company does — pinning is not permanence",
        "Gateway censorship silently making stored content unreachable",
      ],
      overRegulationCons: [
        "Hosting-liability regimes strict enough to make storing any user content untenable",
        "Compliance costs concentrating storage in a few giant providers — recreating the centralization the layer exists to avoid",
      ],
      underRegulationCons: [
        "Consumers cannot distinguish marketing 'permanence' from funded, replicated permanence",
        "No standards for what happens to stored data in provider insolvency",
      ],
      existingSolutions: [
        "Content-addressing: hashes prove integrity regardless of which host serves the data",
        "Encrypted storage with client-held keys — providers physically cannot read or leak content",
        "Filecoin-style storage deals with cryptographic proof the data is actually being stored",
      ],
      regulation: [
        {
          instrument: "EU Digital Services Act",
          jurisdiction: "EU",
          status: "enacted",
          year: "2022",
          note: "Hosting-provider notice-and-action duties apply to gateways and pinning services; fit for operatorless networks is unresolved.",
        },
        {
          instrument: "DMCA / Section 230 framework",
          jurisdiction: "US",
          status: "guidance",
          year: "ongoing",
          note: "Safe-harbor and takedown mechanics assume a host who can remove content — the assumption this layer breaks.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Nobody — including the network's creators — can remove illegal content once replicated",
        "Jurisdictional void: data exists everywhere and nowhere at once",
      ],
      consumerRisks: [
        "'Pay once, store forever' models depend on endowment economics that may not survive decades",
        "Storage does not guarantee retrieval — data can be stored yet practically unreachable",
      ],
      overRegulationCons: [
        "Content liability on node operators who cannot inspect what they replicate ends volunteer participation",
      ],
      underRegulationCons: [
        "Illegal and abusive content gains a permanence no other medium provides",
        "Victims of published private data have no remedy at all",
      ],
      existingSolutions: [
        "Arweave's endowment model funding storage economically rather than by promise",
        "Proof-of-spacetime making storage claims cryptographically verifiable",
        "Gateway- and indexer-level filtering as the practical moderation point above an unfilterable base",
      ],
      regulation: [
        {
          instrument: "EU Digital Services Act",
          jurisdiction: "EU",
          status: "enacted",
          year: "2022",
          note: "Duties attach to identifiable intermediaries; a permissionless storage network with no operator sits outside the enforcement model.",
        },
      ],
    },
  },
  {
    id: "internet-browser",
    title: "Internet Browser",
    icon: "/images/internet.png",
    scope:
      "This row applies to internet browsers and their context of the blockchain.",
    related: [{ label: "Wallets and Regulation", href: "/blog/wallets" }],
    incidents: [
      {
        name: "Fake Ledger Live app in Microsoft Store",
        year: "2023",
        note: "A counterfeit wallet app passed store review and stole funds — the browser/store layer failing as gatekeeper exactly where users trust it most.",
      },
      {
        name: "Clipboard-hijacking malware families",
        year: "ongoing",
        note: "Malware silently swaps copied wallet addresses at paste time — a browser/OS-layer attack no smart contract audit can prevent.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Browsers and extension stores are unvetted gatekeepers to users' keys and transactions",
        "No disclosure standards for wallet-integrated browser telemetry and data collection",
      ],
      consumerRisks: [
        "Privacy concerns due to browser tracking and data collection",
        "Potential exposure to malicious websites and phishing attacks",
        "Risk of unauthorized access to integrated wallets and sensitive data",
        "Dependence on browser security for safeguarding cryptocurrency transactions",
      ],
      overRegulationCons: [
        "Excessive regulations stifling innovation and development of blockchain-integrated browsers",
        "Potential barriers to international collaboration and cross-border data flows",
        "Complex compliance requirements hindering user adoption and accessibility",
      ],
      underRegulationCons: [
        "Lack of specific support for addressing social engineering threats through the browser",
        "Malicious extensions and fake wallets circulate with no vetting or recall standard",
      ],
      existingSolutions: [
        "EIP-6963 wallet discovery preventing extension impersonation and injection races",
        "Human-readable signing (EIP-712) and in-wallet transaction simulation",
        "Maintained phishing blocklists (Blockaid-style) acting at the wallet layer",
      ],
      regulation: [
        {
          instrument: "Digital Wallet Security and Accreditation Act (draft)",
          jurisdiction: "Crypto Policy Center",
          status: "proposed",
          year: "2024",
          note: "This organization's draft bill: provider accreditation, secure key handling, and mandatory consumer education — aimed squarely at this layer's gap.",
        },
        {
          instrument: "Browser and extension store policies",
          jurisdiction: "Private",
          status: "guidance",
          year: "ongoing",
          note: "Store review is today's only vetting layer for wallet extensions, and counterfeits repeatedly pass it.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Extension marketplaces distribute wallet software with no fitness or security standard",
        "Users hold keys in browser contexts that were never designed as vaults",
      ],
      consumerRisks: [
        "Malicious extensions reading clipboards, seeds, and session data",
        "Drainer pop-ups and fake signature prompts imitating wallet UIs",
        "Seed-phrase phishing through counterfeit wallet onboarding flows",
      ],
      overRegulationCons: [
        "Banning browser wallets pushes users into custodial apps, eroding self-custody itself",
      ],
      underRegulationCons: [
        "Fake wallet extensions recur in every store with no recall or notification duty",
      ],
      existingSolutions: [
        "Hardware-wallet pairing keeping keys out of the browser entirely",
        "EIP-6963 and EIP-712 making wallet identity and signatures legible to users",
        "Open-source wallet code with reproducible builds users can verify",
      ],
      regulation: [
        {
          instrument: "Digital Wallet Security and Accreditation Act (draft)",
          jurisdiction: "Crypto Policy Center",
          status: "proposed",
          year: "2024",
          note: "Accreditation and education requirements apply equally to open-source and self-custody wallet publishers in the draft.",
        },
      ],
    },
  },
  {
    id: "developer",
    title: "The Developer",
    shortTitle: "Developer",
    icon: "/images/developer.png",
    scope:
      "This row applies to developers who are coding any aspect of their project relating to the blockchain.",
    related: [{ label: "Wallets and Regulation", href: "/blog/wallets" }],
    incidents: [
      {
        name: "Tornado Cash developer prosecutions",
        year: "2023–25",
        note: "Pertsev convicted in the Netherlands (2024); Storm's US trial (2025) produced a partial verdict — the live test of whether publishing code is itself a crime.",
      },
      {
        name: "SushiSwap 'Chef Nomi' dev-key sale",
        year: "2020",
        note: "An anonymous founder sold the dev fund overnight (later returned) — the anonymous-developer accountability problem in one weekend.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "No accreditation or professional standards exist for developers deploying financial code",
        "Whether publishing and maintaining code creates money-transmission or advisory liability",
        "Attribution: identifying who deployed a contract when harm occurs",
      ],
      consumerRisks: [
        "How can I protect myself without having to be a smart contract auditor?",
        "Exposure to smart contract vulnerabilities and financial losses",
        "Lack of recourse in case of errors or bugs in blockchain applications",
        "Difficulty in verifying the security and legitimacy of third-party smart contracts",
        "Limited understanding of complex blockchain technologies leading to mistakes",
        "No coding or certification requirements or standards",
      ],
      overRegulationCons: [
        "Excessive regulations stifling innovation and hindering developer experimentation",
        "Barriers to entry for developers, limiting accessibility and diversity in the ecosystem",
        "Potential migration of developers to more permissive jurisdictions",
        "Slowing down the pace of technological advancement in the blockchain space",
      ],
      underRegulationCons: [
        "Proliferation of insecure and unreliable smart contracts",
        "Lack of standardized coding practices leading to increased risks",
        "Difficulty in addressing disputes and liabilities arising from faulty code",
        "Undermining public confidence in blockchain technology due to frequent incidents",
      ],
      existingSolutions: [
        "Verified source code on public explorers with reproducible builds",
        "Battle-tested libraries (OpenZeppelin) replacing hand-rolled financial primitives",
        "On-chain attestations (EAS) building portable, verifiable developer track records",
      ],
      regulation: [
        {
          instrument: "DOJ digital-assets enforcement memo",
          jurisdiction: "US",
          status: "guidance",
          year: "2025",
          note: "Narrowed 'regulation by prosecution': charging decisions should target fraud and willful violations, not code publication as such.",
        },
        {
          instrument: "Professional licensing regime",
          jurisdiction: "None",
          status: "guidance",
          year: "—",
          note: "No jurisdiction licenses smart-contract developers — the gap this organization's accreditation drafts address.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Liability for publishing immutable code that others later misuse",
        "Pseudonymous teams shipping financial infrastructure with no accountable person",
        "Unmaintained critical libraries underpinning billions in value",
      ],
      consumerRisks: [
        "Anonymous developers can abandon or rug projects without consequence",
        "Critical dependencies maintained by unpaid volunteers with no succession",
        "No signal separates a careful pseudonymous team from a throwaway one",
      ],
      overRegulationCons: [
        "Prosecuting code publication as money transmission chills open-source development broadly",
        "Criminalizing privacy-tool authorship outlaws a class of speech, not a class of crime",
      ],
      underRegulationCons: [
        "No recourse exists against anonymous developers whose code was designed to exploit",
      ],
      existingSolutions: [
        "On-chain reputation and attestation systems giving pseudonymous teams verifiable histories",
        "Reproducible builds proving deployed bytecode matches published source",
        "Timelocked, multisig-governed deployments limiting any single developer's power",
      ],
      regulation: [
        {
          instrument: "Pertsev conviction (Netherlands)",
          jurisdiction: "EU — NL",
          status: "ruling",
          year: "2024",
          note: "A Tornado Cash developer held criminally liable for laundering through the protocol — the maximal developer-liability position.",
        },
        {
          instrument: "US v. Storm partial verdict",
          jurisdiction: "US",
          status: "ruling",
          year: "2025",
          note: "Conviction on one count, hung jury on others — US developer liability for published code remains unsettled.",
        },
        {
          instrument: "CLARITY Act developer protections",
          jurisdiction: "US",
          status: "proposed",
          year: "2025",
          note: "Would codify that non-custodial software development is not money transmission.",
        },
      ],
    },
  },
  {
    id: "language-auditor",
    title: "Programming Language Auditor",
    icon: "/images/auditor.png",
    scope:
      "This row applies to auditors of smart contract programming languages, compilers, and the code written in them.",
    related: [{ label: "Auditor Liability", href: "/blog/auditorliability" }],
    incidents: [
      {
        name: "Curve/Vyper compiler bug",
        year: "2023",
        note: "A reentrancy-guard flaw in specific Vyper compiler versions — not in any protocol's code — enabled ~$70M in exploits. The language layer itself was the vulnerability.",
      },
      {
        name: "BEC token integer overflow",
        year: "2018",
        note: "The overflow class of bug that Solidity 0.8's checked arithmetic later eliminated at the language level — proof that language design is a regulatory surface.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "No licensing, liability standard, or governing body exists for smart contract audit firms",
        "'Audited' functions as marketing while audit scope and findings stay undisclosed",
        "Audit opinions carry engagement-letter disclaimers that void practical accountability",
      ],
      consumerRisks: [
        "Audited protocols are exploited regularly; users cannot read scope limitations",
        "No malpractice recourse exists when a negligent audit precedes a loss",
        "Audit quality varies enormously behind identical 'audited by' badges",
      ],
      overRegulationCons: [
        "Mandatory licensure could price audits beyond startups and concentrate the market in a few firms",
        "A single approved methodology creates monoculture blind spots attackers can study",
      ],
      underRegulationCons: [
        "Pay-to-pass audit shops operate freely beside rigorous firms",
        "No continuing-education or standards regime tracks fast-moving exploit classes",
      ],
      existingSolutions: [
        "Language-level safety: Solidity 0.8 checked arithmetic, and Vyper/Move/Cairo designs that prevent whole bug classes by syntax",
        "Formal verification (Certora-style) proving properties rather than sampling for bugs",
        "The BRM's own Logic Tree framework: documenting intended behavior so audit scope and liability become definable",
      ],
      regulation: [
        {
          instrument: "Auditor licensing regime",
          jurisdiction: "None",
          status: "guidance",
          year: "—",
          note: "No jurisdiction licenses smart-contract auditors; MiCA requires whitepaper accuracy but mandates no code audit — a global gap.",
        },
        {
          instrument: "Auditor Liability framework (draft)",
          jurisdiction: "Crypto Policy Center",
          status: "proposed",
          year: "2024",
          note: "This organization's proposal: logic-tree scoping to make auditor accountability definable and enforceable by a professional body.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Audit contests and crowd review (Code4rena, Sherlock model) have no accountable entity behind findings",
        "Compiler and language toolchains are volunteer-maintained public goods with systemic blast radius",
      ],
      consumerRisks: [
        "Coverage gaps between contests leave windows where deployed code was never reviewed",
        "Unaudited forks of audited protocols ship instantly under borrowed credibility",
      ],
      overRegulationCons: [
        "Requiring licensed sign-off excludes the community reviewers who find a large share of real vulnerabilities",
      ],
      underRegulationCons: [
        "Nothing distinguishes rigorous contest findings from rubber-stamp reviews",
        "Language-level bugs (as in the Vyper incident) have no mandated disclosure or recall channel",
      ],
      existingSolutions: [
        "Public audit contests putting hundreds of adversarial reviewers on one codebase",
        "Open-source static analysis (Slither-class tooling) free to every developer",
        "Immunefi-scale bug bounties creating a lawful market that outbids black-hat sale",
      ],
      regulation: [
        {
          instrument: "Coordinated vulnerability disclosure norms",
          jurisdiction: "Global",
          status: "guidance",
          year: "ongoing",
          note: "Security-research safe harbors exist in general software; nothing crypto-specific protects or obligates smart-contract researchers.",
        },
      ],
    },
  },
  {
    id: "defi-architecture-security",
    title: "DeFi Architecture and Security",
    shortTitle: "DeFi Architecture Security",
    icon: "/images/defi.png",
    scope:
      "This row applies to the security of DeFi architecture concerning the dependency of other third-party apps when building on the blockchain.",
    incidents: [
      {
        name: "Mango Markets oracle manipulation",
        year: "2022",
        note: "$114M extracted by pumping a thin oracle price and borrowing against it — prosecuted as fraud, testing whether 'the code allowed it' is a defense.",
      },
      {
        name: "Ronin bridge hack",
        year: "2022",
        note: "$625M via compromised validator keys on a bridge — the largest DeFi loss, rooted in architecture (5-of-9 keys) rather than contract code.",
      },
      {
        name: "bZx flash-loan attacks",
        year: "2020",
        note: "The first headline flash-loan exploits: composability let an attacker assemble uncollateralized leverage across protocols in one transaction.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Systemic risk from protocols composing on shared dependencies: oracles, bridges, and stablecoins",
        "No reporting channel exists for critical vulnerabilities in live financial infrastructure",
      ],
      consumerRisks: [
        "Exposure to smart contract vulnerabilities leading to asset losses",
        "Risk of funds being locked or inaccessible due to unforeseen circumstances",
        "Dependence on the platform's security measures and risk management",
        "Lack of understanding of complex DeFi protocols and potential pitfalls",
        "Limited recourse in case of platform hacks or security incidents",
      ],
      overRegulationCons: [
        "Excessive regulations stifling innovation and hindering DeFi development",
        "Higher compliance costs limiting the accessibility of DeFi products",
        "Slowing down the introduction of new features and functionalities",
        "Potential displacement of development activities to more permissive jurisdictions",
      ],
      underRegulationCons: [
        "Proliferation of insecure DeFi platforms and protocols",
        "Lack of standardized security practices leading to increased risks",
        "Difficulty in addressing disputes and liabilities arising from vulnerabilities",
        "Undermining public trust and confidence in DeFi due to frequent security incidents",
      ],
      existingSolutions: [
        "Decentralized oracle networks with medianized, manipulation-resistant feeds",
        "Circuit breakers and rate limits capping single-exploit damage",
        "Real-time threat monitoring (Forta-class) watching live protocol state",
      ],
      regulation: [
        {
          instrument: "Treasury DeFi illicit finance risk assessment",
          jurisdiction: "US",
          status: "guidance",
          year: "2023",
          note: "The US government's first systematic map of DeFi risk — analysis, not yet rules.",
        },
        {
          instrument: "IOSCO DeFi policy recommendations",
          jurisdiction: "Global",
          status: "guidance",
          year: "2023",
          note: "Nine recommendations for regulating DeFi by economic function rather than legal form.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Contagion propagating through composable protocols with no circuit breaker between them",
        "Oracle and bridge dependencies concentrating risk invisible to end users",
        "No entity is responsible for the security of the composition, only its parts",
      ],
      consumerRisks: [
        "Cascading liquidations across protocols during volatility",
        "Bridge custody: 'wrapped' assets are claims on whatever secures the bridge",
        "Flash-loan-assembled attacks exploiting interactions no single audit covered",
      ],
      overRegulationCons: [
        "Forcing each protocol to gate its integrators ends permissionless composability — DeFi's core property",
      ],
      underRegulationCons: [
        "Oracle manipulation and flash-loan attacks recur with no market-conduct deterrent",
        "Systemically important dependencies (oracles, bridges) face no resilience standards",
      ],
      existingSolutions: [
        "TWAP and multi-source pricing making manipulation capital-prohibitive",
        "Isolated risk markets containing failures instead of socializing them",
        "On-chain insurance and coverage markets pricing protocol risk publicly",
      ],
      regulation: [
        {
          instrument: "CLARITY Act DeFi provisions",
          jurisdiction: "US",
          status: "proposed",
          year: "2025",
          note: "Non-custodial protocol exemptions would formalize that composition risk is addressed by disclosure, not intermediary licensing.",
        },
      ],
    },
  },
  {
    id: "defi-standards-auditor",
    title: "DeFi Architecture Standards / Auditor",
    icon: "/images/defi2.png",
    scope:
      "This row applies to creating standards for the DeFi Stack and its Architecture, and for future DeFi Interopability Auditors.",
    related: [{ label: "Auditor Liability", href: "/blog/auditorliability" }],
    incidents: [
      {
        name: "ERC-777 reentrancy incidents",
        year: "2020",
        note: "A newer token standard's callback hooks enabled reentrancy against integrations built for ERC-20 assumptions — standards interaction as an attack surface.",
      },
      {
        name: "Unlimited-approval drains",
        year: "ongoing",
        note: "The default infinite-allowance pattern turns one phished signature into a full wallet drain — a standards-level flaw no single protocol can fix.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "No recognized body sets or certifies DeFi interoperability and security standards",
        "Auditor opinions carry no defined professional liability or accountability",
      ],
      consumerRisks: [
        "Exposure to unaudited DeFi protocols leading to financial losses",
        "Lack of transparency in DeFi platform operations",
        "Potential manipulation through algorithmic biases",
        "Insufficient due diligence on DeFi projects",
      ],
      overRegulationCons: [
        "Imposing high compliance costs for new entrants",
        "Slowing down DeFi development and iteration",
        "Potential migration of projects to more permissive jurisdictions",
      ],
      underRegulationCons: [
        "Lack of standardized security practices in DeFi",
        "Vulnerability to fraudulent schemes targeting users",
        "Difficulty in resolving cross-border disputes",
        "Undermining public trust in DeFi",
      ],
      existingSolutions: [
        "Hardened standard implementations (SafeERC20, audited vault standards like ERC-4626)",
        "EIP-2612 permit signatures replacing risky unlimited approvals",
        "Security-scoring services publishing comparable protocol review grades",
      ],
      regulation: [
        {
          instrument: "NIST / ISO blockchain standards efforts",
          jurisdiction: "US / Global",
          status: "guidance",
          year: "ongoing",
          note: "General blockchain standards exist; none yet certify DeFi architecture or auditor competence.",
        },
        {
          instrument: "Auditor Liability framework (draft)",
          jurisdiction: "Crypto Policy Center",
          status: "proposed",
          year: "2024",
          note: "This organization's proposal for a professional accountability body — the standards gap this row documents.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "De-facto standards are set through informal open processes (EIPs) with no accountable authority",
        "Standards flaws propagate to every implementing protocol simultaneously",
      ],
      consumerRisks: [
        "Unlimited token approvals turning one bad signature into a total drain",
        "Incompatible standard implementations causing silent integration failures",
      ],
      overRegulationCons: [
        "Government-mandated standards would ossify slower than open processes evolve, freezing yesterday's flaws in place",
      ],
      underRegulationCons: [
        "Known-dangerous patterns (infinite approvals) persist as defaults for years",
        "No recall or deprecation mechanism retires flawed standards from live use",
      ],
      existingSolutions: [
        "The EIP/ERC process itself: open, adversarial, reference-implementation-driven standardization",
        "ERC-4626 unifying vault behavior so audits and integrations transfer across protocols",
        "Wallet-level allowance dashboards and auto-revocation tooling",
      ],
      regulation: [
        {
          instrument: "Open standards process (EIP/ERC)",
          jurisdiction: "Global — self-regulatory",
          status: "guidance",
          year: "ongoing",
          note: "The functioning model of decentralized standard-setting regulators could recognize rather than replace.",
        },
      ],
    },
  },
  {
    id: "fiat-access",
    title: "Fiat Onboarding / Offboarding Access",
    icon: "/images/fiat.png",
    scope:
      "This row applies to protocols providing users access to onboard and offboard between fiat and crypto.",
    incidents: [
      {
        name: "FTX/Alameda bank-access fraud",
        year: "2022",
        note: "Customer fiat routed through misrepresented bank accounts — the on/off-ramp was where the fraud physically lived.",
      },
      {
        name: "Debanking wave ('Chokepoint 2.0')",
        year: "2023–25",
        note: "Crypto firms and founders lost banking access industry-wide; by 2025 the restrictive supervisory guidance behind it was withdrawn.",
      },
    ],
    centralized: {
      governmentConcerns: [
        "Fiat ramps are the primary AML/KYC chokepoint between banking and crypto",
        "Unlicensed money transmission through informal ramp operators",
        "Tax visibility at the exact moment crypto converts to fiat",
      ],
      consumerRisks: [
        "Exposure to potential legal consequences for non-compliant or anonymous transactions",
        "Risks associated with offloading blockchain assets to fiat without proper documentation",
        "Lack of investor protections and due diligence when converting assets to fiat",
        "Potential vulnerability to scams or fraudulent intermediaries operating in the fiat-crypto space",
      ],
      overRegulationCons: [
        "Imposing high compliance costs and barriers for new entrants",
        "Slowing down the development of user-friendly and efficient fiat onboarding/offboarding solutions",
        "Potential hindrance to financial inclusion due to stringent regulations",
      ],
      underRegulationCons: [
        "Lack of standardized security and quality practices in fiat-crypto intermediaries",
        "Vulnerability to fraudulent schemes targeting users seeking fiat access",
        "Difficulty in addressing cross-border disputes and regulatory challenges",
        "Potential exposure to money laundering and other illicit activities",
        "Not ensuring a fair competitive landscape",
      ],
      existingSolutions: [
        "Travel-rule messaging networks moving originator data between regulated ramps",
        "Chain-analytics screening at the ramp — the practical enforcement point for the whole stack",
        "Regulated stablecoin rails (post-GENIUS) giving banks a compliant on/off-ramp instrument",
      ],
      regulation: [
        {
          instrument: "FinCEN MSB registration + state MTLs",
          jurisdiction: "US",
          status: "enacted",
          year: "2013–",
          note: "The longest-standing crypto regulation: ramps are money transmitters, full stop, since the 2013 FinCEN guidance.",
        },
        {
          instrument: "GENIUS Act",
          jurisdiction: "US",
          status: "enacted",
          year: "2025",
          note: "Licensed payment stablecoins give banks and fintechs a clear, regulated bridge asset between fiat and crypto.",
        },
        {
          instrument:
            "Federal banking agencies withdraw restrictive crypto guidance",
          jurisdiction: "US",
          status: "guidance",
          year: "2025",
          note: "Fed, FDIC, and OCC rescinded the notification/pre-approval regime behind debanking; OCC reaffirmed custody authority.",
        },
        {
          instrument: "MiCA CASP fiat-exchange services",
          jurisdiction: "EU",
          status: "enacted",
          year: "2024",
          note: "Fiat-crypto exchange is a licensed CASP activity with passporting across member states.",
        },
      ],
    },
    decentralized: {
      governmentConcerns: [
        "Peer-to-peer trades clear entirely outside the licensed ramp perimeter",
        "Cash-for-crypto meetups and informal networks are invisible to AML reporting",
        "Individual P2P traders may unknowingly qualify as unlicensed money transmitters",
      ],
      consumerRisks: [
        "In-person cash trades carry physical robbery risk",
        "P2P escrow scams and payment-reversal fraud (bank chargebacks against irreversible crypto)",
        "No dispute resolution once a trade leaves the escrow window",
      ],
      overRegulationCons: [
        "Criminalizing informal peer exchange harms the unbanked users who depend on it most",
        "Prosecuting individual P2P traders as money transmitters criminalizes conduct banks perform daily",
      ],
      underRegulationCons: [
        "Laundering migrates to exactly these uncovered channels as licensed ramps tighten",
        "Victims of P2P fraud have no regulator to complain to",
      ],
      existingSolutions: [
        "On-chain escrow with reputation systems and staged release",
        "Stablecoin settlement reducing the cash-meetup element entirely",
        "Decentralized arbitration services resolving P2P disputes by bonded jurors",
      ],
      regulation: [
        {
          instrument:
            "Unlicensed money transmission prosecutions of P2P traders",
          jurisdiction: "US",
          status: "enforcement",
          year: "ongoing",
          note: "Individual LocalBitcoins-style traders have been prosecuted under §1960 — the sharp edge of ramp regulation touching individuals.",
        },
      ],
    },
  },
]

/** Legend order, labels, and meaning for the assessment statuses. */
export const BRM_STATUS_META: {
  status: BrmAssessmentStatus
  label: string
  description: string
}[] = [
  {
    status: "regulated",
    label: "Regulated",
    description: "An enacted framework squarely covers this cell",
  },
  {
    status: "partial",
    label: "Partially addressed",
    description: "Some coverage exists; major questions remain open",
  },
  {
    status: "contested",
    label: "Contested",
    description: "Status is being decided in courts or pending legislation",
  },
  {
    status: "gap",
    label: "Unaddressed",
    description: "No meaningful regime exists",
  },
]

/**
 * Per-cell regulatory-coverage assessments, keyed `layerId:side`.
 * Revise alongside the instruments they summarize.
 */
export const brmAssessments: Record<string, BrmAssessment> = {
  "electricity:centralized": {
    status: "partial",
    note: "Energy permitting and disclosure rules exist in pockets (NY, EU, AR), but nothing coherently ties grid policy to consensus load.",
  },
  "electricity:decentralized": {
    status: "gap",
    note: "Community generation powering validators sits outside utility, securities, and crypto regimes alike.",
  },
  "settlement:centralized": {
    status: "partial",
    note: "Property-law clarity (UCC 12) and the EU pilot regime exist; payment-system treatment of sequencers is unresolved.",
  },
  "settlement:decentralized": {
    status: "contested",
    note: "CLARITY's maturity test would define public settlement layers; until it passes, classification stays open.",
  },
  "node-validator:centralized": {
    status: "partial",
    note: "Custodial staking is governed by enforcement history and staff guidance, not statute.",
  },
  "node-validator:decentralized": {
    status: "contested",
    note: "Validator neutrality survived the Tornado cycle in court, but no affirmative protection exists.",
  },
  "consensus-computation:centralized": {
    status: "partial",
    note: "Energy-side rules touch industrial mining; the securities question is answered only by staff guidance.",
  },
  "consensus-computation:decentralized": {
    status: "gap",
    note: "Independent mining is declared lawful in guidance and otherwise unaddressed.",
  },
  "consensus-capabilities:centralized": {
    status: "partial",
    note: "The custodial/protocol staking line is drawn by a settlement and a staff statement, not law.",
  },
  "consensus-capabilities:decentralized": {
    status: "gap",
    note: "Protocol staking has guidance at most; liquid staking tokens remain a gray zone.",
  },
  "consensus-voting:centralized": {
    status: "partial",
    note: "Wyoming's DAO forms give voting mechanisms legal wrappers; nothing governs the conduct of the votes themselves.",
  },
  "consensus-voting:decentralized": {
    status: "gap",
    note: "On-chain governance attacks fall under no market-conduct regime anywhere.",
  },
  "transaction:centralized": {
    status: "regulated",
    note: "Travel-rule, the EU TFR, and broker reporting comprehensively cover intermediary transactions.",
  },
  "transaction:decentralized": {
    status: "contested",
    note: "Privacy tooling and P2P transfers sit in live legal conflict: the Tornado cycle, the mixing NPRM, and the broker-rule repeal.",
  },
  "onchain-data-storage:centralized": {
    status: "partial",
    note: "GDPR applies but its erasure right cannot be executed on-chain; supervisory guidance is only now emerging.",
  },
  "onchain-data-storage:decentralized": {
    status: "gap",
    note: "Operatorless replication of illegal or personal data has no workable regime anywhere.",
  },
  "asset-stablecoins:centralized": {
    status: "regulated",
    note: "GENIUS and MiCA make this the most comprehensively regulated cell in the matrix.",
  },
  "asset-stablecoins:decentralized": {
    status: "contested",
    note: "Issuer-shaped statutes don't map onto issuerless designs; the EU effectively bars them and US treatment is under study.",
  },
  "asset-fungible-tokens:centralized": {
    status: "partial",
    note: "Rulings and guidance sketch the securities line; the statutory framework (CLARITY) is still pending.",
  },
  "asset-fungible-tokens:decentralized": {
    status: "contested",
    note: "No-promoter tokens lack any statutory home; fraud law is the only settled edge.",
  },
  "asset-nfts:centralized": {
    status: "partial",
    note: "Enforcement drew the securities edge and MiCA excludes true NFTs; no affirmative framework exists.",
  },
  "asset-nfts:decentralized": {
    status: "gap",
    note: "Permissionless minting, royalties, and IP enforcement are unaddressed.",
  },
  "exchange:centralized": {
    status: "regulated",
    note: "MiCA licenses EU venues end-to-end; the US relies on AML law plus enforcement while CLARITY pends.",
  },
  "exchange:decentralized": {
    status: "contested",
    note: "DEX status is defined mostly by dropped investigations and an undefined MiCA exclusion.",
  },
  "protocol:centralized": {
    status: "partial",
    note: "Admin-keyed protocols face Data Act duties and money-transmission analysis; no tailored regime exists.",
  },
  "protocol:decentralized": {
    status: "contested",
    note: "Immutable code's legal status is being set by courts (Van Loon), not legislatures.",
  },
  "application:centralized": {
    status: "partial",
    note: "Custodial apps slot into MSB/CASP regimes; disclosure standards are absent.",
  },
  "application:decentralized": {
    status: "contested",
    note: "Front-end liability is the ecosystem's live boundary dispute; the broker-rule repeal settled one piece of it.",
  },
  "permanent-storage:centralized": {
    status: "partial",
    note: "Hosting law (DSA, DMCA) reaches gateways and pinning services, awkwardly.",
  },
  "permanent-storage:decentralized": {
    status: "gap",
    note: "Operatorless permanence breaks every hosting-law assumption; nothing addresses it.",
  },
  "internet-browser:centralized": {
    status: "gap",
    note: "No fitness, security, or disclosure standard governs wallet-bearing browsers — the gap our wallet bill targets.",
  },
  "internet-browser:decentralized": {
    status: "gap",
    note: "Extension wallets are vetted only by store policies that counterfeits repeatedly pass.",
  },
  "developer:centralized": {
    status: "partial",
    note: "Prosecution memos and case law bound liability loosely; no accreditation or standards regime exists.",
  },
  "developer:decentralized": {
    status: "contested",
    note: "Developer liability for published code is being litigated case by case (Pertsev, Storm).",
  },
  "language-auditor:centralized": {
    status: "gap",
    note: "No jurisdiction licenses smart-contract auditors or sets audit standards — the matrix's clearest gap.",
  },
  "language-auditor:decentralized": {
    status: "gap",
    note: "Contest-based community review operates with no accountability framework at all.",
  },
  "defi-architecture-security:centralized": {
    status: "partial",
    note: "Risk assessments and IOSCO recommendations map the terrain; binding rules don't exist yet.",
  },
  "defi-architecture-security:decentralized": {
    status: "gap",
    note: "Composability risk has no regime and no responsible entity.",
  },
  "defi-standards-auditor:centralized": {
    status: "gap",
    note: "Standards bodies for DeFi architecture don't exist; audit opinions carry no defined liability.",
  },
  "defi-standards-auditor:decentralized": {
    status: "gap",
    note: "The EIP process works, but nothing formally recognizes or backstops it.",
  },
  "fiat-access:centralized": {
    status: "regulated",
    note: "MSB/MTL and MiCA regimes plus GENIUS rails make ramps the most enforced perimeter in crypto.",
  },
  "fiat-access:decentralized": {
    status: "contested",
    note: "Individual P2P traders face §1960 prosecutions while the perimeter's edges stay undefined.",
  },
}

/** Look up a cell's assessment. */
export function getBrmAssessment(
  layerId: string,
  side: BrmSide
): BrmAssessment | undefined {
  return brmAssessments[`${layerId}:${side}`]
}

/** Coarse jurisdiction groups used by the explorer's filter. */
export type BrmJurisdictionGroup = "us" | "eu" | "other"

export function jurisdictionMatches(
  jurisdiction: string,
  group: BrmJurisdictionGroup
): boolean {
  const isUs = jurisdiction.includes("US")
  const isEu = jurisdiction.includes("EU")
  if (group === "us") return isUs
  if (group === "eu") return isEu
  return !isUs && !isEu
}

/** Source repository for the contribution flow. */
export const BRM_REPO_URL = "https://github.com/CryptoPolicyDAO/cryptopolicy"

/** Prefilled GitHub issue URL for suggesting an addition to a cell. */
export function brmContributionUrl(layer: BrmLayer, side?: BrmSide): string {
  const cellPath = side ? `/matrix/${layer.id}/${side}` : `/matrix/${layer.id}`
  const title = `BRM: ${layer.title}${side ? ` (${side})` : ""}`
  const body = [
    `**Cell:** ${layer.title}${side ? ` — ${side}` : ""}`,
    `**Link:** ${siteConfig.url}${cellPath}`,
    "",
    "**Suggested addition or correction:**",
    "",
    "",
    "**Sources:**",
    "",
  ].join("\n")
  return `${BRM_REPO_URL}/issues/new?title=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(body)}`
}

/** Look up a layer by its id. */
export function getBrmLayer(id: string): BrmLayer | undefined {
  return brmLayers.find((layer) => layer.id === id)
}

/**
 * Layers arranged for outline/reading views: standalone layers stay single,
 * grouped sub-layers (Consensus, Asset) nest under their group title.
 */
export function brmOutline(): {
  title: string
  layers: BrmLayer[]
}[] {
  const outline: { title: string; layers: BrmLayer[] }[] = []
  for (const layer of brmLayers) {
    const groupTitle = layer.group ?? layer.title
    const last = outline[outline.length - 1]
    if (last && layer.group && last.title === layer.group) {
      last.layers.push(layer)
    } else {
      outline.push({ title: groupTitle, layers: [layer] })
    }
  }
  return outline
}
