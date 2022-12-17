import { Link, useParams } from 'react-router-dom'
import { useMealQuery } from '../api/fetchMeal'

const Meal = () => {
  const { mealId = '' } = useParams()
  const { isLoading, error, data } = useMealQuery(mealId)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: ${error.message}</p>

  return (
    <div>
      <h1>{data?.strMeal}</h1>
      <p>{data?.strInstructions}</p>
      <img src={data?.strMealThumb} alt={data?.strMeal} />
    </div>
  )
}

export default Meal
