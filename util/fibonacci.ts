export function fibonacci(depth: number): string {
  let a = 1, b = 0, temp
  const sequence: number[] = [b]
  while (depth > 0) {
    temp = a
    a = a + b
    b = temp
    sequence.push(b)
    depth--
  }
  return sequence.join(', ')
}
