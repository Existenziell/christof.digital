'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'

export type TabItem = { name: string; url: string; subTabs?: TabItem[] }

interface SectionTabsProps {
  tabs: TabItem[]
}

type VisibleTab = { tab: TabItem; level: 0 | 1 }

/** Flatten tabs for display: when pathname is under a tab with subTabs, include that tab then its subTabs. */
function getVisibleTabs(pathname: string | null, tabs: TabItem[]): VisibleTab[] {
  const out: VisibleTab[] = []
  for (const tab of tabs) {
    out.push({ tab, level: 0 })
    const inSection =
      pathname !== null &&
      (pathname === tab.url || pathname.startsWith(tab.url + '/'))
    if (inSection && tab.subTabs?.length) {
      for (const sub of tab.subTabs) out.push({ tab: sub, level: 1 })
    }
  }
  return out
}

function getActiveTabUrl(pathname: string | null, flatTabs: TabItem[]): string | null {
  if (!pathname) return null
  let best: string | null = null
  for (const tab of flatTabs) {
    const exact = pathname === tab.url
    const prefix = tab.url !== '/' && pathname.startsWith(tab.url + '/')
    if (exact || prefix) {
      if (!best || tab.url.length > best.length) best = tab.url
    }
  }
  return best
}

export default function SectionTabs({ tabs }: SectionTabsProps) {
  const pathname = usePathname()
  const visible = getVisibleTabs(pathname, tabs)
  const flatTabs = visible.map((v) => v.tab)
  const activeUrl = getActiveTabUrl(pathname, flatTabs)
  const navRef = useRef<HTMLElement>(null)
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
  })

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const active = nav.querySelector<HTMLAnchorElement>('[aria-current="page"]')
    const update = () => {
      if (!active) {
        setIndicator({ left: 0, width: 0, top: 0, height: 0 })
        return
      }
      const navRect = nav.getBoundingClientRect()
      const activeRect = active.getBoundingClientRect()
      setIndicator({
        left: activeRect.left - navRect.left,
        width: activeRect.width,
        top: activeRect.top - navRect.top,
        height: activeRect.height,
      })
    }
    const id = requestAnimationFrame(update)
    return () => cancelAnimationFrame(id)
  }, [pathname, tabs])

  return (
    <nav
      ref={navRef}
      className="relative flex flex-row flex-wrap gap-1 border-b-2 border-gray dark:border-gray-dark mb-6 -mt-2 md:mb-0 md:mt-0 md:flex-col md:flex-nowrap md:shrink-0 md:min-w-[10rem] md:border-b-0 md:border-r-2 md:pr-6"
      aria-label="Section navigation"
    >
      {visible.map(({ tab, level }) => {
        const isCurrentPage = activeUrl === tab.url
        const isParentOfActive =
          activeUrl !== null &&
          activeUrl !== tab.url &&
          activeUrl.startsWith(tab.url + '/')
        const showActive = isCurrentPage || isParentOfActive
        return (
          <Link
            key={tab.url}
            href={tab.url}
            className={`px-4 py-2 text-sm font-medium border-b-2 border-transparent -mb-0.5 transition-colors hover:text-cta md:mb-0 md:border-b-0 md:border-l-2 md:-ml-0.5 md:pl-4 md:pr-4 md:whitespace-nowrap ${
              level === 1 ? 'md:pl-6 md:text-xs' : ''
            } ${
              showActive ? 'font-bold text-cta' : 'text-gray-dark dark:text-gray'
            }`}
            aria-current={isCurrentPage ? 'page' : undefined}
          >
            {tab.name}
          </Link>
        )
      })}
      {/* Horizontal indicator (mobile) */}
      <span
        className="absolute bottom-0 h-0.5 -mb-0.5 bg-cta transition-[left,width] duration-200 ease-out md:hidden"
        style={{ left: indicator.left, width: indicator.width }}
        aria-hidden
      />
      {/* Vertical indicator (desktop) */}
      <span
        className="absolute left-0 hidden w-0.5 bg-cta transition-[top,height] duration-200 ease-out md:block"
        style={{ top: indicator.top, height: indicator.height }}
        aria-hidden
      />
    </nav>
  )
}
