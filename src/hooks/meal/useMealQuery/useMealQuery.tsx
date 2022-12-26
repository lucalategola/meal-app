import { useQuery } from 'react-query'
import { Meal } from '../../../types'
import { mealClient } from '../../../api/meal/mealClient'

export const fetchMealById = async (idMeal: string): Promise<Meal> => {
  const { data } = await mealClient.get(`lookup.php?i=${idMeal}`)
  return data.meals[0]
}

export const useMealQuery = (idMeal: string) =>
  useQuery<Meal, Error>(['meal', idMeal], () => fetchMealById(idMeal))
