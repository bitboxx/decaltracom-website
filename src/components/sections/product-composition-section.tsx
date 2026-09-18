import { type ComponentProps, type ReactNode } from 'react';

import { Section } from '../elements/section';
import { ArrowNarrowRightIcon } from '../icons/arrow-narrow-right-icon';
import { ChartBarIcon } from '../icons/chart-bar-icon';
import { ChartLineIcon } from '../icons/chart-line-icon';
import { ChartPieCircleIcon } from '../icons/chart-pie-circle-icon';
import { ChatBubbleCircleEllipsisIcon } from '../icons/chat-bubble-circle-ellipsis-icon';
import { CheckmarkIcon } from '../icons/checkmark-icon';
import { ClipboardIcon } from '../icons/clipboard-icon';
import { CogIcon } from '../icons/cog-icon';
import { DocumentIcon } from '../icons/document-icon';
import { FingerprintIcon } from '../icons/fingerprint-icon';
import { GitBranchIcon } from '../icons/git-branch-icon';
import { HardDriveIcon } from '../icons/hard-drive-icon';
import { TargetIcon } from '../icons/target-icon';

type ModuleCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  status?: string;
  selected?: boolean;
};

function Tag({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${className}`}
    >
      {children}
    </span>
  );
}

function ModuleCard({
  icon,
  title,
  description,
  href,
  ctaLabel,
  status,
  selected = false,
}: ModuleCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-mist-950 motion-reduce:transform-none motion-reduce:transition-none ${
        selected
          ? 'border-mist-950 bg-mist-950 text-white shadow-lg shadow-mist-950/10'
          : 'border-mist-200 bg-white text-mist-950 shadow-sm hover:border-mist-400'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
              selected
                ? 'border-white/15 bg-white/10 text-white'
                : 'border-mist-200 bg-mist-100 text-mist-700'
            }`}
          >
            {icon}
          </div>
          <h3 className="font-display text-xl/7 font-medium tracking-tight">
            {title}
          </h3>
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
      <div className="mt-5 flex flex-1 flex-col">
        <p
          className={`mb-6 text-sm/6 ${selected ? 'text-mist-300' : 'text-mist-600'}`}
        >
          {description}
        </p>
        {href && ctaLabel ? (
          <a
            href={href}
            className={`mt-auto inline-flex min-h-11 max-w-full items-center justify-center gap-3 self-start rounded-full border px-5 py-2.5 text-sm/5 font-semibold transition-colors duration-200 after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none motion-reduce:transition-none ${
              selected
                ? 'border-white text-white group-focus-within:bg-white group-focus-within:text-mist-950 group-hover:bg-white group-hover:text-mist-950'
                : 'border-mist-950 text-mist-950 group-focus-within:bg-mist-950 group-focus-within:text-white group-hover:bg-mist-950 group-hover:text-white'
            }`}
          >
            <span>{ctaLabel}</span>
            <ArrowNarrowRightIcon className="size-4 shrink-0 transition-transform duration-200 group-focus-within:translate-x-1 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function ProductCompositionSection(
  props: ComponentProps<typeof Section>
) {
  return (
    <Section
      headline="Your intelligent decision infrastructure"
      subheadline="From company identification and source data to financial spreading, analytics, memo, approval, and portfolio monitoring. Every decision strengthens your institutional intelligence so you can continue to make better decisions over time."
      headerClassName="max-w-7xl"
      {...props}
    >
      <ProductCompositionCard />
    </Section>
  );
}

export function ProductCompositionCard() {
  return (
    <div className="-mt-4 overflow-hidden rounded-2xl border border-mist-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(237,242,244,0.92))] shadow-sm sm:-mt-8">
      <div className="p-6 sm:p-8">
        <h3 className="mb-6 font-display text-2xl/8 font-medium tracking-tight text-mist-950">
          Credit Decisioning
        </h3>
        <div className="space-y-6 rounded-2xl border border-mist-200 bg-mist-100 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-2xl/8 font-medium tracking-tight text-mist-950">
                Three connected modules. Traceable decision records.
              </h3>
            </div>
            <Tag className="border-mist-300 bg-white text-mist-700">
              Modules
            </Tag>
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            <ModuleCard
              icon={<ChartLineIcon className="size-4" />}
              title="Financial spreading"
              description="Extract financial statements into reviewed financials and credit-adjusted metrics"
              href="/credit-decisioning/financial-spreading"
              ctaLabel="Explore Financial spreading"
            />
            <ModuleCard
              icon={<ChartBarIcon className="size-4" />}
              title="Analytics"
              description="Generate transparent quantitative and qualitative scores from your credit models"
              href="/credit-decisioning/analytics"
              ctaLabel="Explore Analytics"
            />
            <ModuleCard
              icon={<DocumentIcon className="size-4" />}
              title="Memo"
              description="Assemble preceding analyses and additional evidence into decision-ready credit memos"
              href="/credit-decisioning/memo"
              ctaLabel="Explore Memo"
            />
          </div>
        </div>

        <div className="h-3" />

        <div className="space-y-4 rounded-2xl bg-mist-950 p-6 text-white">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <div>
                <h3 className="font-display text-2xl/8 font-medium tracking-tight">
                  The governed foundation
                </h3>
              </div>
            </div>
            <Tag className="border-white/15 bg-white/10 text-white">
              Always included
            </Tag>
          </div>

          <div className="grid gap-2.5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <ChartPieCircleIcon className="size-4" />
                Portfolio monitoring
              </div>
              <p className="mt-2 text-base/7 text-mist-400">
                Monitor companies, risks, and activities across the portfolio
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <TargetIcon className="size-4" />
                Entity identification
              </div>
              <p className="mt-2 text-base/7 text-mist-400">
                Accurately identify the companies that matter to you
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <HardDriveIcon className="size-4" />
                Documents & data
              </div>
              <p className="mt-2 text-base/7 text-mist-400">
                Centralize documents and internal & external data
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <ChatBubbleCircleEllipsisIcon className="size-4" />
                Insights assistant
              </div>
              <p className="mt-2 text-base/7 text-mist-400">
                Receive evidence-backed answers about your portfolio
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <CogIcon className="size-4" />
                Admin settings
              </div>
              <p className="mt-2 text-base/7 text-mist-400">
                Manage users and configure the platform to your needs
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <ClipboardIcon className="size-4" />
                Action Centre
              </div>
              <p className="mt-2 text-base/7 text-mist-400">
                Keep on top of your and the team's tasks
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <FingerprintIcon className="size-4" />
                Access management
              </div>
              <p className="mt-2 text-base/7 text-mist-400">
                Give every team and person the right level of access
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <GitBranchIcon className="size-4" />
                Workflows & processes
              </div>
              <p className="mt-2 text-base/7 text-mist-400">
                Configure how work should get done
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm/6 text-mist-600">
          Credit Decisioning is currently available in English, German, French,
          Spanish or Dutch.
        </p>
      </div>
    </div>
  );
}
