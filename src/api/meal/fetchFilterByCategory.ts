import { useQuery } from 'react-query'
import { Meals } from '../../types'
import { mealClient } from './mealClient'

export const fetchFilterByCategory = async (
  category: string
): Promise<Meals> => {
  const { data } = await mealClient.get(`filter.php?c=${category}`)
  return data.meals
}

export const useFilterByCategoryQuery = (category: string) =>
  useQuery<Meals, Error>(['filterByCategory', category], () =>
    fetchFilterByCategory(category)
  )