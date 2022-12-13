import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'
import LoaderSpinner from './components/LoaderSpinner'
import router from './router'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<LoaderSpinner />} />
    </QueryClientProvider>
  </React.StrictMode>
)
