import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Outlet />
    </div>
  )
}

export default Layout
