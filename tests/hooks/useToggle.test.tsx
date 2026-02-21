import { describe, it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { useToggle } from '@/hooks/useToggle'

function ToggleTest({ initial = false }: { initial?: boolean }) {
  const [value, toggle, setValue] = useToggle(initial)
  return (
    <div>
      <span data-testid="value">{String(value)}</span>
      <button type="button" onClick={toggle}>
        Toggle
      </button>
      <button type="button" onClick={() => setValue(false)}>
        Set false
      </button>
      <button type="button" onClick={() => setValue(true)}>
        Set true
      </button>
    </div>
  )
}

describe('useToggle()', () => {
  it('starts with initial false', () => {
    render(<ToggleTest />)
    expect(screen.getByTestId('value')).toHaveTextContent('false')
  })

  it('starts with initial true when passed', () => {
    render(<ToggleTest initial />)
    expect(screen.getByTestId('value')).toHaveTextContent('true')
  })

  it('toggles value when toggle is called', () => {
    render(<ToggleTest />)
    const toggleBtn = screen.getByText('Toggle')
    expect(screen.getByTestId('value')).toHaveTextContent('false')
    act(() => {
      toggleBtn.click()
    })
    expect(screen.getByTestId('value')).toHaveTextContent('true')
    act(() => {
      toggleBtn.click()
    })
    expect(screen.getByTestId('value')).toHaveTextContent('false')
  })

  it('setValue sets value directly', () => {
    render(<ToggleTest initial />)
    expect(screen.getByTestId('value')).toHaveTextContent('true')
    act(() => {
      screen.getByText('Set false').click()
    })
    expect(screen.getByTestId('value')).toHaveTextContent('false')
    act(() => {
      screen.getByText('Set true').click()
    })
    expect(screen.getByTestId('value')).toHaveTextContent('true')
  })
})
