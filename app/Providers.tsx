'use client'

// Main client boundary: layout tree (Nav, Footer, DarkModeToggle) and children render below.
// Prefer server pages that compose client islands (e.g. SortableProjectsList, CVContent).
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Next13ProgressBar } from 'next13-progressbar'
import Layout from '@/components/_Layout'

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>{children}</Layout>
      <Next13ProgressBar
        height="3px"
        color="var(--color-cta)"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </QueryClientProvider>
  )
}
