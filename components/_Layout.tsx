import DarkModeToggle from './DarkModeToggle'
import Nav from './Nav'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className='flex justify-between items-start p-4 md:px-8 bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand'>
        <Nav />
        <DarkModeToggle />
      </div>
      <main className='w-full min-h-[calc(100vh-121px)] md:min-h-[calc(100vh-117px)] px-4 sm:px-8 pb-20 pt-4 md:pt-20 text-center bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand'>
        {children}
      </main>
      <Footer />
    </>
  )
}
