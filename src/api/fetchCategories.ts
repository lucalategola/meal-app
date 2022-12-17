import axios from 'axios'
import { useQuery } from 'react-query'
import { Categories } from '../types'

export const fetchCategories = async (): Promise<Categories> => {
  const { data } = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  )
  return data.categories
}

export const useCategoriesQuery = () =>
  useQuery<Categories, Error>('categories', () => fetchCategories())
