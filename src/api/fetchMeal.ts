import axios from 'axios'
import { useQuery } from 'react-query'
import { Meal } from '../types'

export const fetchMealById = async (idMeal: string): Promise<Meal> => {
  const { data } = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  )
  return data.meals[0]
}

export const useMealQuery = (idMeal: string) =>
  useQuery<Meal, Error>(['meal', idMeal], () => fetchMealById(idMeal))
