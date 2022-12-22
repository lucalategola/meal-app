import styles from './Technologies.module.css'
import reactLogo from '../../assets/react.svg'
import typescriptLogo from '../../assets/typescript.svg'
import reactRouterLogo from '../../assets/react-router.svg'
import reactQueryLogo from '../../assets/react-query.svg'

const Technologies = () => {
  return (
    <section className={styles.technologies}>
      <article className={styles.technology}>
        <div className={styles['technology-img']}>
          <a href="https://reactjs.org/" title="Open React Site">
            <img src={reactLogo} alt="React logo" />
          </a>
        </div>
      </article>
      <article className={styles.technology}>
        <div className={styles['technology-img']}>
          <a
            href="https://www.typescriptlang.org/"
            title="Open Typescript Site"
          >
            <img src={typescriptLogo} alt="Typescript logo" />
          </a>
        </div>
      </article>
      <article className={styles.technology}>
        <div className={styles['technology-img']}>
          <a
            href="https://reactrouter.com/en/main"
            title="Open React Router Site"
          >
            <img src={reactRouterLogo} alt="React Router logo" />
          </a>
        </div>
      </article>
      <article className={styles.technology}>
        <div className={styles['technology-img']}>
          <a
            href="https://react-query-v3.tanstack.com/"
            title="Open React Query Site"
          >
            <img src={reactQueryLogo} alt="React Query logo" />
          </a>
        </div>
      </article>
    </section>
  )
}

export default Technologies
