import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'
import DarkModeToggle from './DarkModeToggle'
import NextNprogress from 'nextjs-progressbar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>christof.digital</title>
        <meta name='description' content='Join me on a journey through my life | christof.digital | shift-happens' />
        <link rel='icon' href='/favicon/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#242424" />
        <meta name="theme-color" content="#242424" />

      </Head>

      <NextNprogress
        color='var(--color-cta)'
        startPosition={0.3}
        stopDelayMs={100}
        height={3}
        showOnShallow={true}
      />

      <div className='flex justify-between items-start h-full p-4 bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand'>
        <Nav />
        <DarkModeToggle />
      </div>

      <main className='w-full min-h-[calc(100vh-41px)] px-4 sm:px-8 py-20 md:pt-16 text-center bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand'>
        {children}
      </main>

      <Footer />
    </>
  )
}
