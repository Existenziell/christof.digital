import Footer from './Footer'
import Nav from './Nav'
import DarkModeToggle from './DarkModeToggle'
import NextNprogress from 'nextjs-progressbar'

export default function Layout({ children }) {
  return (
    <>
      <NextNprogress
        color='var(--color-cta)'
        startPosition={0.3}
        stopDelayMs={100}
        height={3}
        showOnShallow={true}
      />

      <div className='flex justify-between items-start h-full p-4 md:px-8 bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand'>
        <Nav />
        <DarkModeToggle />
      </div>

      <main className='w-full min-h-[calc(100vh-41px)] px-4 sm:px-8 pb-20 pt-4 md:pt-20 text-center bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand'>
        {children}
      </main>

      <Footer />
    </>
  )
}
