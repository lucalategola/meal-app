import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <p>
          Design & Develop by{' '}
          <a href="" className={styles['footer-link']}>
            Luca La Tegola
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
