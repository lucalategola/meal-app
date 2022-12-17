import { Link } from 'react-router-dom'
import Categories from '../components/layout/Categories'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Categories />
    </div>
  )
}

export default Home
