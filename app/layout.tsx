import type { Metadata } from 'next'
import { Gotu, Lora } from 'next/font/google'
import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'
import Providers from '@/app/Providers'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { getRootMetadata } from '@/lib/metadata'
import Nav from '@/components/Nav'
import ThemeToggle from '@/components/ThemeToggle'
import Footer from '@/components/Footer'

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
        <ThemeProvider>
          <div className='header-bar'>
            <Nav />
            <ThemeToggle />
          </div>
          <main className='main-layout bg-page text-primary'>
            <Providers>{children}</Providers>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
