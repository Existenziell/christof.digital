import { describe, it, expect } from 'vitest'
// @ts-expect-error CommonJS module
import * as theme from '@/lib/theme.js'

describe('lib/theme', () => {
  it('exports colors with expected keys', () => {
    expect(theme.colors).toBeDefined()
    expect(theme.colors).toMatchObject({
      brand: expect.any(String),
      brandDark: expect.any(String),
      cta: expect.any(String),
      gray: expect.any(String),
      grayDark: expect.any(String),
      svgDark: expect.any(String),
      svgLight: expect.any(String),
    })
  })

  it('exports mauve scale (1-12)', () => {
    expect(theme.mauve).toBeDefined()
    for (let i = 1; i <= 12; i++) {
      expect(theme.mauve[i]).toMatch(/^#[0-9a-f]{6}$/i)
    }
  })

  it('exports mauveDark scale (1-12)', () => {
    expect(theme.mauveDark).toBeDefined()
    for (let i = 1; i <= 12; i++) {
      expect(theme.mauveDark[i]).toMatch(/^#[0-9a-f]{6}$/i)
    }
  })

  it('exports light theme with expected keys', () => {
    expect(theme.light).toBeDefined()
    const keys = [
      'pageBg',
      'sectionBg',
      'sectionAlt',
      'surface',
      'surfaceMuted',
      'textPrimary',
      'textMuted',
      'border',
      'headerBg',
      'headerFg',
    ]
    keys.forEach((k) => expect(theme.light[k]).toBeDefined())
  })

  it('exports dark theme with same keys as light', () => {
    expect(theme.dark).toBeDefined()
    expect(Object.keys(theme.dark)).toEqual(Object.keys(theme.light))
  })
})
