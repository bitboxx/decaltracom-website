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
          <FooterCategory title="Products">
            <FooterLink href="/products/financial-spreading">Financial Spreading</FooterLink>
            <FooterLink href="/products/risk-rating">Risk Rating</FooterLink>
            <FooterLink href="/products/memo-generator">Memo Generator</FooterLink>
          </FooterCategory>
          <FooterCategory title="Company">
            <FooterLink href="/about">About</FooterLink>
          </FooterCategory>
          <FooterCategory title="Legal">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          </FooterCategory>
        </>
      }
      fineprint={`\u00A9 ${new Date().getFullYear()} DecAltra B.V.`}
    />
  )
}
