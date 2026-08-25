"use client"

import {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react"
import Image from "next/image"
import Link from "next/link"

import {
  BRM_CATEGORIES,
  BRM_STATUS_META,
  brmContributionUrl,
  brmLayers,
  getBrmAssessment,
  getBrmLayer,
  jurisdictionMatches,
  type BrmAssessmentStatus,
  type BrmCellContent,
  type BrmIncident,
  type BrmJurisdictionGroup,
  type BrmLayer,
  type BrmPin,
  type BrmRegulation,
  type BrmSide,
} from "./brm-data"
import "./matrix.css"

function pinUrl(pin: BrmPin | null): string {
  if (!pin) return "/matrix"
  if (pin.side === "scope") return `/matrix/${pin.layerId}`
  return `/matrix/${pin.layerId}/${pin.side}`
}

function pinFromPath(pathname: string): BrmPin | null {
  const parts = pathname.split("/").filter(Boolean)
  if (parts[0] !== "matrix" || parts.length < 2) return null
  const layer = getBrmLayer(parts[1])
  if (!layer) return null
  if (parts.length === 2) return { layerId: layer.id, side: "scope" }
  if (parts[2] === "centralized" || parts[2] === "decentralized")
    return { layerId: layer.id, side: parts[2] }
  return null
}

function samePin(a: BrmPin | null, b: BrmPin | null): boolean {
  return a?.layerId === b?.layerId && a?.side === b?.side
}

function CellSections({ content }: { content: BrmCellContent }) {
  return (
    <>
      {BRM_CATEGORIES.map((cat) => (
        <section className="brm-section" key={cat.key}>
          <h3>{cat.label}</h3>
          <ul>
            {content[cat.key].length > 0 ? (
              content[cat.key].map((item) => <li key={item}>{item}</li>)
            ) : (
              <li className="brm-open-note">
                Open — this section needs contribution
              </li>
            )}
          </ul>
        </section>
      ))}
    </>
  )
}

function RegulationSection({ regulation }: { regulation?: BrmRegulation[] }) {
  if (!regulation || regulation.length === 0) return null
  return (
    <section className="brm-section">
      <h3>Current regulatory landscape</h3>
      <ul className="brm-reg-list">
        {regulation.map((r) => (
          <li key={r.instrument}>
            <span className="brm-reg-status" data-status={r.status}>
              {r.status}
            </span>
            <strong>{r.instrument}</strong> — {r.jurisdiction}, {r.year}.{" "}
            {r.note}
          </li>
        ))}
      </ul>
    </section>
  )
}

function IncidentsSection({ incidents }: { incidents?: BrmIncident[] }) {
  if (!incidents || incidents.length === 0) return null
  return (
    <section className="brm-section">
      <h3>Notable incidents</h3>
      <ul>
        {incidents.map((i) => (
          <li key={i.name}>
            <strong>
              {i.name} ({i.year})
            </strong>{" "}
            — {i.note}
          </li>
        ))}
      </ul>
    </section>
  )
}

function MatrixPanel({
  active,
  isPinned,
  onClose,
  onPinSide,
  closeRef,
}: {
  active: BrmPin
  isPinned: boolean
  onClose: () => void
  onPinSide: (side: BrmSide) => void
  closeRef: React.RefObject<HTMLButtonElement>
}) {
  const layer = getBrmLayer(active.layerId)
  if (!layer) return null
  const isScope = active.side === "scope"

  const handleBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (isPinned && e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className={`brm-panel ${isPinned ? "is-pinned" : "is-preview"}`}
      onMouseDown={handleBackdrop}
      role={isPinned ? "dialog" : undefined}
      aria-modal={isPinned ? true : undefined}
      aria-label={
        isScope ? `${layer.title} scope` : `${layer.title}, ${active.side}`
      }
      data-panel-card-container=""
    >
      <div className="brm-panel-card">
        <div className="brm-panel-head">
          <h2 className="brm-panel-title">
            {layer.title}
            {!isScope && <span className="brm-side-badge">{active.side}</span>}
          </h2>
          {isPinned && (
            <button
              type="button"
              className="brm-close"
              onClick={onClose}
              ref={closeRef}
              aria-label="Close details"
            >
              ✕
            </button>
          )}
        </div>
        <p className="brm-panel-scope">{layer.scope}</p>
        {active.side !== "scope" &&
          (() => {
            const assessment = getBrmAssessment(layer.id, active.side)
            if (!assessment) return null
            const meta = BRM_STATUS_META.find(
              (s) => s.status === assessment.status
            )
            return (
              <p className="brm-assessment">
                <span
                  className="brm-reg-status"
                  data-status={assessment.status}
                >
                  {meta?.label ?? assessment.status}
                </span>
                {assessment.note}
              </p>
            )
          })()}
        {active.side === "scope" ? (
          isPinned && (
            <>
              <div className="brm-side-buttons">
                <a
                  href={`/matrix/${layer.id}/centralized`}
                  onClick={(e) => {
                    e.preventDefault()
                    onPinSide("centralized")
                  }}
                >
                  View centralized details
                </a>
                <a
                  href={`/matrix/${layer.id}/decentralized`}
                  onClick={(e) => {
                    e.preventDefault()
                    onPinSide("decentralized")
                  }}
                >
                  View decentralized details
                </a>
              </div>
              <IncidentsSection incidents={layer.incidents} />
            </>
          )
        ) : (
          <>
            <CellSections content={layer[active.side]} />
            {isPinned && (
              <>
                <RegulationSection regulation={layer[active.side].regulation} />
                <IncidentsSection incidents={layer.incidents} />
              </>
            )}
          </>
        )}
        {isPinned && (
          <div className="brm-panel-footer">
            {layer.related?.map((r) => (
              <Link key={r.href} href={r.href}>
                {r.label}
              </Link>
            ))}
            <a
              href={brmContributionUrl(
                layer,
                active.side === "scope" ? undefined : active.side
              )}
              target="_blank"
              rel="noreferrer"
            >
              Suggest an addition (GitHub)
            </a>
            <Link href="/join">About contributing</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default function MatrixExplorer({
  initialPin = null,
}: {
  initialPin?: BrmPin | null
}) {
  const [pinned, setPinned] = useState<BrmPin | null>(initialPin)
  const [hovered, setHovered] = useState<BrmPin | null>(null)
  const [heatOn, setHeatOn] = useState(false)
  const [jurisdiction, setJurisdiction] = useState<
    BrmJurisdictionGroup | "all"
  >("all")
  const [statusFilter, setStatusFilter] = useState<BrmAssessmentStatus | null>(
    null
  )
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const toggleHeat = () => {
    setHeatOn((on) => {
      if (on) setStatusFilter(null)
      return !on
    })
  }

  const sideMatches = (layer: BrmLayer, side: BrmSide) => {
    const jurOk =
      jurisdiction === "all" ||
      (layer[side].regulation ?? []).some((r) =>
        jurisdictionMatches(r.jurisdiction, jurisdiction)
      )
    const statusOk =
      !statusFilter || getBrmAssessment(layer.id, side)?.status === statusFilter
    return jurOk && statusOk
  }
  const filtersActive = jurisdiction !== "all" || statusFilter !== null

  const applyPin = useCallback((pin: BrmPin | null, push = true) => {
    setPinned(pin)
    if (push && typeof window !== "undefined") {
      window.history.pushState(null, "", pinUrl(pin))
      if (pin) requestAnimationFrame(() => closeRef.current?.focus())
    }
  }, [])

  const close = useCallback(() => {
    applyPin(null)
    triggerRef.current?.focus()
  }, [applyPin])

  const toggleCell = (pin: BrmPin, e: MouseEvent<HTMLButtonElement>) => {
    if (samePin(pinned, pin)) {
      close()
    } else {
      triggerRef.current = e.currentTarget
      applyPin(pin)
    }
  }

  // Back/forward buttons drive the pinned state.
  useEffect(() => {
    const onPop = () => setPinned(pinFromPath(window.location.pathname))
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  // Escape closes; Tab cycles within the pinned panel.
  useEffect(() => {
    if (!pinned) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close()
        return
      }
      if (e.key === "Tab") {
        const card = document.querySelector(
          ".brm-panel.is-pinned .brm-panel-card"
        )
        if (!card) return
        const focusables = card.querySelectorAll<HTMLElement>("button, a[href]")
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        const current = document.activeElement
        if (e.shiftKey && current === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && current === last) {
          e.preventDefault()
          first.focus()
        } else if (!card.contains(current)) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [pinned, close])

  const active = pinned ?? hovered

  const cellProps = (pin: BrmPin, extraClass = "") => ({
    onMouseEnter: () => setHovered(pin),
    onMouseLeave: () => setHovered(null),
    onFocus: () => setHovered(pin),
    onBlur: () => setHovered(null),
    onClick: (e: MouseEvent<HTMLButtonElement>) => toggleCell(pin, e),
    "aria-haspopup": "dialog" as const,
    "aria-expanded": samePin(pinned, pin),
    className: `brm-cell${extraClass}${
      samePin(active, pin) ? " is-active" : ""
    }`,
  })

  return (
    <div className="brm-scope">
      <div className="brm-toolbar">
        <button
          type="button"
          className={`brm-toggle${heatOn ? " is-on" : ""}`}
          aria-pressed={heatOn}
          onClick={toggleHeat}
        >
          Regulatory heat map
        </button>
        <div
          className="brm-filter-group"
          role="group"
          aria-label="Filter by jurisdiction"
        >
          {(
            [
              ["all", "All jurisdictions"],
              ["us", "United States"],
              ["eu", "European Union"],
              ["other", "Global & other"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={`brm-filter${jurisdiction === value ? " is-on" : ""}`}
              aria-pressed={jurisdiction === value}
              onClick={() => setJurisdiction(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {heatOn && (
        <div className="brm-legend" aria-label="Regulatory status legend">
          {BRM_STATUS_META.map((s) => (
            <button
              key={s.status}
              type="button"
              className={`brm-legend-item${
                statusFilter === s.status ? " is-on" : ""
              }`}
              aria-pressed={statusFilter === s.status}
              title={`${s.description} — click to filter`}
              onClick={() =>
                setStatusFilter((cur) => (cur === s.status ? null : s.status))
              }
            >
              <span
                className="brm-legend-dot"
                data-status={s.status}
                aria-hidden="true"
              />
              {s.label}
            </button>
          ))}
        </div>
      )}
      <div className="brm-grid-header" aria-hidden="true">
        <span>Centralized</span>
        <span>Blockchain Layer</span>
        <span>Decentralized</span>
      </div>
      <div
        className="brm-grid"
        data-focus={active ? "on" : "off"}
        data-heat={heatOn ? "on" : "off"}
      >
        {brmLayers.map((layer) => {
          const dimCent = filtersActive && !sideMatches(layer, "centralized")
          const dimDec = filtersActive && !sideMatches(layer, "decentralized")
          return (
            <Fragment key={layer.id}>
              <button
                type="button"
                {...cellProps(
                  { layerId: layer.id, side: "centralized" },
                  dimCent ? " is-dimmed" : ""
                )}
                data-status={
                  heatOn
                    ? getBrmAssessment(layer.id, "centralized")?.status
                    : undefined
                }
                aria-label={`${layer.title} — centralized details`}
              >
                <span
                  className="brm-icon brm-icon-central"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                {...cellProps(
                  { layerId: layer.id, side: "scope" },
                  ` brm-cell-center${dimCent && dimDec ? " is-dimmed" : ""}`
                )}
                aria-label={`${layer.title} — layer scope`}
              >
                <Image
                  src={layer.icon}
                  alt=""
                  width={99}
                  height={99}
                  className="brm-icon-layer"
                />
                <span className="brm-cell-label">{layer.title}</span>
              </button>
              <button
                type="button"
                {...cellProps(
                  { layerId: layer.id, side: "decentralized" },
                  dimDec ? " is-dimmed" : ""
                )}
                data-status={
                  heatOn
                    ? getBrmAssessment(layer.id, "decentralized")?.status
                    : undefined
                }
                aria-label={`${layer.title} — decentralized details`}
              >
                <span
                  className="brm-icon brm-icon-decentral"
                  aria-hidden="true"
                />
              </button>
            </Fragment>
          )
        })}
      </div>
      {active && (
        <MatrixPanel
          active={active}
          isPinned={pinned !== null}
          onClose={close}
          onPinSide={(side) => applyPin({ layerId: active.layerId, side })}
          closeRef={closeRef}
        />
      )}
    </div>
  )
}
