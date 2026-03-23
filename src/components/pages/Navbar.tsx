import { PlainButtonLink } from '@/components/elements/button'
import { ChevronIcon } from '@/components/icons/chevron-icon'
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
          <div className="relative hidden lg:block">
            <div className="group relative">
              <button className="inline-flex items-center gap-2 text-sm/7 font-medium text-mist-950">
                Products
                <ChevronIcon className="size-3 rotate-90 transition-transform group-hover:rotate-270" />
              </button>
              <div className="invisible absolute left-0 top-full z-20 mt-3 w-64 translate-y-2 rounded-3xl border border-mist-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-mist-500 underline decoration-mist-300 underline-offset-4">
                  Decision modules
                </div>
                <a
                  href="/products/financial-spreading"
                  className="block rounded-2xl px-4 py-3 text-sm/6 font-medium text-mist-950 transition hover:bg-mist-100"
                >
                  Financial Spreading
                </a>
                <a
                  href="/products/risk-rating"
                  className="block rounded-2xl px-4 py-3 text-sm/6 font-medium text-mist-950 transition hover:bg-mist-100"
                >
                  Risk Rating
                </a>
                <a
                  href="/products/memo-generator"
                  className="block rounded-2xl px-4 py-3 text-sm/6 font-medium text-mist-950 transition hover:bg-mist-100"
                >
                  Memo Generator
                </a>
                <div className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-mist-500 underline decoration-mist-300 underline-offset-4">
                  Foundation
                </div>
                <a
                  href="/products/decaltra-platform"
                  className="block rounded-2xl px-4 py-3 text-sm/6 font-medium text-mist-950 transition hover:bg-mist-100"
                >
                  DecAltra Platform
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:hidden">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">Decision modules</div>
            <NavbarLink href="/products/financial-spreading">Financial Spreading</NavbarLink>
            <NavbarLink href="/products/risk-rating">Risk Rating</NavbarLink>
            <NavbarLink href="/products/memo-generator">Memo Generator</NavbarLink>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">Foundation</div>
            <NavbarLink href="/products/decaltra-platform">DecAltra Platform</NavbarLink>
            <NavbarLink href="/about">About us</NavbarLink>
            <NavbarLink href="/contact">Contact us</NavbarLink>
          </div>
        </>
      }
      logo={
        <NavbarLogo href="/">
          <span className="text-xl font-display font-bold tracking-tight text-mist-950 dark:text-white">DecAltra</span>
        </NavbarLogo>
      }
      actions={
        <>
          <PlainButtonLink href="/about" className="max-sm:hidden">
            About us
          </PlainButtonLink>
          <PlainButtonLink href="/contact" className="max-sm:hidden">
            Contact us
          </PlainButtonLink>
        </>
      }
    />
  )
}
