import { rest } from 'msw'
import categories from './data/categories.json'
import mealDesserts from './data/meal-desserts.json'
import mealDetail from './data/meal-detail.json'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    )
  }),

  // Handles a GET /user request
  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      )
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    )
  }),

  // Handles a GET /categories.php request
  rest.get(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(categories))
    }
  ),

  // Handles a GET /filter.php?c=Dessert request
  rest.get(
    'https://www.themealdb.com/api/json/v1/1/filter.php',
    (req, res, ctx) => {
      // const query = req.url.searchParams.get('q')
      return res(ctx.status(200), ctx.json(mealDesserts))
    }
  ),

  // Handles a GET /lookup.php?i=52812 request
  rest.get(
    'https://www.themealdb.com/api/json/v1/1/lookup.php',
    (req, res, ctx) => {
      // const query = req.url.searchParams.get('i')
      return res(ctx.status(200), ctx.json(mealDetail))
    }
  ),
]
