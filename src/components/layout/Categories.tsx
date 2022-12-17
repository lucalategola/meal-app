import { Link } from 'react-router-dom'
import { useCategoriesQuery } from '../../api/fetchCategories'

const Categories = (): JSX.Element => {
  const { isLoading, error, data } = useCategoriesQuery()

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: ${error.message}</p>

  console.log(data)
  return (
    <div className="categories">
      {data?.map((category) => {
        return (
          <Link
            key={category.idCategory}
            to={`/results/${category.strCategory}`}
          >
            <div className="category">
              <h3>{category.strCategory}</h3>
              <p>{category.strCategoryDescription}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Categories
