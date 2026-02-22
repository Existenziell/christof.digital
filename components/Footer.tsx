'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronUp, HeartIcon } from '@/components/Icons'
import ExternalLink from '@/components/ExternalLink'
import { GITHUB_URL, BITCOINDEV_URL } from '@/lib/constants'

function isPageScrollable() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return false
  return document.documentElement.scrollHeight > window.innerHeight
}

function isAtBottom(threshold = 80) {
  if (typeof document === 'undefined' || typeof window === 'undefined') return false
  const { scrollHeight } = document.documentElement
  const { scrollY, innerHeight } = window
  return scrollY + innerHeight >= scrollHeight - threshold
}

export default function Footer() {
 
  return (
    <footer className='static bottom-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 w-full py-3 px-4 sm:px-6 text-xs sm:text-sm transition-all border-t border-border bg-header-bg text-header-fg'>
      <div className='flex flex-wrap items-center justify-center gap-x-2 text-muted'>
        <Link href='/about' className='hover:text-cta transition-all flex items-center gap-1'>
          <span>Made with</span>
          <HeartIcon className='w-5 h-5' />
          <span>by Chris</span>
        </Link>
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
    </footer>
  )
}
