'use client'

import { MoonIcon, SunIcon } from '@/components/Icons'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, setLight, setDark } = useTheme()

  return (
    <div>
      {theme === 'light' ? (
        <button type="button" onClick={setDark} aria-label="Switch to dark mode">
          <MoonIcon className="h-6 w-6 cursor-pointer text-header-fg hover:text-cta transition-colors" />
        </button>
      ) : (
        <button type="button" onClick={setLight} aria-label="Switch to light mode">
          <SunIcon className="h-6 w-6 cursor-pointer text-header-fg hover:text-cta transition-colors" />
        </button>
      )}
    </div>
  )
}
