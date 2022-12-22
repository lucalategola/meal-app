import { Link } from 'react-router-dom'
import styles from '../Cards.module.css'
import { Meals } from '../../../types'

type Props = {
  items?: Meals
}

const MealCards = ({ items }: Props): JSX.Element => {
  if (items === undefined) {
    return <></>
  }

  return (
    <div className={styles.cards}>
      {items.map((meal) => {
        return (
          <article key={meal.idMeal} className={styles.card}>
            <h3 className={styles['card-title']}>
              <Link key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
                {meal.strMeal}
              </Link>
            </h3>
            <div className={styles['card-img']}>
              <Link key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </Link>
            </div>
            {meal.strInstructions && (
              <p className={styles['card-text']}>{meal.strInstructions}</p>
            )}
            <Link to={`/meal/${meal.idMeal}`} className={styles['card-link']}>
              Open
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export default MealCards
