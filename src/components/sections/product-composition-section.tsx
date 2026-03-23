import { type ComponentProps, type ReactNode } from 'react'
import { PlainButtonLink } from '../elements/button'
import { Section } from '../elements/section'
import { ArrowNarrowRightIcon } from '../icons/arrow-narrow-right-icon'
import { ChartLineIcon } from '../icons/chart-line-icon'
import { ChatBubbleCircleEllipsisIcon } from '../icons/chat-bubble-circle-ellipsis-icon'
import { CheckmarkIcon } from '../icons/checkmark-icon'
import { CpuIcon } from '../icons/cpu-icon'
import { DocumentIcon } from '../icons/document-icon'
import { ShieldExclamationIcon } from '../icons/shield-exclamation-icon'
import { SlidersIcon } from '../icons/sliders-icon'
import { SparklesIcon } from '../icons/sparkles-icon'

type ModuleCardProps = {
  icon: ReactNode
  title: string
  description: string
  href: string
  ctaLabel: string
  status?: string
  selected?: boolean
}

function Tag({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${className}`}
    >
      {children}
    </span>
  )
}

function ModuleCard({ icon, title, description, href, ctaLabel, status, selected = false }: ModuleCardProps) {
  return (
    <article
      className={`group rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
        selected
          ? 'border-mist-950 bg-mist-950 text-white shadow-lg shadow-mist-950/10'
          : 'border-mist-200 bg-white text-mist-950 shadow-sm hover:border-mist-400'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
              selected ? 'border-white/15 bg-white/10 text-white' : 'border-mist-200 bg-mist-100 text-mist-700'
            }`}
          >
            {icon}
          </div>
          <h3 className="font-display text-xl/7 font-medium tracking-tight">{title}</h3>
        </div>
        {selected ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white">
            <CheckmarkIcon className="size-3" />
            Selected
          </span>
        ) : status ? (
          <span className="rounded-full border border-mist-200 bg-mist-100 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-mist-600">
            {status}
          </span>
        ) : null}
      </div>
      <div className="mt-5 space-y-4">
        <p className={`text-sm/6 ${selected ? 'text-mist-300' : 'text-mist-600'}`}>{description}</p>
        <PlainButtonLink href={href} className={selected ? 'text-white hover:bg-white/10' : ''}>
          {ctaLabel} <ArrowNarrowRightIcon />
        </PlainButtonLink>
      </div>
    </article>
  )
}

export function ProductCompositionSection(props: ComponentProps<typeof Section>) {
  return (
    <Section
      eyebrow="Our solution"
      headline="Financial decision making infrastructure that adapts to you"
      headerClassName="max-w-4xl"
      subheadline={
        <p>
          Select the capabilities you need - they all operate within the DecAltra Platform, providing you with one
          consistent, governed and explainable financial decision making infastructure
        </p>
      }
      {...props}
    >
      <div className="-mt-4 overflow-hidden rounded-[2rem] border border-mist-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(237,242,244,0.92))] shadow-sm sm:-mt-8">
        <div className="p-6 sm:p-8">
          <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-500">Decision modules</p>
                <h3 className="font-display text-2xl/8 font-medium tracking-tight text-mist-950">
                  Modular capabilities. Seamless experience.
                </h3>
              </div>
              <Tag className="border-mist-300 bg-white text-mist-700">Select at least one</Tag>
            </div>

            <div className="grid gap-4 xl:grid-cols-3">
              <ModuleCard
                icon={<ChartLineIcon className="size-4" />}
                title="Financial Spreading"
                description="Transform financial statements and raw financials into structured, validated and explainable analysis."
                href="/products/financial-spreading"
                ctaLabel="Explore Financial Spreading"
              />
              <ModuleCard
                icon={<ShieldExclamationIcon className="size-4" />}
                title="Risk Rating"
                description="Generate automated risk assessments with full transparency through your models, so you keep control over the inputs and results"
                href="/products/risk-rating"
                ctaLabel="Explore Risk Rating"
              />
              <ModuleCard
                icon={<DocumentIcon className="size-4" />}
                title="Memo Generator"
                description="Assemble decision-ready memos with evidence, rationale, and a format your committees recognize"
                href="/products/memo-generator"
                ctaLabel="Explore Memo Generator"
              />
            </div>
          </div>

          <div className="h-3" />

          <div className="space-y-4 rounded-[1.6rem] bg-mist-950 p-5 text-white sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <div>
                  <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-300">Foundation</p>
                  <h3 className="font-display text-3xl/9 font-medium tracking-tight">DecAltra Platform</h3>
                </div>
              </div>
              <Tag className="border-white/15 bg-white/10 text-white">Always included</Tag>
            </div>

            <p className="text-sm/6 text-mist-300 lg:whitespace-nowrap">
              A unified foundation to monitor the portfolio, identify entities, integrate data, and align decisions
              with your internal frameworks
            </p>

            <div className="grid gap-2.5 md:grid-cols-2 xl:grid-cols-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <CpuIcon className="size-4" />
                  Portfolio visibility
                </div>
                <p className="mt-2 text-sm/6 text-mist-400">Portfolio-level visibility with drill-down to entity detail</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <SparklesIcon className="size-4" />
                  Entity identification
                </div>
                <p className="mt-2 text-sm/6 text-mist-400">Accurate entity identification, validation, and structuring</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <SlidersIcon className="size-4" />
                  Data ingestion
                </div>
                <p className="mt-2 text-sm/6 text-mist-400">Centralized ingestion of documents, financials, and internal data</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <ChatBubbleCircleEllipsisIcon className="size-4" />
                  Insight assistant
                </div>
                <p className="mt-2 text-sm/6 text-mist-400">Ask questions and surface insights from your portfolio and data</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <ShieldExclamationIcon className="size-4" />
                  Policy alignment
                </div>
                <p className="mt-2 text-sm/6 text-mist-400">Full alignment with internal policies, templates, and risk models</p>
              </div>
            </div>

            <PlainButtonLink href="/products/decaltra-platform" className="w-fit text-white hover:bg-white/10">
              Explore DecAltra Platform <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        </div>
      </div>
    </Section>
  )
}
