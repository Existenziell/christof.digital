'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'

const mainLinks: { label: string; url: string }[] = [
  { label: 'Software Engineer', url: '/software-engineer' },
  { label: 'Teacher/Mentor', url: '/teacher-mentor' },
  { label: 'About', url: '/about' },
]

function isPathInSection(pathname: string | null, url: string): boolean {
  if (!pathname) return false
  return pathname === url || pathname.startsWith(url + '/')
}

export default function Nav() {
  const pathname = usePathname()
  const rootActive = pathname === '/'

  return (
    <nav className='w-full flex flex-col' id='nav' aria-label='Main'>
      <ul className='desktop-nav hidden md:flex z-20 gap-2 items-center flex-wrap'>
        <li className={rootActive ? 'active-nav' : 'nav'}>
          <Link href='/' className='px-4 py-2 block'>
            Root
          </Link>
        </li>
        {mainLinks.map(({ label, url }) => (
          <li key={url} className={isPathInSection(pathname, url) ? 'active-nav' : 'nav'}>
            <Link href={url} className='px-4 py-2 block'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <MobileNav
        mainLinks={mainLinks}
        pathname={pathname}
        isPathInSection={isPathInSection}
      />
    </nav>
  )
}
