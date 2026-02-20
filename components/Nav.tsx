'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'

const projectPaths = ['/projects/ai', '/projects/api', '/projects/recording', '/projects/threejs', '/projects/svgs']

type NavLink = { name: string; url: string }
type NavSection = { label: string; url: string; children: NavLink[] }

const sections: NavSection[] = [
  {
    label: 'Software Engineer',
    url: '/software-engineer',
    children: [
      { name: 'Projects', url: '/projects' },
      { name: 'Playground', url: '/playground' },
    ],
  },
  {
    label: 'Teacher/Mentor',
    url: '/teacher-mentor',
    children: [],
  },
  {
    label: 'About',
    url: '/about',
    children: [
      { name: 'CV', url: '/about/cv' },
    ],
  },
]

function isInSoftwareEngineerSection(pathname: string | null): boolean {
  if (!pathname) return false
  return (
    pathname === '/software-engineer' ||
    pathname === '/projects' ||
    pathname === '/playground' ||
    projectPaths.some((p) => pathname === p || pathname.startsWith(p + '/'))
  )
}

function isInTeacherMentorSection(pathname: string | null): boolean {
  if (!pathname) return false
  return pathname === '/teacher-mentor' || pathname.startsWith('/teacher-mentor/')
}

function isInAboutSection(pathname: string | null): boolean {
  if (!pathname) return false
  return pathname === '/about' || pathname.startsWith('/about/')
}

function isSectionExpanded(pathname: string | null, section: NavSection): boolean {
  if (!pathname) return false
  switch (section.url) {
    case '/software-engineer':
      return isInSoftwareEngineerSection(pathname)
    case '/teacher-mentor':
      return isInTeacherMentorSection(pathname)
    case '/about':
      return isInAboutSection(pathname)
    default:
      return false
  }
}

function isProjectsActive(pathname: string | null): boolean {
  if (!pathname) return false
  return pathname === '/projects' || projectPaths.some((p) => pathname === p || pathname.startsWith(p + '/'))
}

function isLinkActive(pathname: string | null, url: string): boolean {
  if (!pathname) return false
  if (url === '/projects') return isProjectsActive(pathname)
  return pathname === url
}

export default function Nav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const rootActive = pathname === '/'

  const expandedSection = sections.find((s) => isSectionExpanded(pathname, s))

  return (
    <nav className='w-full flex flex-col' id='nav'>
      <ul className='desktop-nav hidden md:flex z-20 gap-2 items-center'>
        <li className={rootActive ? 'active-nav' : 'nav'}>
          <Link href='/' className='px-4 py-2 block'>{`// Root`}</Link>
        </li>
        {sections.map((section) => {
          const sectionActive = pathname === section.url
          return (
            <li key={section.label} className={sectionActive ? 'active-nav' : 'nav'}>
              <Link href={section.url} className='px-4 py-2 block'>{`// ${section.label}`}</Link>
            </li>
          )
        })}
      </ul>
      {expandedSection && expandedSection.children.length > 0 && (
        <ul className='desktop-nav hidden md:flex z-20 gap-2 items-center mt-1 pl-4 border-l-2 border-cta'>
          {expandedSection.children.map((link) => (
            <li key={link.url} className={isLinkActive(pathname, link.url) ? 'active-nav' : 'nav'}>
              <Link href={link.url} className='px-4 py-2 block'>{`// ${link.name}`}</Link>
            </li>
          ))}
        </ul>
      )}
      <div className='block md:hidden z-20'>
        <button type="button" onClick={() => setIsOpen(!isOpen)} aria-label='Open Mobile Navigation'>
          {!isOpen ? (
            <Bars4Icon className='h-12 w-12 p-0 m-0 text-brand-dark hover:text-cta dark:text-brand dark:hover:text-cta transition-all' />
          ) : (
            <XMarkIcon className='h-12 w-12 p-0 m-0 text-brand-dark hover:text-cta dark:text-brand dark:hover:text-cta transition-all' />
          )}
        </button>
      </div>
      {isOpen && (
        <ul className='mobile-nav absolute left-0 right-0 w-full md:hidden pt-20 z-10 bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand h-screen'>
          <li>
            <Link href='/' onClick={() => setIsOpen(false)} className={rootActive ? 'active-nav' : 'nav'}>
              Root
            </Link>
          </li>
          {sections.map((section) => {
            const expanded = isSectionExpanded(pathname, section)
            const sectionActive = pathname === section.url
            return (
              <li key={section.label}>
                <Link
                  href={section.url}
                  onClick={() => setIsOpen(false)}
                  className={sectionActive ? 'active-nav' : 'nav'}
                >
                  {section.label}
                </Link>
                {expanded && section.children.length > 0 && (
                  <ul className='pl-4 pb-2'>
                    {section.children.map((link) => (
                      <li key={link.url}>
                        <Link
                          href={link.url}
                          onClick={() => setIsOpen(false)}
                          className={isLinkActive(pathname, link.url) ? 'active-nav' : 'nav'}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </nav>
  )
}
