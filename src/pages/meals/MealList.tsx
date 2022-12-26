import { useParams } from 'react-router-dom'
import { useMealsByCategoryQuery } from '../../hooks/meal/useMealsByCategoryQuery/useMealsByCategoryQuery'
import MealCards from '../../components/cards/meal/MealCards'
import styles from './MealList.module.css'

const Meals = () => {
  const { category = '' } = useParams()
  const { isLoading, error, data } = useMealsByCategoryQuery(category)

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
