'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { name: 'Timeline', url: '/teaching/yoga' },
  { name: 'Map', url: '/teaching/yoga/map' },
  { name: 'Testimonials', url: '/teaching/yoga/testimonials' },
]

export default function YogaTabs() {
  const pathname = usePathname()

  return (
    <nav
      className="flex flex-wrap gap-1 border-b-2 border-gray dark:border-gray-dark mb-6 justify-center w-max mx-auto mt-8"
      aria-label="Yoga section"
    >
      {tabs.map((tab) => {
        const isActive =
          tab.url === '/teaching/yoga'
            ? pathname === '/teaching/yoga' || pathname === '/teaching/yoga/'
            : pathname.startsWith(tab.url)
        return (
          <Link
            key={tab.url}
            href={tab.url}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-0.5 transition-colors hover:text-cta ${
              isActive
                ? 'font-bold text-cta border-cta'
                : 'border-transparent text-muted'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {tab.name}
          </Link>
        )
      })}
    </nav>
  )
}
