import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar'
import Layout from '../components/_Layout'

function Zooloo({ Component, pageProps }) {
  return (
    <Layout >
      <NextNprogress
        color='var(--color-brand)'
        startPosition={0.3}
        stopDelayMs={100}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default Zooloo
