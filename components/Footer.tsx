'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className='static bottom-0 flex items-center justify-center w-full py-1 text-xs transition-all border-t border-black border-opacity-10 bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand dark:border-brand dark:border-opacity-10'>
      <a href='#top' aria-label='Scroll back up'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-cta transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
      {pathname !== '/' && (
        <Link href='/' className='absolute left-0' aria-label='Back Home'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-cta transition-colors cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      )}
    </footer>
  )
}
