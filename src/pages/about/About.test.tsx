import About from './About'
import { render, screen } from '@testing-library/react'

describe('About page', () => {
  it('the title is visible', () => {
    render(<About />)
    expect(screen.getByText(/About/i)).toBeInTheDocument()
  })
})
