import { describe, it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { useSortableData } from '@/hooks/useSortableData'

function SortableTest({
  initial,
  initialSortBy = true,
}: {
  initial: number[]
  initialSortBy?: boolean
}) {
  const { data, sortBy, toggleSortBy } = useSortableData(initial, initialSortBy)
  return (
    <div>
      <span data-testid="data">{data.join(',')}</span>
      <span data-testid="sortBy">{String(sortBy)}</span>
      <button type="button" onClick={toggleSortBy}>
        Toggle
      </button>
    </div>
  )
}

describe('useSortableData()', () => {
  it('starts with initial data order when initialSortBy is true', () => {
    render(<SortableTest initial={[1, 2, 3]} />)
    expect(screen.getByTestId('data')).toHaveTextContent('1,2,3')
    expect(screen.getByTestId('sortBy')).toHaveTextContent('true')
  })

  it('starts with reversed data when initialSortBy is false', () => {
    render(<SortableTest initial={[1, 2, 3]} initialSortBy={false} />)
    expect(screen.getByTestId('data')).toHaveTextContent('3,2,1')
    expect(screen.getByTestId('sortBy')).toHaveTextContent('false')
  })

  it('toggle reverses data and flips sortBy', () => {
    render(<SortableTest initial={[1, 2, 3]} />)
    const toggleBtn = screen.getByText('Toggle')
    expect(screen.getByTestId('data')).toHaveTextContent('1,2,3')
    act(() => {
      toggleBtn.click()
    })
    expect(screen.getByTestId('data')).toHaveTextContent('3,2,1')
    expect(screen.getByTestId('sortBy')).toHaveTextContent('false')
    act(() => {
      toggleBtn.click()
    })
    expect(screen.getByTestId('data')).toHaveTextContent('1,2,3')
    expect(screen.getByTestId('sortBy')).toHaveTextContent('true')
  })
})
