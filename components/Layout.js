import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'
import Social from './Social'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <title>
          {title ? `${title} | christof.digital` : `christof.digital`}
        </title>
      </Head>
      <Social />
      <Nav />
      <main className="text-center w-screen px-16 pt-16 pb-32 bg-cloth-pattern bg-repeat">
        {children}
      </main>
      <Footer />
    </>
  )
}
