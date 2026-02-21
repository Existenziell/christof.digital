'use client'

import { useState } from 'react'

export function useSortableData<T>(initial: T[], initialSortBy = true) {
  const [data, setData] = useState(
    initialSortBy ? initial : initial.slice().reverse()
  )
  const [sortBy, setSortBy] = useState(initialSortBy)

  const toggleSortBy = () => {
    setData((d) => d.slice().reverse())
    setSortBy((s) => !s)
  }

  return { data, sortBy, toggleSortBy }
}
