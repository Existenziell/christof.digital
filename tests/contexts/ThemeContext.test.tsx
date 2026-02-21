import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext'

function Consumer() {
  const { theme, setLight, setDark } = useTheme()
  return (
    <div>
      <span data-testid="theme">{String(theme)}</span>
      <button type="button" onClick={setLight}>
        Light
      </button>
      <button type="button" onClick={setDark}>
        Dark
      </button>
    </div>
  )
}

describe('ThemeContext', () => {
  let localStorageMock: Record<string, string>

  beforeEach(() => {
    localStorageMock = {}
    vi.stubGlobal(
      'localStorage',
      {
        getItem: (key: string) => localStorageMock[key] ?? null,
        setItem: (key: string, value: string) => {
          localStorageMock[key] = value
        },
      }
    )
    document.documentElement.classList.remove('dark')
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  describe('useTheme()', () => {
    it('throws when used outside ThemeProvider', () => {
      expect(() => render(<Consumer />)).toThrow(
        'useTheme must be used within a ThemeProvider'
      )
    })

    it('returns theme and setters when inside ThemeProvider', () => {
      render(
        <ThemeProvider>
          <Consumer />
        </ThemeProvider>
      )
      expect(screen.getByTestId('theme')).toBeInTheDocument()
      expect(screen.getByText('Light')).toBeInTheDocument()
      expect(screen.getByText('Dark')).toBeInTheDocument()
    })
  })

  describe('ThemeProvider', () => {
    it('renders children', () => {
      render(
        <ThemeProvider>
          <span data-testid="child">child</span>
        </ThemeProvider>
      )
      expect(screen.getByTestId('child')).toHaveTextContent('child')
    })

    it('setLight updates localStorage and applies light theme', () => {
      localStorageMock.theme = 'dark'
      document.documentElement.classList.add('dark')

      render(
        <ThemeProvider>
          <Consumer />
        </ThemeProvider>
      )

      act(() => {
        screen.getByText('Light').click()
      })

      expect(localStorageMock.theme).toBe('light')
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })

    it('setDark updates localStorage and applies dark theme', () => {
      render(
        <ThemeProvider>
          <Consumer />
        </ThemeProvider>
      )

      act(() => {
        screen.getByText('Dark').click()
      })

      expect(localStorageMock.theme).toBe('dark')
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })
  })
})
