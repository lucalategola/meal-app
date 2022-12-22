import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Meal from './pages/meal/Meal'
import Meals from './pages/meals/Meals'
import Layout from './components/layout/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'meal/:mealId',
        element: <Meal />,
      },
      {
        path: 'results/:category',
        element: <Meals />,
      },
    ],
  },
])

export default router
