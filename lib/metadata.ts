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

export function createPageMetadata({
  title,
  description,
  openGraph: openGraphOverride,
  twitter: twitterOverride,
}: {
  title: string
  description?: string
  openGraph?: {
    description?: string
  }
  twitter?: {
    description?: string
  }
}): Metadata {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  const desc = description ?? fullTitle
  const base: Metadata = {
    title: fullTitle,
    description: desc,
  }
  const defaultOgImage = [{ url: OG_IMAGE_PATH, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: OG_IMAGE_ALT }]
  if (openGraphOverride) {
    base.openGraph = {
      type: 'website',
      siteName: SITE_NAME,
      title: fullTitle,
      description: openGraphOverride.description ?? desc,
      images: defaultOgImage,
    }
  }
  if (twitterOverride) {
    base.twitter = {
      card: 'summary_large_image',
      title: fullTitle,
      description: twitterOverride.description ?? desc,
      images: [OG_IMAGE_PATH],
    }
  }
  return base
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
