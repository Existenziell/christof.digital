import type { Metadata } from 'next'
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

export { SITE_NAME } from '@/lib/constants'

/**
 * Build segment metadata for a page. Use in layout.tsx or page.tsx:
 *   export const metadata = createPageMetadata({ title: 'Contact' })
 */
export function createPageMetadata({
  title,
  description,
}: {
  title: string
  description?: string
}): Metadata {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  return {
    title: fullTitle,
    description: description ?? fullTitle,
  }
}

/**
 * Root layout metadata (icons, manifest, theme, Open Graph). Use in app/layout.tsx only.
 */
export function getRootMetadata(): Metadata {
  const title = SITE_NAME
  const description = DEFAULT_SITE_DESCRIPTION
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_BASE_URL

  return {
    metadataBase: new URL(baseUrl),
    ...createPageMetadata({ title, description: DEFAULT_SITE_DESCRIPTION }),
    icons: {
      icon: [
        { url: FAVICON_ICO },
        { url: FAVICON_32, sizes: '32x32', type: 'image/png' },
        { url: FAVICON_16, sizes: '16x16', type: 'image/png' },
      ],
      apple: APPLE_TOUCH_ICON,
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: OG_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
    other: {
      'msapplication-TileColor': THEME_COLOR,
      'theme-color': THEME_COLOR,
    },
  }
}
