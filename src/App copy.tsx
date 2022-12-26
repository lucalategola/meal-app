import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './index.css'
import LoaderSpinner from './components/LoaderSpinner'
import router from './router'
// import { worker } from './mocks/browser'

// if (process.env.NODE_ENV === 'development') {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   // const { worker } = require('./mocks/browser')
//   // import { worker } from './mocks/browser'
//   worker.start()
// }

// const queryClient = new QueryClient()

const App = () => {
  return (
    // <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} fallbackElement={<LoaderSpinner />} />
    //   <ReactQueryDevtools />
    // </QueryClientProvider>
  )
}

export default App
