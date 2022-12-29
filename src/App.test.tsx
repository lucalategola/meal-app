import { screen, fireEvent } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import App from './App'
import { renderWithClient } from './tests/utils'

describe('App', () => {
  test('full app rendering/navigating and open about page', async () => {
    const result = renderWithClient(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    // verify page content for default route
    expect(result.getByText(/home page/i)).toBeInTheDocument()

    // verify page content for expected route after navigating
    // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
    fireEvent.click(result.getByText(/about/i))

    expect(
      screen.getByRole('heading', {
        name: /about/i,
      })
    ).toBeInTheDocument()
  })

  test('landing on a bad page', async () => {
    const badRoute = '/some/bad/route'
    const result = renderWithClient(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )

    // verify navigation to "no match" route
    expect(
      result.getByText(/sorry, an unexpected error has occurred./i)
    ).toBeInTheDocument()
  })
})
