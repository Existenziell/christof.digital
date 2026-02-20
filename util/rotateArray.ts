export function rotateArray<T>(input: T[], steps: number): T[] {
  if (steps === 0) return input
  const arr = [...input]
  if (steps > arr.length) {
    if (steps % arr.length === 0) steps = arr.length
    else steps = Math.floor(steps % arr.length)
  }
  const changed: T[] = []
  const unchanged = arr.splice(0, arr.length - steps)
  while (steps) {
    const lastElement = arr.pop()
    if (lastElement !== undefined) changed.unshift(lastElement)
    steps--
  }
  return changed.concat(unchanged)
}
