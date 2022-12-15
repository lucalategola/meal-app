import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/detail/1">Contact</Link>
    </div>
  )
}

export default Home
