import { ChartLineIcon } from '@/components/icons/chart-line-icon'
import { ChatBubbleCircleEllipsisIcon } from '@/components/icons/chat-bubble-circle-ellipsis-icon'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { FingerprintIcon } from '@/components/icons/fingerprint-icon'
import { ShieldExclamationIcon } from '@/components/icons/shield-exclamation-icon'
import { SlidersIcon } from '@/components/icons/sliders-icon'
import { SparklesIcon } from '@/components/icons/sparkles-icon'
import ProductModulePage from './ProductModulePage'

export default function DecAltraPlatformPage() {
  return (
    <ProductModulePage
      eyebrow="DecAltra Platform"
      headline="A unified foundation for governed, explainable financial decision making."
      subheadline={
        <p>
          DecAltra Platform gives institutions one consistent layer to monitor portfolios, identify entities,
          integrate data, and align decision workflows with internal frameworks.
        </p>
      }
      benefitsEyebrow="Why the Platform"
      benefitsHeadline="The foundation that keeps every capability connected."
      benefitsSubheadline={
        <p>
          Rather than layering disconnected tools on top of scattered data, DecAltra Platform creates the shared
          infrastructure that your decision modules can operate on with consistency and control.
        </p>
      }
      benefits={[
        {
          icon: <CpuIcon />,
          headline: 'One governed foundation',
          subheadline: <p>Give every workflow a consistent operational layer instead of managing fragmented tooling across teams.</p>,
        },
        {
          icon: <SlidersIcon />,
          headline: 'Adaptable to your process',
          subheadline: <p>Fit the platform to your governance frameworks, templates, and approval structures rather than rebuilding around the software.</p>,
        },
        {
          icon: <FingerprintIcon />,
          headline: 'Explainability by design',
          subheadline: <p>Preserve transparency across inputs, logic, and outputs so users, auditors, and regulators can follow the process.</p>,
        },
      ]}
      workflowHeading="From fragmented inputs to one operational decision layer."
      workflowDescription={
        <p>
          DecAltra Platform connects the core ingredients of financial decision making so downstream modules can work
          from a common source of truth.
        </p>
      }
      workflowSteps={[
        { stat: '1', text: 'Monitor portfolio-level activity and drill down into entity-level detail where action is needed.' },
        { stat: '2', text: 'Identify, validate, and structure entities while centralizing documents, financials, and internal data.' },
        { stat: '3', text: 'Run decision workflows on top of governed data and policies that stay aligned with your internal frameworks.' },
      ]}
      capabilitiesEyebrow="Capabilities"
      capabilitiesHeadline="Core capabilities that make the platform work."
      capabilitiesSubheadline={
        <p>
          The platform combines portfolio visibility, entity intelligence, data ingestion, insight access, and policy
          alignment in one foundation.
        </p>
      }
      capabilities={[
        {
          icon: <ChartLineIcon />,
          headline: 'Portfolio visibility',
          subheadline: <p>See the portfolio at a high level and drill into individual entities when context or intervention is needed.</p>,
        },
        {
          icon: <SparklesIcon />,
          headline: 'Entity identification',
          subheadline: <p>Support accurate entity identification, validation, and structuring across complex data environments.</p>,
        },
        {
          icon: <SlidersIcon />,
          headline: 'Centralized data ingestion',
          subheadline: <p>Bring documents, financials, and internal data into one controlled foundation for downstream use.</p>,
        },
        {
          icon: <ChatBubbleCircleEllipsisIcon />,
          headline: 'Insight assistant',
          subheadline: <p>Ask natural-language questions and surface insights from your portfolio and underlying data.</p>,
        },
        {
          icon: <ShieldExclamationIcon />,
          headline: 'Policy alignment',
          subheadline: <p>Keep workflows aligned with internal policies, templates, and risk models from the start.</p>,
        },
      ]}
      ctaHeadline="Interested in the DecAltra Platform?"
      ctaSubheadline={
        <p>See how the platform can provide the foundation for faster, more consistent, and more explainable financial decisions.</p>
      }
    />
  )
}
