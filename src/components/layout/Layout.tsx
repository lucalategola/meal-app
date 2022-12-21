import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className="nav-header">
        <div className="wrapper">
          <nav className="nav">
            <h1>Meal App</h1>
            <ul className="nav-items">
              <li className="nav-item">
                <Link to="/">home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">search</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="wrapper">
        <main>
          <Outlet />
        </main>
      </div>
      <footer className="footer">
        <div className="wrapper">
          <p>
            Design & Develop by{' '}
            <a href="" className="footer-link">
              Luca La Tegola
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Layout
