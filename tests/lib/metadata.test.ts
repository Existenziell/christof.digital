import { describe, it, expect, vi, afterEach } from 'vitest'
import { createPageMetadata, getRootMetadata } from '@/lib/metadata'
import { SITE_NAME } from '@/lib/constants'

describe('createPageMetadata()', () => {
  it('returns full title with site name when title differs', () => {
    const meta = createPageMetadata({ title: 'Contact' })
    expect(meta.title).toBe(`Contact | ${SITE_NAME}`)
    expect(meta.description).toBe(`Contact | ${SITE_NAME}`)
  })
  it('uses site name as title when title equals SITE_NAME', () => {
    const meta = createPageMetadata({ title: SITE_NAME })
    expect(meta.title).toBe(SITE_NAME)
  })
  it('uses custom description when provided', () => {
    const meta = createPageMetadata({
      title: 'About',
      description: 'Custom description',
    })
    expect(meta.description).toBe('Custom description')
  })
})

describe('getRootMetadata()', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('returns metadata with valid metadataBase, title, icons, openGraph, twitter', () => {
    const meta = getRootMetadata()
    expect(meta.metadataBase).toBeInstanceOf(URL)
    expect(meta.metadataBase?.toString()).toMatch(/^https?:\/\//)
    expect(meta.title).toBe(SITE_NAME)
    expect(meta.icons).toBeDefined()
    expect(meta.openGraph).toBeDefined()
    expect(meta.twitter).toBeDefined()
  })

  it('uses NEXT_PUBLIC_SITE_URL when set', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://custom.example.com')
    const meta = getRootMetadata()
    expect(meta.metadataBase?.toString()).toBe('https://custom.example.com/')
  })
})
