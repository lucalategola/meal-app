import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import LoaderSpinner from './components/LoaderSpinner'
import router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<LoaderSpinner />} />
  </React.StrictMode>
)
