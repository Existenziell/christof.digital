'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronUp, ChevronLeft } from '@/components/Icons'

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className='static bottom-0 flex items-center justify-center w-full py-1 text-xs transition-all border-t border-border bg-header-bg text-header-fg'>
      <a href='#top' aria-label='Scroll back up'>
        <ChevronUp className="h-8 w-8 hover:text-cta transition-colors" />
      </a>
      {pathname !== '/' && (
        <Link href='/' className='absolute left-0' aria-label='Back Home'>
          <ChevronLeft className="h-8 w-8 hover:text-cta transition-colors cursor-pointer" />
        </Link>
      )}
    </footer>
  )
}
