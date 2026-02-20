/** Site identity */
export const SITE_NAME = 'christof.digital'

/** Default meta description (home / OG) */
export const DEFAULT_SITE_DESCRIPTION =
  'Join me on a journey through my life | christof.digital | shift-happens'

/** Canonical origin; override with NEXT_PUBLIC_SITE_URL */
export const DEFAULT_BASE_URL = 'https://christof.digital'

/** Open Graph image (path under public/) */
export const OG_IMAGE_PATH = '/social/og.png'
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630
export const OG_IMAGE_ALT = 'Christof - Software Engineer, Teacher/Mentor'

/** Theme color for manifest / meta (msapplication-TileColor, theme-color) */
export const THEME_COLOR = '#242424'

/** Favicon and manifest paths */
export const FAVICON_ICO = '/favicon/favicon.ico'
export const FAVICON_32 = '/favicon/favicon-32x32.png'
export const FAVICON_16 = '/favicon/favicon-16x16.png'
export const APPLE_TOUCH_ICON = '/favicon/apple-touch-icon.png'
export const MANIFEST_PATH = '/manifest.json'

export const socialLinks = [
  { name: 'Email', link: 'mailto:bauer.christof@gmail.com?subject="I want to connect with you"', image: '/social/email.png' },
  { name: 'WhatsApp', link: 'https://api.whatsapp.com/send?phone=00529871145200', image: '/social/whatsapp.png' },
  { name: 'Github', link: 'https://github.com/Existenziell', image: '/social/github.png' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/christofbauer/', image: '/social/linkedin.png' },
  { name: 'Xing', link: 'https://www.xing.com/profile/Christof_Bauer/cv', image: '/social/xing.png' },
]
