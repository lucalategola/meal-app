import { Link, useParams } from 'react-router-dom'
import { useFilterByCategoryQuery } from '../api/meal/fetchFilterByCategory'

const Detail = () => {
  const { category = '' } = useParams()
  const { isLoading, error, data } = useFilterByCategoryQuery(category)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: ${error.message}</p>

  return (
    <section className="categories">
      <h2 className="section-title">{category}</h2>
      <div className="slider">
        {data?.map((meal) => {
          return (
            <article key={meal.idMeal} className="category">
              <h3 className="category-title">
                <Link to={`/meal/${meal.idMeal}`}>{meal.strMeal}</Link>
              </h3>
              <div className="full-img">
                <Link to={`/meal/${meal.idMeal}`}>
                  <img src={meal.strMealThumb} alt="{category.strCategory}" />
                </Link>
              </div>
              <Link to={`/meal/${meal.idMeal}`} className="category-link">
                Open
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Detail
