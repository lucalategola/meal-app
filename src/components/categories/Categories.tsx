import { useCategoriesQuery } from '../../api/meal/fetchCategories'
import CategoryCards from '../cards/categories/CategoryCards'
import styles from './Categories.module.css'

const Categories = (): JSX.Element => {
  const { isLoading, error, data } = useCategoriesQuery()

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: ${error.message}</p>

  return (
    <section className={styles.categories}>
      <h2 className={styles['section-title']}>categories</h2>
      <CategoryCards items={data} />
    </section>
  )
}

export default Categories
