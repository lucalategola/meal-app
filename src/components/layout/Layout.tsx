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
          <section className="technologies">
            <article className="technology">
              <div className="full-img">
                <a href="" title="Open React Site">
                  <img src="/public/assets/react.svg" alt="react logo" />
                </a>
              </div>
            </article>
            <article className="technology">
              <div className="full-img">
                <a href="" title="Open Typescript Site">
                  <img
                    src="/public/assets/typescript.svg"
                    alt="typescript logo"
                  />
                </a>
              </div>
            </article>
            <article className="technology">
              <div className="full-img">
                <a href="" title="Open React Router Site">
                  <img
                    src="/public/assets/react-router.svg"
                    alt="react router logo"
                  />
                </a>
              </div>
            </article>
            <article className="technology">
              <div className="full-img">
                <a href="" title="Open React Query Site">
                  <img
                    src="/public/assets/react-query.svg"
                    alt="react qquery logo"
                  />
                </a>
              </div>
            </article>
          </section>
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
