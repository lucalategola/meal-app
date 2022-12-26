import About from './About'
import { render, screen } from '@testing-library/react'

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<About />)
    expect(screen.getByText(/About/i)).toBeInTheDocument()
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
