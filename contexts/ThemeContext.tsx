'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'
import type { Theme, ThemeContextValue } from '@/types'

export type { Theme }

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyTheme(mode: 'light' | 'dark') {
  if (typeof document === 'undefined') return
  if (mode === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(undefined)

  const setLight = useCallback(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem('theme', 'light')
    applyTheme('light')
    setTheme('light')
  }, [])

  const setDark = useCallback(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem('theme', 'dark')
    applyTheme('dark')
    setTheme('dark')
  }, [])

  /* eslint-disable react-hooks/set-state-in-effect -- sync theme from localStorage on mount */
  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      applyTheme('dark')
      setTheme('dark')
    } else if (stored === 'light') {
      applyTheme('light')
      setTheme('light')
    } else if (stored === 'auto') {
      if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark')
      } else {
        applyTheme('light')
      }
      setTheme('auto')
    } else {
      const dark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
      if (dark) {
        applyTheme('dark')
        setTheme('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        applyTheme('light')
        setTheme('light')
        localStorage.setItem('theme', 'light')
      }
    }
  }, [])
  /* eslint-enable react-hooks/set-state-in-effect */

  const value: ThemeContextValue = { theme, setLight, setDark }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return ctx
}
