import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { renderWithClient } from '../../tests/utils'
import Categories from './Categories'

describe('Categories component', () => {
  test('should render loading status', async () => {
    const result = renderWithClient(
      <BrowserRouter>
        <Categories />
      </BrowserRouter>
    )

    // verify the loading status message
    expect(result.getByText(/loading.../i)).toBeInTheDocument()
  })

  test('should render the list of categories', async () => {
    const result = renderWithClient(
      <BrowserRouter>
        <Categories />
      </BrowserRouter>
    )
    const categories = await result.findAllByTestId('category')

    // verify the number of categories element in page
    expect(categories).toHaveLength(14)
    expect(result.getByText(/beef mocked/i)).toBeInTheDocument()
  })
})
