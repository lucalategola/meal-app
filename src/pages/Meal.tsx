import { useParams } from 'react-router-dom'
import { useMealQuery } from '../api/meal/fetchMeal'

const Meal = () => {
  const { mealId = '' } = useParams()
  const { isLoading, error, data } = useMealQuery(mealId)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: ${error.message}</p>

  return (
    <article className="meal">
      <h2 className="meal-title">{data?.strMeal}</h2>
      <div className="meal-content">
        <div className="meal-image full-img">
          <a href="">
            <img src={data?.strMealThumb} alt={data?.strMeal} />
          </a>
        </div>
        <p className="meal-text">{data?.strInstructions}</p>
      </div>
    </article>
  )
}

export default Meal
