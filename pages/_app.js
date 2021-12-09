import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar'
import { AppProvider } from '../context/state'

function MyApp({ Component, pageProps }) {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <AppProvider>
      <NextNprogress
        color="var(--color-brand)"
        startPosition={0.3}
        stopDelayMs={100}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
