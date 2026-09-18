export function CreditDecisioningBanner() {
  return (
    <section
      aria-label="From fragmented inputs to a governed credit decision"
      className="pb-12 sm:pb-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div>
          <svg
            viewBox="0 0 1600 560"
            role="img"
            aria-labelledby="decision-banner-title decision-banner-description"
            className="block h-auto w-full"
          >
            <title id="decision-banner-title">
              A governed credit decision process
            </title>
            <desc id="decision-banner-description">
              Financial reports, supporting documents, professional judgement,
              analytics, and policy converge into one governed credit decision
              flow and a decision-ready credit memo.
            </desc>
            <style>{`
              .decision-banner-card { fill: var(--color-mist-50); stroke: var(--color-mist-200); }
              .decision-banner-ink { fill: var(--color-mist-950); stroke: var(--color-mist-950); }
              .decision-banner-mid { fill: var(--color-mist-700); stroke: var(--color-mist-700); }
              .decision-banner-soft { fill: var(--color-mist-300); stroke: var(--color-mist-300); }
              .decision-banner-label { fill: var(--color-mist-950); font-size: 14px; font-weight: 700; letter-spacing: .12em; }
              .decision-banner-stage-label { fill: var(--color-mist-950); font-size: 17px; font-weight: 700; letter-spacing: .1em; }
              .decision-banner-stage-copy { fill: var(--color-mist-600); font-size: 16px; font-weight: 600; letter-spacing: .06em; }
              .decision-banner-governance-copy { fill: var(--color-mist-600); font-size: 16px; letter-spacing: .02em; }
              .decision-banner-copy { fill: var(--color-mist-600); font-size: 14px; letter-spacing: .02em; }
              .decision-banner-tiny { fill: var(--color-mist-500); font-size: 12px; letter-spacing: .05em; }
              .decision-banner-rail-label { fill: var(--color-mist-600); font-size: 15px; font-weight: 600; letter-spacing: .08em; }
              .decision-banner-engine { animation: decision-banner-pulse 4.5s ease-in-out infinite; transform-origin: 790px 266px; }
              @keyframes decision-banner-pulse { 0%, 100% { transform: scale(.94); opacity: .8; } 50% { transform: scale(1.04); opacity: 1; } }
              @media (prefers-reduced-motion: reduce) { .decision-banner-source, .decision-banner-engine, .decision-banner-memo { animation: none; } .decision-banner-dot { display: none; } }
            `}</style>

            <rect width="1600" height="560" fill="var(--color-mist-100)" />

            <g className="decision-banner-source">
              <rect
                className="decision-banner-card"
                x="44"
                y="62"
                width="264"
                height="82"
                rx="12"
              />
              <text className="decision-banner-label" x="56" y="90">
                FINANCIAL REPORTS
              </text>
              <text className="decision-banner-copy" x="68" y="114">
                Revenue&nbsp;&nbsp; 2,418.3
              </text>
              <text className="decision-banner-copy" x="68" y="132">
                EBITDA&nbsp;&nbsp;&nbsp; 312.8
              </text>
              <line
                className="decision-banner-soft"
                strokeWidth="2"
                x1="224"
                y1="108"
                x2="280"
                y2="108"
              />
              <line
                className="decision-banner-soft"
                strokeWidth="2"
                x1="224"
                y1="126"
                x2="266"
                y2="126"
              />
            </g>
            <g className="decision-banner-source">
              <rect
                className="decision-banner-card"
                x="44"
                y="162"
                width="264"
                height="70"
                rx="12"
              />
              <text className="decision-banner-label" x="56" y="190">
                SUPPORTING DOCUMENTS
              </text>
              <line
                className="decision-banner-soft"
                strokeWidth="2"
                x1="104"
                y1="208"
                x2="222"
                y2="208"
              />
              <line
                className="decision-banner-soft"
                strokeWidth="2"
                x1="104"
                y1="220"
                x2="264"
                y2="220"
              />
            </g>
            <g className="decision-banner-source">
              <rect
                className="decision-banner-card"
                x="44"
                y="250"
                width="264"
                height="70"
                rx="12"
              />
              <text className="decision-banner-label" x="56" y="278">
                PROFESSIONAL JUDGEMENTS
              </text>
              <circle cx="84" cy="292" r="6" fill="var(--color-mist-950)" />
              <path
                d="M72 310 C72 302, 77 298, 84 298 C91 298, 96 302, 96 310"
                fill="none"
                stroke="var(--color-mist-950)"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <circle cx="112" cy="292" r="6" fill="var(--color-mist-700)" />
              <path
                d="M100 310 C100 302, 105 298, 112 298 C119 298, 124 302, 124 310"
                fill="none"
                stroke="var(--color-mist-700)"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M142 303 C154 294, 166 312, 178 303 S202 294, 214 303 S238 312, 258 301"
                fill="none"
                stroke="var(--color-mist-700)"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </g>
            <g className="decision-banner-source">
              <rect
                className="decision-banner-card"
                x="44"
                y="338"
                width="264"
                height="70"
                rx="12"
              />
              <text className="decision-banner-label" x="56" y="366">
                ANALYTICS
              </text>
              <path
                d="M96 392 L124 380 L151 387 L180 368 L211 376 L240 359 L276 365"
                fill="none"
                stroke="var(--color-mist-700)"
                strokeWidth="2"
              />
              <line
                className="decision-banner-soft"
                strokeWidth="2"
                x1="96"
                y1="398"
                x2="278"
                y2="398"
              />
            </g>
            <g className="decision-banner-source">
              <rect
                className="decision-banner-card"
                x="44"
                y="426"
                width="264"
                height="70"
                rx="12"
              />
              <text className="decision-banner-label" x="56" y="454">
                POLICY & PROCESS
              </text>
              <circle className="decision-banner-ink" cx="94" cy="476" r="4" />
              <line
                className="decision-banner-soft"
                strokeWidth="2"
                x1="100"
                y1="476"
                x2="146"
                y2="476"
              />
              <circle className="decision-banner-mid" cx="152" cy="476" r="4" />
              <line
                className="decision-banner-soft"
                strokeWidth="2"
                x1="158"
                y1="476"
                x2="204"
                y2="476"
              />
              <circle
                className="decision-banner-soft"
                cx="210"
                cy="476"
                r="4"
              />
              <line
                className="decision-banner-soft"
                strokeWidth="2"
                x1="216"
                y1="476"
                x2="270"
                y2="476"
              />
            </g>

            <g fill="none" stroke="var(--color-mist-300)" strokeWidth="1.5">
              <path
                id="decision-flow-1"
                d="M330 104 C520 104, 610 220, 755 247"
              />
              <path
                id="decision-flow-2"
                d="M330 196 C520 196, 610 235, 755 255"
              />
              <path
                id="decision-flow-3"
                d="M330 286 C520 286, 610 260, 755 264"
              />
              <path
                id="decision-flow-4"
                d="M330 372 C520 372, 610 287, 755 273"
              />
              <path
                id="decision-flow-5"
                d="M330 460 C520 460, 610 314, 755 282"
              />
            </g>
            {[
              ['decision-flow-1', '5.5s', '0s', 'var(--color-mist-500)'],
              ['decision-flow-2', '6.1s', '-1.5s', 'var(--color-mist-600)'],
              ['decision-flow-3', '5.8s', '-3s', 'var(--color-mist-700)'],
              ['decision-flow-4', '6.4s', '-4.2s', 'var(--color-mist-600)'],
              ['decision-flow-5', '6.8s', '-2.2s', 'var(--color-mist-500)'],
            ].map(([path, duration, begin, color]) => (
              <circle
                key={path}
                className="decision-banner-dot"
                r="3.5"
                fill={color}
              >
                <animateMotion
                  dur={duration}
                  begin={begin}
                  repeatCount="indefinite"
                >
                  <mpath href={`#${path}`} />
                </animateMotion>
              </circle>
            ))}

            <text
              className="decision-banner-stage-label"
              x="791"
              y="180"
              textAnchor="middle"
            >
              YOUR CREDIT DECISION PROCESS
            </text>
            <text
              className="decision-banner-stage-copy"
              x="791"
              y="204"
              textAnchor="middle"
            >
              AI-assisted
            </text>
            <g className="decision-banner-engine">
              <rect
                x="770"
                y="222"
                width="42"
                height="88"
                rx="21"
                fill="var(--color-mist-950)"
              />
              <circle cx="791" cy="266" r="5" fill="white" />
            </g>
            <text
              className="decision-banner-stage-copy"
              x="990"
              y="248"
              textAnchor="middle"
            >
              Efficient · Traceable · Accountable
            </text>

            <path
              d="M812 266 C930 266, 1055 266, 1172 266"
              fill="none"
              stroke="var(--color-mist-950)"
              strokeWidth="2"
            />
            <circle
              className="decision-banner-dot"
              r="4"
              fill="var(--color-mist-950)"
            >
              <animateMotion dur="4.6s" repeatCount="indefinite">
                <mpath href="#decision-rail" />
              </animateMotion>
            </circle>
            <circle
              className="decision-banner-dot"
              r="4"
              fill="var(--color-mist-950)"
            >
              <animateMotion dur="4.6s" begin="-2.3s" repeatCount="indefinite">
                <mpath href="#decision-rail" />
              </animateMotion>
            </circle>
            <path
              id="decision-rail"
              d="M812 266 C930 266, 1055 266, 1172 266"
              fill="none"
              stroke="none"
            />

            <g>
              <text
                className="decision-banner-stage-label"
                x="791"
                y="366"
                textAnchor="middle"
              >
                GOVERNED BY DESIGN
              </text>
              <text
                className="decision-banner-governance-copy"
                x="791"
                y="394"
                textAnchor="middle"
              >
                Evidence linked to outputs
              </text>
              <text
                className="decision-banner-governance-copy"
                x="791"
                y="416"
                textAnchor="middle"
              >
                Human review and approval
              </text>
              <text
                className="decision-banner-governance-copy"
                x="791"
                y="438"
                textAnchor="middle"
              >
                Consistent decision record
              </text>
            </g>

            <g className="decision-banner-memo">
              <text
                className="decision-banner-stage-label"
                x="1319"
                y="66"
                textAnchor="middle"
              >
                DECISION READY
              </text>
              <g aria-label="Stack of Credit Memos">
                <rect
                  x="1220"
                  y="92"
                  width="278"
                  height="282"
                  rx="14"
                  fill="var(--color-mist-50)"
                  stroke="var(--color-mist-400)"
                  strokeWidth="1.5"
                />
                <rect
                  x="1210"
                  y="98"
                  width="278"
                  height="282"
                  rx="14"
                  fill="white"
                  stroke="var(--color-mist-500)"
                  strokeWidth="1.5"
                />
                <rect
                  x="1200"
                  y="104"
                  width="278"
                  height="282"
                  rx="14"
                  fill="white"
                  stroke="var(--color-mist-600)"
                  strokeWidth="1.5"
                />
                <rect
                  x="1190"
                  y="110"
                  width="278"
                  height="282"
                  rx="14"
                  fill="white"
                  stroke="var(--color-mist-600)"
                  strokeWidth="1.5"
                />
              </g>
              <rect
                x="1180"
                y="116"
                width="278"
                height="282"
                rx="14"
                fill="white"
                stroke="var(--color-mist-950)"
                strokeWidth="1.5"
              />
              <text className="decision-banner-label" x="1208" y="150">
                CREDIT MEMO
              </text>
              <line
                className="decision-banner-soft"
                strokeWidth="2"
                x1="1208"
                y1="170"
                x2="1428"
                y2="170"
              />
              <text className="decision-banner-copy" x="1208" y="198">
                Senior secured loan
              </text>
              <text
                className="decision-banner-label"
                x="1428"
                y="198"
                textAnchor="end"
              >
                €25m
              </text>
              <text className="decision-banner-copy" x="1208" y="222">
                Internal Rating
              </text>
              <text
                className="decision-banner-label"
                x="1428"
                y="222"
                textAnchor="end"
              >
                BBB-
              </text>
              <text className="decision-banner-copy" x="1208" y="246">
                Decision
              </text>
              <text
                className="decision-banner-label"
                x="1428"
                y="246"
                textAnchor="end"
              >
                APPROVED
              </text>
              <line
                className="decision-banner-soft"
                strokeWidth="2"
                x1="1208"
                y1="268"
                x2="1428"
                y2="268"
              />
              <rect
                x="1208"
                y="291"
                width="190"
                height="6"
                rx="3"
                fill="var(--color-mist-300)"
              />
              <rect
                x="1208"
                y="310"
                width="214"
                height="6"
                rx="3"
                fill="var(--color-mist-200)"
              />
              <rect
                x="1208"
                y="329"
                width="177"
                height="6"
                rx="3"
                fill="var(--color-mist-200)"
              />
              <rect
                x="1208"
                y="348"
                width="204"
                height="6"
                rx="3"
                fill="var(--color-mist-200)"
              />
            </g>

            <g aria-label="Stay ahead by adapting faster">
              <text
                className="decision-banner-stage-copy"
                x="1180"
                y="450"
                textAnchor="start"
              >
                Strengthen institutional intelligence
              </text>
              <text
                className="decision-banner-label"
                x="1334"
                y="474"
                textAnchor="middle"
              >
                STAY AHEAD
              </text>
              <path
                d="M1220 524 C1292 522, 1368 534, 1448 546"
                fill="none"
                stroke="var(--color-mist-300)"
                strokeWidth="1.5"
              />
              <path
                d="M1220 534 C1290 531, 1370 544, 1448 556"
                fill="none"
                stroke="var(--color-mist-200)"
                strokeWidth="1.5"
              />
              <path
                d="M1220 536 C1290 533, 1370 519, 1448 488"
                fill="none"
                stroke="var(--color-mist-700)"
                strokeWidth="2.5"
              />
              <path
                id="competitive-trajectory"
                d="M1220 536 C1290 533, 1370 519, 1448 488"
                fill="none"
                stroke="none"
              />
              <circle cx="1448" cy="488" r="5" fill="var(--color-mist-950)" />
              <circle className="decision-banner-dot" r="4" fill="var(--color-mist-700)">
                <animateMotion dur="4.8s" repeatCount="indefinite">
                  <mpath href="#competitive-trajectory" />
                </animateMotion>
              </circle>
            </g>

            <line
              x1="396"
              y1="524"
              x2="1120"
              y2="524"
              stroke="var(--color-mist-200)"
              strokeWidth="1.5"
            />
            <text className="decision-banner-rail-label" x="472" y="546">
              FRAGMENTED INPUTS
            </text>
            <text className="decision-banner-rail-label" x="742" y="546">
              GOVERNED FLOW
            </text>
            <text className="decision-banner-rail-label" x="994" y="546">
              DECISION
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
