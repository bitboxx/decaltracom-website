import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'

export default function Navbar() {
  return (
    <NavbarWithLinksActionsAndCenteredLogo
      id="navbar"
      links={
        <>
          <NavbarLink href="/services/meridian">Meridian</NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="#" className="sm:hidden">
            Log in
          </NavbarLink>
        </>
      }
      logo={
        <NavbarLogo href="/">
          <span className="text-xl font-display font-bold tracking-tight text-mist-950 dark:text-white">Veltrax</span>
        </NavbarLogo>
      }
      actions={
        <>
          <PlainButtonLink href="#" className="max-sm:hidden">
            Log in
          </PlainButtonLink>
          <ButtonLink href="#">Get started</ButtonLink>
        </>
      }
    />
  )
}
