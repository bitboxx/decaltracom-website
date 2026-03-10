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
          <FooterCategory title="Services">
            <FooterLink href="/services/meridian">Meridian</FooterLink>
          </FooterCategory>
          <FooterCategory title="Company">
            <FooterLink href="/about">About</FooterLink>
          </FooterCategory>
          <FooterCategory title="Legal">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          </FooterCategory>
        </>
      }
      fineprint={`\u00A9 ${new Date().getFullYear()} Veltrax B.V.`}
    />
  )
}
