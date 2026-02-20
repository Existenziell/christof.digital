import type { Metadata } from 'next'
import { Gotu, Lora } from 'next/font/google'
import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'
import Providers from './Providers'
import { getRootMetadata } from '@/lib/metadata'

export const metadata: Metadata = getRootMetadata()

const gotu = Gotu({ weight: '400', subsets: ['latin'], variable: '--font-gotu' })
const lora = Lora({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-lora' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${gotu.variable} ${lora.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
