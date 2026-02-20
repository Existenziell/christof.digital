'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Next13ProgressBar } from 'next13-progressbar'

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Next13ProgressBar
        height="3px"
        color="var(--color-cta)"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </QueryClientProvider>
  )
}
