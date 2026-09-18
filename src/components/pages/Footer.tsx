import {
  FooterCategory,
  FooterLink,
  FooterWithLinkCategories,
} from '@/components/sections/footer-with-link-categories'

export default function Footer() {
  return (
    <FooterWithLinkCategories
      id="footer"
      links={
        <>
          <FooterCategory title="Product">
            <FooterLink href="/credit-decisioning">Credit Decisioning overview</FooterLink>
            <FooterLink href="/credit-decisioning/financial-spreading">Financial spreading</FooterLink>
            <FooterLink href="/credit-decisioning/analytics">Analytics</FooterLink>
            <FooterLink href="/credit-decisioning/memo">Memo</FooterLink>
          </FooterCategory>
          <FooterCategory title="Company">
            <FooterLink href="/about#about">About DecAltra</FooterLink>
            <FooterLink href="/about#team">The team</FooterLink>
            <FooterLink href="/contact">Contact us</FooterLink>
            <li className="text-mist-700">
              <button type="button" command="show-modal" commandfor="feedback-modal" className="cursor-pointer text-left hover:underline">Share feedback</button>
            </li>
          </FooterCategory>
          <FooterCategory title="Legal">
            <FooterLink href="/terms-of-use">Terms of use</FooterLink>
            <FooterLink href="/privacy-policy">Privacy policy</FooterLink>
            <FooterLink href="/cookie-policy">Cookie policy</FooterLink>
            <FooterLink href="/vulnerability-disclosure">Vulnerability disclosure</FooterLink>
          </FooterCategory>
        </>
      }
      fineprint={`\u00A9 ${new Date().getFullYear()} DecAltra`}
    />
  )
}
