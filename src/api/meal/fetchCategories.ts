import { useQuery } from 'react-query'
import { Categories } from '../../types'
import { mealClient } from './mealClient'

export const fetchCategories = async (): Promise<Categories> => {
  const { data } = await mealClient.get(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  )
  return data.categories
}

export const useCategoriesQuery = () =>
  useQuery<Categories, Error>('categories', () => fetchCategories())
