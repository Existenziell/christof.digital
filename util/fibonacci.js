export const fibonacci = (depth) => {
  let a = 1, b = 0, temp
  let sequence = [b]

  while (depth > 0) {
    temp = a
    a = a + b
    b = temp
    sequence.push(b)
    depth--
  }

  return sequence.join(', ')
}
