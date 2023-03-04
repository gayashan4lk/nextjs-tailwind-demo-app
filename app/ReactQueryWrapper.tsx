'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60000 } },
})

type Props = {
  children: React.ReactNode
}

const ReactQueryWrapper = ({ children }: Props) => {
  ;<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryWrapper
