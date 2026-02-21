'use client'

import Link from 'next/link'
import { PanelExpandIcon, XIcon } from '@/components/Icons'
import type { MobileNavProps } from '@/types'
import { useToggle } from '@/hooks/useToggle'

export default function MobileNav({
  mainLinks,
  pathname,
  isPathInSection,
}: MobileNavProps) {
  const [isOpen, toggleMenu, setOpen] = useToggle(false)
  const closeMobileMenu = () => setOpen(false)
  const rootActive = pathname === '/'

  return (
    <div className='block md:hidden z-20'>
      <button
        type='button'
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {!isOpen ? (
          <PanelExpandIcon className="h-8 w-8 p-0 m-0 text-header-fg hover:text-cta transition-all" />
        ) : (
          <XIcon className="h-8 w-8 p-0 m-0 text-header-fg hover:text-cta transition-all" />
        )}
      </button>
      {isOpen && (
        <ul className='mobile-nav absolute left-0 right-0 w-full md:hidden pt-20 z-10 bg-header-bg text-header-fg h-screen'>
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
