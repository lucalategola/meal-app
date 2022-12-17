import { Link, useParams } from 'react-router-dom'
import { useFilterByCategoryQuery } from '../api/fetchFilterByCategory'

const Detail = () => {
  const { category = '' } = useParams()
  const { isLoading, error, data } = useFilterByCategoryQuery(category)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: ${error.message}</p>

  return (
    <div className="meals">
      {data?.map((meal) => {
        return (
          <Link key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
            <div className="meal">
              <h3>{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} width="300" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Detail
