export function timeToType(digits: string, num: string): number {
  let time = 0
  for (let i = 0; i < num.length; i++) {
    const currentIndex = digits.indexOf(num[i])
    let lastIndex = digits.indexOf(num[i - 1])
    if (lastIndex < 0) lastIndex = time
    time += Math.abs(currentIndex - lastIndex)
  }
  return time
}
