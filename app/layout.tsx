import type { Metadata } from 'next'
import { Gotu, Lora } from 'next/font/google'
import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'
import Providers from './Providers'
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
        <div className='flex justify-between items-start p-4 md:px-8 bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand'>
          <Nav />
          <ThemeToggle />
        </div>
        <main className='flex flex-col w-full min-h-[calc(100vh-121px)] md:min-h-[calc(100vh-117px)] px-4 sm:px-8 pb-20 pt-4 text-center bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand'>
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  )
}
