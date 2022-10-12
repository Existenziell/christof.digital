import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '../components/_Layout'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function Zooloo({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default Zooloo
