import { VFC } from 'react'
import { MainTask } from './components/MainTask'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: false,
//       refetchOnWindowFocus: false,
//     },
//   },
// })
const queryClient = new QueryClient();

const App: VFC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <QueryClientProvider client={queryClient}>
        <MainTask />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  )
}

export default App
