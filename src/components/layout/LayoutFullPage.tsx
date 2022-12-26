import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Nav from '../nav/Nav'
import styles from './Layout.module.css'

const LayoutFullPage = () => {
  return (
    <>
      <header className="nav-header">
        <div className="wrapper">
          <Nav />
        </div>
      </header>
      <div className={styles['full-page']}>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default LayoutFullPage
