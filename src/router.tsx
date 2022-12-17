import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Meal from './pages/Meal'
import Results from './pages/Results'

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
    path: 'meal/:mealId',
    element: <Meal />,
  },
  {
    path: 'results/:category',
    element: <Results />,
  },
])

export default router
