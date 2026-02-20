'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'

type MainLink = { label: string; url: string }

type MobileNavProps = {
  mainLinks: MainLink[]
  pathname: string | null
  isPathInSection: (pathname: string | null, url: string) => boolean
}

export default function MobileNav({
  mainLinks,
  pathname,
  isPathInSection,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const rootActive = pathname === '/'

  function closeMobileMenu() {
    setIsOpen(false)
  }

  return (
    <div className='block md:hidden z-20'>
      <button
        type='button'
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {!isOpen ? (
          <Bars4Icon className='h-12 w-12 p-0 m-0 text-brand-dark hover:text-cta dark:text-brand dark:hover:text-cta transition-all' />
        ) : (
          <XMarkIcon className='h-12 w-12 p-0 m-0 text-brand-dark hover:text-cta dark:text-brand dark:hover:text-cta transition-all' />
        )}
      </button>
      {isOpen && (
        <ul className='mobile-nav absolute left-0 right-0 w-full md:hidden pt-20 z-10 bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand h-screen'>
          <li>
            <Link href='/' onClick={closeMobileMenu} className={rootActive ? 'active-nav' : 'nav'}>
              Root
            </Link>
          </li>
          {mainLinks.map(({ label, url }) => (
            <li key={url}>
              <Link
                href={url}
                onClick={closeMobileMenu}
                className={isPathInSection(pathname, url) ? 'active-nav' : 'nav'}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
