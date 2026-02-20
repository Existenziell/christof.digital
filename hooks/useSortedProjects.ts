import { useMemo, useState, useCallback } from 'react'
import type { Project } from '@/lib/projects'

export function useSortedProjects(initialList: Project[]) {
  const [isNewerFirst, setIsNewerFirst] = useState(false)

  const data = useMemo(
    () => (isNewerFirst ? [...initialList].reverse() : initialList),
    [initialList, isNewerFirst]
  )

  const toggleSort = useCallback(() => {
    setIsNewerFirst((prev) => !prev)
  }, [])

  return { data, isNewerFirst, toggleSort }
}
