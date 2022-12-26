import { rest } from 'msw'
import { renderHook, waitFor } from '@testing-library/react'
import { server } from '../../../mocks/server'
import { createWrapper } from '../../../tests/utils'
import { useMealsByCategoryQuery } from './useMealsByCategoryQuery'
import { Meals } from '../../../types'

describe('Test meals by category query hook', () => {
  test('successful query hook', async () => {
    const { result } = renderHook(() => useMealsByCategoryQuery('Dessert'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    if (result.current.data) {
      const data: Meals = result.current.data
      expect(data[0].strMeal).toMatch(/apam balik mocked/i)
    }
  })

  test('failure query hook', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    const { result } = renderHook(() => useMealsByCategoryQuery('fake'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isError).toBe(true))

    expect(result.current.error).toBeDefined()
  })
})
