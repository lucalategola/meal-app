import { useParams } from 'react-router-dom'
import { useFilterByCategoryQuery } from '../../api/meal/fetchFilterByCategory'
import MealCards from '../../components/cards/meal/MealCards'
import styles from './Meals.module.css'

const Meals = () => {
  const { category = '' } = useParams()
  const { isLoading, error, data } = useFilterByCategoryQuery(category)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: ${error.message}</p>

  return (
    <section className={styles.meals}>
      <h2 className={styles['section-title']}>{category}</h2>
      <MealCards items={data} />
    </section>
  )
}

export default Meals
