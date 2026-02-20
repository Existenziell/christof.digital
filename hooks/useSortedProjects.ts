import { useMemo, useState, useCallback } from 'react'
import type { Project } from '@/content/projects'

export function useSortedProjects(initialList: Project[]) {
  const [isOlderFirst, setIsOlderFirst] = useState(false)

  const data = useMemo(
    () => (isOlderFirst ? initialList : [...initialList].reverse()),
    [initialList, isOlderFirst]
  )

  const toggleSort = useCallback(() => {
    setIsOlderFirst((prev) => !prev)
  }, [])

  return { data, isOlderFirst, toggleSort }
}
