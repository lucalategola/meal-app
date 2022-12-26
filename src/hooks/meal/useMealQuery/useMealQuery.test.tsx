import { rest } from 'msw'
import { renderHook, waitFor } from '@testing-library/react'
import { server } from '../../../mocks/server'
import { createWrapper } from '../../../tests/utils'
import { useMealQuery } from './useMealQuery'
import { Meal } from '../../../types'

describe('Test meal query hook', () => {
  test('successful query hook', async () => {
    const { result } = renderHook(() => useMealQuery('fake'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    if (result.current.data) {
      const data: Meal = result.current.data
      expect(data.strMeal).toBe('Beef Brisket Pot Roast')
    }
  })

  test('failure query hook', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    const { result } = renderHook(() => useMealQuery('fake'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isError).toBe(true))

    expect(result.current.error).toBeDefined()
  })
})
