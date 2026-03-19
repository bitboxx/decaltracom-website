import { CheckmarkIcon } from '@/components/icons/checkmark-icon'
import { ChatBubbleCircleEllipsisIcon } from '@/components/icons/chat-bubble-circle-ellipsis-icon'
import { ClockIcon } from '@/components/icons/clock-icon'
import { FingerprintIcon } from '@/components/icons/fingerprint-icon'
import { ShieldExclamationIcon } from '@/components/icons/shield-exclamation-icon'
import { SlidersIcon } from '@/components/icons/sliders-icon'
import ProductModulePage from './ProductModulePage'

export default function RiskRatingPage() {
  return (
    <ProductModulePage
      eyebrow="DecAltra Risk Rating"
      headline="Automated risk assessments with transparency through your models."
      subheadline={
        <p>
          Combine quantitative and qualitative factors in one explainable workflow, so your team keeps control over
          the inputs, logic, and results.
        </p>
      }
      benefitsEyebrow="Why Risk Rating"
      benefitsHeadline="Consistency, speed, and full visibility into model-driven decisions."
      benefitsSubheadline={
        <p>
          Risk Rating helps institutions operationalize their frameworks with transparent automation rather than black-box outputs.
        </p>
      }
      benefits={[
        {
          icon: <ClockIcon />,
          headline: 'Accelerate first-pass assessments',
          subheadline: <p>Move faster on recurring cases while keeping reviewers focused on the cases that need judgment.</p>,
        },
        {
          icon: <FingerprintIcon />,
          headline: 'Explain every outcome',
          subheadline: <p>Keep a clear line from model output back to assumptions, ratios, and source-backed evidence.</p>,
        },
        {
          icon: <CheckmarkIcon />,
          headline: 'Stay in control',
          subheadline: <p>Use automation to support decisions without giving up oversight over inputs, overrides, and approval logic.</p>,
        },
      ]}
      workflowHeading="From data and judgment to a governed risk view."
      workflowDescription={
        <p>
          Risk Rating brings your models, analyst inputs, and validation controls into one transparent rating workflow.
        </p>
      }
      workflowSteps={[
        { stat: '1', text: 'Pull in quantitative metrics, qualitative context, and policy-defined model inputs.' },
        { stat: '2', text: 'Run rating logic with explainable scoring, validation checks, and editable assumptions.' },
        { stat: '3', text: 'Review the result, trace the drivers, and carry the approved rating into downstream decision steps.' },
      ]}
      capabilitiesEyebrow="Capabilities"
      capabilitiesHeadline="Built for explainable, institution-specific risk workflows."
      capabilitiesSubheadline={
        <p>Support your own rating frameworks with configurable inputs, AI-supported context, and strong governance.</p>
      }
      capabilities={[
        {
          icon: <ShieldExclamationIcon />,
          headline: 'Quantitative + qualitative factors',
          subheadline: <p>Combine hard metrics with contextual judgment in a single rating view rather than disconnected processes.</p>,
        },
        {
          icon: <ChatBubbleCircleEllipsisIcon />,
          headline: 'AI-supported qualitative inputs',
          subheadline: <p>Speed up narrative and contextual assessment while keeping analysts in charge of the final evaluation.</p>,
        },
        {
          icon: <SlidersIcon />,
          headline: 'Editable model inputs',
          subheadline: <p>Adjust assumptions, apply validation checks, and see exactly how changes affect the rating outcome.</p>,
        },
        {
          icon: <FingerprintIcon />,
          headline: 'Full traceability',
          subheadline: <p>Track every result back to data, ratios, source material, and the model path used to generate it.</p>,
        },
      ]}
      ctaHeadline="Want more transparent automated risk ratings?"
      ctaSubheadline={
        <p>Talk to DecAltra about bringing explainable, governed risk assessment into your existing workflow.</p>
      }
    />
  )
}
