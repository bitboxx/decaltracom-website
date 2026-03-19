import type { ComponentProps } from 'react'
import { Section } from '../elements/section'

export function ChallengeSolutionTwoColumn(props: ComponentProps<typeof Section>) {
  return (
    <Section {...props}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-mist-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm/6 font-semibold uppercase tracking-[0.14em] text-mist-500">The challenge</p>
              <h3 className="font-display text-3xl/9 font-medium tracking-tight text-mist-950">
                Financial institutions operate in increasingly complex environments.
              </h3>
            </div>
            <div className="space-y-4 text-base/7 text-mist-700">
              <p>
                Decision processes often rely on fragmented data, manual analysis, and workflows that do not meet the
                speed of modern markets.
              </p>
              <div>
                <p>As a result:</p>
                <ul className="mt-3 space-y-2 pl-5 marker:text-mist-500 list-disc">
                  <li>critical decisions take longer than they should</li>
                  <li>analysis is difficult to scale consistently</li>
                  <li>valuable opportunities can be missed</li>
                </ul>
              </div>
              <p>
                The quality and speed of decisions made by capital providers determine whether growth opportunities are
                realised or lost.
              </p>
            </div>
          </div>
        </article>
        <article className="rounded-3xl border border-mist-200 bg-mist-950 p-8 shadow-sm">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm/6 font-semibold uppercase tracking-[0.14em] text-mist-300">Our solution</p>
              <h3 className="font-display text-3xl/9 font-medium tracking-tight text-white">DecAltra decision infrastructure</h3>
            </div>
            <div className="space-y-4 text-base/7 text-mist-300">
              <p>
                Our product suite integrates data, governance frameworks, and AI directly into decision workflows -
                enabling professionals to move faster while maintaining full control and accountability.
              </p>
              <div>
                <p>DecAltra helps organizations:</p>
                <ul className="mt-3 space-y-2 pl-5 marker:text-mist-400 list-disc">
                  <li>integrate internal and external data sources</li>
                  <li>generate transparent, explainable insights</li>
                  <li>improve speed, quality, and consistency of decisions</li>
                </ul>
              </div>
              <p>AI supports judgment. Financial professionals remain in control.</p>
            </div>
          </div>
        </article>
      </div>
    </Section>
  )
}
