'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [darkmode, setDarkmode] = useState<string | undefined>(undefined)

  const setLight = () => {
    if (typeof window === 'undefined') return
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
    setDarkmode('light')
  }

  const setDark = () => {
    if (typeof window === 'undefined') return
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
    setDarkmode('dark')
  }

  /* eslint-disable react-hooks/set-state-in-effect -- sync theme from localStorage on mount */
  useEffect(() => {
    if (typeof window === 'undefined') return
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkmode('dark')
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark')
      setDarkmode('light')
    } else if (theme === 'auto') {
      if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      setDarkmode('auto')
    } else {
      const dark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
      if (dark) {
        document.documentElement.classList.add('dark')
        setDarkmode('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        setDarkmode('light')
        localStorage.setItem('theme', 'light')
      }
    }
  }, [])
  /* eslint-enable react-hooks/set-state-in-effect */

  return (
    <div className='pt-2 md:pt-1'>
      {darkmode === 'light' ? (
        <button type="button" onClick={setDark} aria-label="Switch to dark mode">
          <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 cursor-pointer text-brand-dark hover:text-cta transition-colors' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
          </svg>
        </button>
      ) : (
        <button type="button" onClick={setLight} aria-label="Switch to light mode">
          <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 cursor-pointer text-brand hover:text-cta transition-colors' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
          </svg>
        </button>
      )}
    </div>
  )
}
