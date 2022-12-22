import styles from './Technologies.module.css'

const Technologies = () => {
  return (
    <section className={styles.technologies}>
      <article className={styles.technology}>
        <div className={styles['technology-img']}>
          <a href="" title="Open React Site">
            <img src="/public/assets/react.svg" alt="react logo" />
          </a>
        </div>
      </article>
      <article className={styles.technology}>
        <div className={styles['technology-img']}>
          <a href="" title="Open Typescript Site">
            <img src="/public/assets/typescript.svg" alt="typescript logo" />
          </a>
        </div>
      </article>
      <article className={styles.technology}>
        <div className={styles['technology-img']}>
          <a href="" title="Open React Router Site">
            <img
              src="/public/assets/react-router.svg"
              alt="react router logo"
            />
          </a>
        </div>
      </article>
      <article className={styles.technology}>
        <div className={styles['technology-img']}>
          <a href="" title="Open React Query Site">
            <img src="/public/assets/react-query.svg" alt="react qquery logo" />
          </a>
        </div>
      </article>
    </section>
  )
}

export default Technologies
