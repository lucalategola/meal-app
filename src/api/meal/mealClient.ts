import axios from 'axios'

export const mealClient = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
  },
})
