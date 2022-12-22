import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1>Meal App</h1>
      <ul className={styles['nav-items']}>
        <li className={styles['nav-item']}>
          <Link to="/">home</Link>
        </li>
        <li className={styles['nav-item']}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles['nav-item']}>
          <Link to="/about">search</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
