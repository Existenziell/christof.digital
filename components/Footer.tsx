'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronUp, ChevronLeft, HeartIcon } from '@/components/Icons'
import ExternalLink from '@/components/ExternalLink'
import { GITHUB_URL, BITCOINDEV_URL } from '@/lib/constants'

function isPageScrollable() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return false
  return document.documentElement.scrollHeight > window.innerHeight
}

export default function Footer() {
  const pathname = usePathname()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const update = () => setShowScrollTop(isPageScrollable())
    update()
    window.addEventListener('resize', update)
    window.addEventListener('scroll', update)
    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update)
    }
  }, [pathname])

  return (
    <footer className='static bottom-0 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 w-full py-3 px-4 sm:px-6 text-xs sm:text-sm transition-all border-t border-border bg-header-bg text-header-fg'>
      <div className='flex items-center min-w-8'>
        {pathname !== '/' && (
          <Link href='/' className='p-2 -m-2 rounded hover:text-cta transition-colors' aria-label='Back Home'>
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </Link>
        )}
      </div>

      <div className='flex flex-wrap items-center justify-center gap-x-2 text-muted'>
        <span>Made with</span>
        <HeartIcon className='w-5 h-5 cursor-default -mt-1' />
        <Link href='/about' className='hover:text-cta transition-all'>by Chris</Link>
        <span className='text-muted' aria-hidden>|</span>
        <span>Open source</span>
        <span className='text-muted' aria-hidden>•</span>
        <span>No ads</span>
        <span className='text-muted' aria-hidden>•</span>
        <span>No tracking</span>
        <span className='text-muted' aria-hidden>|</span>
        <ExternalLink href={GITHUB_URL} className='hover:text-cta transition-all'>
          GitHub
        </ExternalLink>
        <span className='text-muted' aria-hidden>•</span>
        <ExternalLink href={BITCOINDEV_URL} className='hover:text-cta transition-all'>
          BitcoinDev
        </ExternalLink>
      </div>

      <div className='flex items-center min-w-8 justify-end'>
        {showScrollTop && (
          <a
            href='#top'
            className='p-2 -m-2 rounded hover:text-cta transition-colors'
            aria-label='Scroll back up'
          >
            <ChevronUp className="h-6 w-6 sm:h-8 sm:w-8" />
          </a>
        )}
      </div>
    </footer>
  )
}
