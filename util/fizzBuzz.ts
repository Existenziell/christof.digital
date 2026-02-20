export function fizzBuzz(input: number): string {
  const output: (number | string)[] = []
  for (let i = 1; i <= input; i++) {
    if (i % 6 === 0) output.push('Fizz Buzz')
    else if (i % 2 === 0) output.push('Fizz')
    else if (i % 3 === 0) output.push('Buzz')
    else output.push(i)
  }
  return output.join('')
}
