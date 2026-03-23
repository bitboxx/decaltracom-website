import { ChartBarIcon } from '@/components/icons/chart-bar-icon'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'
import { ClockIcon } from '@/components/icons/clock-icon'
import { DocumentIcon } from '@/components/icons/document-icon'
import { FingerprintIcon } from '@/components/icons/fingerprint-icon'
import { LightBulbIcon } from '@/components/icons/light-bulb-icon'
import ProductModulePage from './ProductModulePage'

export default function MemoGeneratorPage() {
  return (
    <ProductModulePage
      eyebrow="DecAltra Memo Generator"
      headline="Generate decision-ready memos without rebuilding the process around the tool."
      subheadline={
        <p>
          Assemble fully customisable memos with integrated financials, risk ratings, analysis, and AI-generated
          narratives across every section.
        </p>
      }
      benefitsEyebrow="Why Memo Generator"
      benefitsHeadline="Produce better memos faster, with reviewability built in."
      benefitsSubheadline={
        <p>
          Memo Generator turns fragmented analysis into a structured output your committees recognize, while preserving
          status tracking, traceability, and team control.
        </p>
      }
      benefits={[
        {
          icon: <ClockIcon />,
          headline: 'Reduce drafting time',
          subheadline: <p>Cut manual assembly work by bringing data, analysis, and narratives into one coordinated workflow.</p>,
        },
        {
          icon: <LightBulbIcon />,
          headline: 'Keep narratives consistent',
          subheadline: <p>Generate high-quality section drafts that follow your templates, tone, and decision framework.</p>,
        },
        {
          icon: <CheckmarkIcon />,
          headline: 'Support review workflows',
          subheadline: <p>Track status, handoffs, and approvals so memo production stays organized across the full process.</p>,
        },
      ]}
      workflowHeading="From approved analysis to committee-ready output."
      workflowDescription={
        <p>
          Memo Generator orchestrates the last mile of decision preparation by turning structured inputs into a polished
          and reviewable memo package.
        </p>
      }
      workflowSteps={[
        { stat: '1', text: 'Bring in integrated financials, risk views, supporting analysis, and your template structure.' },
        { stat: '2', text: 'Generate section narratives, populate memo content, and track progress across contributors.' },
        { stat: '3', text: 'Review outputs, validate traceability, and finalize a decision-ready package for committee.' },
      ]}
      capabilitiesEyebrow="Capabilities"
      capabilitiesHeadline="Everything needed to move from analysis to final memo."
      capabilitiesSubheadline={
        <p>
          Purpose-built for customisable templates, narrative generation, review workflows, and source-backed output.
        </p>
      }
      capabilities={[
        {
          icon: <DocumentIcon />,
          headline: 'Fully customisable templates',
          subheadline: <p>Match your existing memo structures instead of forcing teams into a generic document format.</p>,
        },
        {
          icon: <ChartBarIcon />,
          headline: 'Integrated analysis inputs',
          subheadline: <p>Bring financial spreading, risk ratings, and supporting analysis together in a single output workflow.</p>,
        },
        {
          icon: <LightBulbIcon />,
          headline: 'AI-generated narratives',
          subheadline: <p>Draft consistent content across sections while leaving analysts and reviewers in full control.</p>,
        },
        {
          icon: <FingerprintIcon />,
          headline: 'Traceable, reviewable output',
          subheadline: <p>Keep every conclusion tied back to sources and calculations with workflow status visible along the way.</p>,
        },
      ]}
      ctaHeadline="Ready to speed up memo production?"
      ctaSubheadline={
        <p>See how DecAltra can help your team generate decision-ready memos with more speed, structure, and confidence.</p>
      }
    />
  )
}
