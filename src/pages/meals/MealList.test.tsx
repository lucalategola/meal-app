import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Meals from './MealList'

describe('MealList page', () => {
  const createTestQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })
  const testQueryClient = createTestQueryClient()

  it('Renders loading text', () => {
    render(
      <QueryClientProvider client={testQueryClient}>
        <BrowserRouter>
          <Meals />
        </BrowserRouter>
      </QueryClientProvider>
    )

    expect(screen.getByText(/Loading/i)).toBeInTheDocument()
  })

  it('Renders the component with categories', async () => {
    render(
      <QueryClientProvider client={testQueryClient}>
        <BrowserRouter>
          <Meals />
        </BrowserRouter>
      </QueryClientProvider>
    )

    const categoriesItems = await screen.findAllByRole('article')

    expect(categoriesItems).toHaveLength(64)
  })
})
