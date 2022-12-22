import { Link } from 'react-router-dom'
import styles from '../Cards.module.css'
import { Categories } from '../../../types'

type Props = {
  items?: Categories
}

const CategoryCards = ({ items }: Props): JSX.Element => {
  if (items === undefined) {
    return <></>
  }

  return (
    <div className={styles.cards}>
      {items.map((category) => {
        return (
          <article key={category.idCategory} className={styles.card}>
            <h3 className={styles['card-title']}>
              <Link to={`/results/${category.strCategory}`}>
                {category.strCategory}
              </Link>
            </h3>
            <div className={styles['card-img']}>
              <Link to={`/results/${category.strCategory}`}>
                <img
                  src={category.strCategoryThumb}
                  alt="{category.strCategory}"
                />
              </Link>
            </div>
            <p className={styles['card-text']}>
              {category.strCategoryDescription}
            </p>
            <Link
              to={`/results/${category.strCategory}`}
              className={styles['card-link']}
            >
              Open
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export default CategoryCards
