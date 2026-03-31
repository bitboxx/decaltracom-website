import {
  FooterCategory,
  FooterLink,
  FooterWithLinkCategories,
} from '@/components/sections/footer-with-link-categories'
import { productsPagesEnabled } from '@/lib/site-config'

export default function Footer() {
  return (
    <FooterWithLinkCategories
      id="footer"
      links={
        <>
          {productsPagesEnabled ? (
            <FooterCategory title="Products">
              <li className="pt-1 text-xs font-semibold uppercase tracking-[0.16em] text-mist-500 underline decoration-mist-300 underline-offset-4">
                Decision modules
              </li>
              <FooterLink href="/products/financial-spreading">Financial Spreading</FooterLink>
              <FooterLink href="/products/risk-rating">Risk Rating</FooterLink>
              <FooterLink href="/products/memo-generator">Memo Generator</FooterLink>
              <li className="pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-mist-500 underline decoration-mist-300 underline-offset-4">
                Foundation
              </li>
              <FooterLink href="/products/decaltra-platform">DecAltra Platform</FooterLink>
            </FooterCategory>
          ) : null}
          <FooterCategory title="Company">
            <FooterLink href="/about#about">About DecAltra</FooterLink>
            <FooterLink href="/about#team">The team</FooterLink>
          </FooterCategory>
          <FooterCategory title="Legal">
            <FooterLink href="/terms-of-use">Terms of use</FooterLink>
            <FooterLink href="/privacy-policy">Privacy policy</FooterLink>
            <FooterLink href="/cookie-policy">Cookie policy</FooterLink>
            <FooterLink href="/vulnerability-disclosure">Vulnerability disclosure</FooterLink>
          </FooterCategory>
        </>
      }
      fineprint={`\u00A9 ${new Date().getFullYear()} DecAltra B.V.`}
    />
  )
}
