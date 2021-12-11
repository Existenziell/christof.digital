import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'
import Social from './Social'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <title>
          {title ? `${title} | christof.digital` : `christof.digital`}
        </title>
        <meta name='description' content='Join me on a journey through my life | christof.digital | shift-happens' />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gotu&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className='dark:bg-black h-full'>
        <Social />
        <Nav />
      </div>
      <main className='w-full px-4 sm:px-8 pt-16 pb-32 text-center bg-cloth-pattern bg-repeat dark:bg-cloth-pattern-dark dark:text-gray-300'>
        {children}
      </main>
      <Footer />
    </>
  )
}
