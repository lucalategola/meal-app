import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByRole,
} from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import App from './App'
import { renderWithClient } from './tests/utils'

describe('App Component', () => {
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

  // test('full app rendering all categories and click Chicken category', async () => {
  //   const result = renderWithClient(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   )

  //   const categories = await result.findAllByTestId('category')
  //   // verify page content for default route
  //   expect(
  //     screen.getByRole('heading', {
  //       name: /chicken/i,
  //     })
  //   ).toBeInTheDocument()

  //   expect(categories).toHaveLength(14)

  //   expect(result.getByText(/beef mocked/i)).toBeInTheDocument()

  //   // verify page content for expected route after navigating
  //   // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  //   fireEvent.click(result.getByRole('link', { name: /chicken/i }))

  //   const meal = await result.findAllByTestId('meal')

  //   expect(
  //     screen.getByRole('heading', {
  //       name: /chicken/i,
  //       level: 2,
  //     })
  //   ).toBeInTheDocument()
  // })

  test('landing on a bad page', async () => {
    const badRoute = '/some/bad/route'
    const result = renderWithClient(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )

    // verify navigation to "no match" route
    expect(
      await result.getByText(/sorry, an unexpected error has occurred./i)
    ).toBeInTheDocument()
  })
})
