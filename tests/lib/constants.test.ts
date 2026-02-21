import { describe, it, expect } from 'vitest'
import {
  SITE_NAME,
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_BASE_URL,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_ALT,
  THEME_COLOR,
  FAVICON_ICO,
  FAVICON_32,
  FAVICON_16,
  APPLE_TOUCH_ICON,
} from '@/lib/constants'

describe('lib/constants', () => {
  it('exports SITE_NAME', () => {
    expect(SITE_NAME).toBe('christof.digital')
  })

  it('exports DEFAULT_SITE_DESCRIPTION', () => {
    expect(DEFAULT_SITE_DESCRIPTION).toContain('christof.digital')
  })

  it('exports DEFAULT_BASE_URL', () => {
    expect(DEFAULT_BASE_URL).toBe('https://christof.digital')
  })

  it('exports OG image constants', () => {
    expect(OG_IMAGE_PATH).toBe('/social/og.png')
    expect(OG_IMAGE_WIDTH).toBe(1200)
    expect(OG_IMAGE_HEIGHT).toBe(630)
    expect(OG_IMAGE_ALT).toBe('Christof - Programming, Teaching')
  })

  it('exports THEME_COLOR', () => {
    expect(THEME_COLOR).toBe('#242424')
  })

  it('exports favicon paths', () => {
    expect(FAVICON_ICO).toContain('favicon.ico')
    expect(FAVICON_32).toContain('favicon-32x32')
    expect(FAVICON_16).toContain('favicon-16x16')
    expect(APPLE_TOUCH_ICON).toContain('apple-touch-icon')
  })
})
