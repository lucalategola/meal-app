import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'detail/:detailId',
    element: <Detail />,
  },
])

export default router
