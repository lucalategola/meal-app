import Home from './Home'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

describe('Simple working test', () => {
  const createTestQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })

  const createTestBrowserRouter = () =>
    createBrowserRouter([
      {
        path: '/',
        element: <div></div>,
        children: [
          {
            path: '/',
            element: <div></div>,
          },
          {
            path: 'about',
            element: <div></div>,
          },
          {
            path: 'meal/:mealId',
            element: <div></div>,
          },
          {
            path: 'results/:category',
            element: <div></div>,
          },
        ],
      },
    ])

  const testQueryClient = createTestQueryClient()
  const testBrowserRouter = createTestBrowserRouter()

  // const createWrapper = ({ children }) => {
  //   const testQueryClient = createTestQueryClient()
  //   // eslint-disable-next-line react/display-name
  //   return ({ children }: { children: React.ReactNode }) => (
  //     <QueryClientProvider client={testQueryClient}>
  //       {children}
  //     </QueryClientProvider>
  //   )
  // }

  // it('Renders the component with loading state', async () => {
  //   render(
  //     <QueryClientProvider client={testQueryClient}>
  //       <RouterProvider router={testBrowserRouter}>
  //         <Home />
  //       </RouterProvider>
  //     </QueryClientProvider>
  //   )
  //   await screen.findByText(/Loading.../i)
  // })

  it('Renders the component with categories', async () => {
    // render(
    //   <QueryClientProvider client={testQueryClient}>
    //     <Home />
    //   </QueryClientProvider>
    // )
    // const postsItems = await screen.findAllByRole('article')
    // expect(postsItems).toHaveLength(14)
  })

  // it('should increment count on click', async () => {
  //   render(<Home />)
  //   userEvent.click(screen.getByRole('button'))
  //   expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument()
  // })

  // it('uses flexbox in home header', async () => {
  //   render(<Home />)
  //   const element = screen.getByRole('banner')
  //   expect(element.className).toEqual('App-header')
  //   expect(getComputedStyle(element).display).toEqual('flex')
  // })
})
