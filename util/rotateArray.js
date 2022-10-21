export const rotateArray = (input, steps) => {
  if (steps === 0) return input

  // Deal with overflow
  if (steps > input.length) {
    if (steps % input.length === 0) {
      steps = input.length
    } else {
      steps = Math.floor(steps % input.length)
    }
  }

  let changed = []
  const unchanged = input.splice(0, input.length - steps)

  // Loop 'steps' times
  while (steps) {
    const lastElement = input.pop()
    // Push last Element onto first position of array
    changed.unshift(lastElement)
    steps--
  }

  const result = changed.concat(unchanged)
  return result
}
