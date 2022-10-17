import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '../components/_Layout'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function Zooloo({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default Zooloo
