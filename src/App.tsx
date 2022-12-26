import { Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Meal from './pages/meals/Meal'
import MealList from './pages/meals/MealList'
import NotFound from './pages/not-found/NotFound'
// import BookNew from './pages/BookNew'
import Layout from './components/layout/Layout'
import LayoutFullPage from './components/layout/LayoutFullPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meals/category/:category" element={<MealList />} />
          <Route path="/meals/:mealId" element={<Meal />} />
          {/* <Route path="/book/new" element={<BookNew />} /> */}
        </Route>
        <Route path="/" element={<LayoutFullPage />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
