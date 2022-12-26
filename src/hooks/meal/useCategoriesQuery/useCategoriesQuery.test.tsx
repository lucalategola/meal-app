import { rest } from 'msw'
import { renderHook, waitFor } from '@testing-library/react'
import { server } from '../../../mocks/server'
import { createWrapper } from '../../../tests/utils'
import { useCategoriesQuery } from './useCategoriesQuery'
import { Categories } from '../../../types'

describe('Test categories query hook', () => {
  test('successful query hook', async () => {
    const { result } = renderHook(() => useCategoriesQuery(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    if (result.current.data) {
      const data: Categories = result.current.data
      expect(data[0].strCategory).toBe('Beef Mocked for test')
    }
  })

  test('failure query hook', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    const { result } = renderHook(() => useCategoriesQuery(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isError).toBe(true))

    expect(result.current.error).toBeDefined()
  })
})
