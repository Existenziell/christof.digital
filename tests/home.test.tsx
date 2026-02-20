import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('renders the Home page correctly', () => {
    render(<Home />)
    expect(screen.getByTestId('content')).toBeInTheDocument()
    expect(screen.getByTestId('image')).toBeInTheDocument()
  })
})
