import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import React from 'react'

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
