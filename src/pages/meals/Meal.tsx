import { useParams } from 'react-router-dom'
import { useMealQuery } from '../../hooks/meal/useMealQuery/useMealQuery'
import styles from './Meal.module.css'

const Meal = () => {
  const { mealId = '' } = useParams()
  const { isLoading, error, data } = useMealQuery(mealId)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: ${error.message}</p>

  return (
    <article className={styles.meal}>
      <h2 className={styles['meal-title']}>{data?.strMeal}</h2>
      <div className={styles['meal-content']}>
        <div className={styles['meal-img']}>
          <img src={data?.strMealThumb} alt={data?.strMeal} />
        </div>
        <p className={styles['meal-text']}>{data?.strInstructions}</p>
      </div>
    </article>
  )
}

export default Meal
