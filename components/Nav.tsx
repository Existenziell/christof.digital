'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { Bars4Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

type NavLink = { name: string; url: string }
type NavSection = { label: string; url: string; children: NavLink[] }

const sections: NavSection[] = [
  {
    label: 'Software Engineer',
    url: '/software-engineer',
    children: [
      { name: 'Projects', url: '/software-engineer/projects' },
      { name: 'Playground', url: '/software-engineer/playground' },
    ],
  },
  {
    label: 'Teacher/Mentor',
    url: '/teacher-mentor',
    children: [
      { name: 'Yoga', url: '/teacher-mentor/yoga' },
      { name: 'Tech', url: '/teacher-mentor/tech' },
      { name: 'Languages', url: '/teacher-mentor/languages' },
    ],
  },
  {
    label: 'About',
    url: '/about',
    children: [
      { name: 'CV', url: '/about/cv' },
    ],
  },
]

function isPathInSection(pathname: string | null, section: NavSection): boolean {
  if (!pathname) return false
  return pathname === section.url || pathname.startsWith(section.url + '/')
}

function isLinkActive(pathname: string | null, url: string): boolean {
  if (!pathname) return false
  return pathname === url || pathname.startsWith(url + '/')
}

export default function Nav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [expandedMobileSections, setExpandedMobileSections] = useState<Set<string>>(new Set())
  const navRef = useRef<HTMLElement>(null)

  const rootActive = pathname === '/'

  function closeMobileMenu() {
    setIsOpen(false)
    setExpandedMobileSections(new Set())
  }

  function openMobileMenu() {
    const current = sections.find((s) => isPathInSection(pathname, s))
    if (current) setExpandedMobileSections(new Set([current.url]))
    setIsOpen(true)
  }

  // Close dropdown on click outside or Escape
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDropdown(null)
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenDropdown(null)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  function toggleMobileSection(sectionUrl: string) {
    setExpandedMobileSections((prev) => {
      const next = new Set(prev)
      if (next.has(sectionUrl)) next.delete(sectionUrl)
      else next.add(sectionUrl)
      return next
    })
  }

  return (
    <nav ref={navRef} className='w-full flex flex-col' id='nav' aria-label='Main'>
      <ul className='desktop-nav hidden md:flex z-20 gap-2 items-center flex-wrap'>
        <li className={rootActive ? 'active-nav' : 'nav'}>
          <Link href='/' className='px-4 py-2 block'>{`Root`}</Link>
        </li>
        {sections.map((section) => {
          const sectionActive = pathname === section.url || isPathInSection(pathname, section)
          const hasChildren = section.children.length > 0
          const isDropdownOpen = openDropdown === section.url

          if (hasChildren) {
            return (
              <li
                key={section.label}
                className={`relative ${sectionActive ? 'active-nav' : 'nav'}`}
                onMouseEnter={() => setOpenDropdown(section.url)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type='button'
                  onClick={() => setOpenDropdown(isDropdownOpen ? null : section.url)}
                  className='px-4 py-2 flex items-center gap-1 w-full text-left'
                  aria-expanded={isDropdownOpen}
                  aria-haspopup='true'
                  aria-controls={`nav-menu-${section.url.replace(/\//g, '-')}`}
                  id={`nav-trigger-${section.url.replace(/\//g, '-')}`}
                >
                  {section.label}
                  <ChevronDownIcon className={`h-4 w-4 shrink-0 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <ul
                  id={`nav-menu-${section.url.replace(/\//g, '-')}`}
                  role='menu'
                  aria-labelledby={`nav-trigger-${section.url.replace(/\//g, '-')}`}
                  className={`nav-dropdown absolute left-0 top-full mt-1 min-w-[180px] rounded-sm border-2 border-cta bg-brand dark:bg-brand-dark shadow-lg z-30 py-1 ${isDropdownOpen ? 'block' : 'hidden'}`}
                >
                  <li role='none'>
                    <Link href={section.url} role='menuitem' className='px-4 py-2 block nav hover:text-cta' onClick={() => setOpenDropdown(null)}>
                      Overview
                    </Link>
                  </li>
                  {section.children.map((link) => (
                    <li key={link.url} role='none'>
                      <Link
                        href={link.url}
                        role='menuitem'
                        className={`px-4 py-2 block ${isLinkActive(pathname, link.url) ? 'active-nav' : 'nav'} hover:text-cta`}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          }
          return (
            <li key={section.label} className={sectionActive ? 'active-nav' : 'nav'}>
              <Link href={section.url} className='px-4 py-2 block'>{section.label}</Link>
            </li>
          )
        })}
      </ul>
      <div className='block md:hidden z-20'>
        <button
          type='button'
          onClick={() => (isOpen ? closeMobileMenu() : openMobileMenu())}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
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
            <Link href='/' onClick={closeMobileMenu} className={rootActive ? 'active-nav' : 'nav'}>
              Root
            </Link>
          </li>
          {sections.map((section) => {
            const sectionActive = pathname === section.url || isPathInSection(pathname, section)
            const hasChildren = section.children.length > 0
            const isExpanded = expandedMobileSections.has(section.url)

            if (hasChildren) {
              return (
                <li key={section.label}>
                  <button
                    type='button'
                    onClick={() => toggleMobileSection(section.url)}
                    className={`nav w-full flex items-center justify-center gap-1 py-2 md:py-8 text-2xl md:text-4xl ${sectionActive ? 'active-nav' : ''}`}
                    aria-expanded={isExpanded}
                  >
                    {section.label}
                    <ChevronDownIcon className={`h-6 w-6 shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  {isExpanded && (
                    <ul className='pl-4 pb-2'>
                      <li>
                        <Link
                          href={section.url}
                          onClick={closeMobileMenu}
                          className={pathname === section.url ? 'active-nav nav' : 'nav'}
                        >
                          Overview
                        </Link>
                      </li>
                      {section.children.map((link) => (
                        <li key={link.url}>
                          <Link
                            href={link.url}
                            onClick={closeMobileMenu}
                            className={isLinkActive(pathname, link.url) ? 'active-nav nav' : 'nav'}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            }
            return (
              <li key={section.label}>
                <Link
                  href={section.url}
                  onClick={closeMobileMenu}
                  className={sectionActive ? 'active-nav' : 'nav'}
                >
                  {section.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </nav>
  )
}
