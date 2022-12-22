import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Nav from '../nav/Nav'
import Technologies from '../technologies/Technologies'

const Layout = () => {
  return (
    <>
      <header className="nav-header">
        <div className="wrapper">
          <Nav />
        </div>
      </header>
      <div className="wrapper">
        <main>
          <Outlet />
          <Technologies />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
