import { Link } from 'react-router-dom'
import { useCategoriesQuery } from '../../api/meal/fetchCategories'

const Categories = (): JSX.Element => {
  const { isLoading, error, data } = useCategoriesQuery()

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: ${error.message}</p>

  console.log(data)
  return (
    <section className="categories">
      <h2 className="section-title">categories</h2>
      <div className="slider">
        {data?.map((category) => {
          return (
            <article key={category.idCategory} className="category">
              <h3 className="category-title">
                <Link
                  key={category.idCategory}
                  to={`/results/${category.strCategory}`}
                >
                  {category.strCategory}
                </Link>
              </h3>
              <div className="full-img">
                <Link
                  key={category.idCategory}
                  to={`/results/${category.strCategory}`}
                >
                  <img
                    src={category.strCategoryThumb}
                    alt="{category.strCategory}"
                  />
                </Link>
              </div>
              <p className="category-text">{category.strCategoryDescription}</p>
              <Link
                key={category.idCategory}
                to={`/results/${category.strCategory}`}
                className="category-link"
              >
                Open
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Categories
