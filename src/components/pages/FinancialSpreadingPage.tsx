import { ChartBarIcon } from '@/components/icons/chart-bar-icon'
import { ChartLineIcon } from '@/components/icons/chart-line-icon'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'
import { ClockIcon } from '@/components/icons/clock-icon'
import { DocumentIcon } from '@/components/icons/document-icon'
import { FingerprintIcon } from '@/components/icons/fingerprint-icon'
import { LightBulbIcon } from '@/components/icons/light-bulb-icon'
import ProductModulePage from './ProductModulePage'

export default function FinancialSpreadingPage() {
  return (
    <ProductModulePage
      eyebrow="DecAltra Financial Spreading"
      headline="Financial spreading built for speed, control, and traceability."
      subheadline={
        <p>
          Transform financial statements and raw financials into structured, validated and explainable analysis that
          fits directly into your decision workflow.
        </p>
      }
      benefitsEyebrow="Why Financial Spreading"
      benefitsHeadline="Automate the heavy lifting without losing confidence."
      benefitsSubheadline={
        <p>
          Financial Spreading helps your team move from raw documents to usable analysis faster, while preserving full
          transparency over every ratio, adjustment, and conclusion.
        </p>
      }
      benefits={[
        {
          icon: <ClockIcon />,
          headline: 'Compress manual analysis time',
          subheadline: <p>Reduce hours of manual spreading work so analysts can focus on interpretation and decisions.</p>,
        },
        {
          icon: <CheckmarkIcon />,
          headline: 'Validate as you go',
          subheadline: <p>Surface consistency checks and exceptions early so issues are caught before they reach committee.</p>,
        },
        {
          icon: <FingerprintIcon />,
          headline: 'Keep every number traceable',
          subheadline: <p>Maintain a clear link from output back to the original source documents and calculations.</p>,
        },
      ]}
      workflowHeading="From statements to validated analysis."
      workflowDescription={
        <p>
          Financial Spreading structures the workflow in clear stages, so your team can move faster without sacrificing
          reviewability.
        </p>
      }
      workflowSteps={[
        { stat: '1', text: 'Ingest statements, supporting files, and historical financials into one structured workflow.' },
        { stat: '2', text: 'Standardise line items, generate ratios, and run automated validation checks across the dataset.' },
        { stat: '3', text: 'Review benchmark views, trace every output, and move clean analysis into downstream modules.' },
      ]}
      capabilitiesEyebrow="Capabilities"
      capabilitiesHeadline="Built for the way financial teams actually work."
      capabilitiesSubheadline={
        <p>
          Purpose-built tools for multi-year analysis, validation, benchmarking, and source-backed review.
        </p>
      }
      capabilities={[
        {
          icon: <ChartLineIcon />,
          headline: 'Multi-year ratio models',
          subheadline: <p>Build structured financial views across periods with ratios ready for review and comparison.</p>,
        },
        {
          icon: <LightBulbIcon />,
          headline: 'Automated validation checks',
          subheadline: <p>Highlight inconsistencies, gaps, and anomalies before they slow down credit or investment workflows.</p>,
        },
        {
          icon: <ChartBarIcon />,
          headline: 'Peer benchmarking',
          subheadline: <p>Compare entities against relevant peers using tables and visuals that make outliers easy to spot.</p>,
        },
        {
          icon: <DocumentIcon />,
          headline: 'Source-linked outputs',
          subheadline: <p>Keep full traceability from every calculation and model output back to underlying source material.</p>,
        },
      ]}
      ctaHeadline="Ready to modernize financial spreading?"
      ctaSubheadline={
        <p>See how DecAltra can help your team produce faster, cleaner, and more explainable financial analysis.</p>
      }
    />
  )
}
