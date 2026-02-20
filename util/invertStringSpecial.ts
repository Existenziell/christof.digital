export function invertStringSpecial(string: string): string {
  const chars: (string | null)[] = string.split('')
  const lettersArray: string[] = []
  for (let i = 0; i < chars.length; i++) {
    if (/^[a-zA-Z]+$/.test(chars[i]!)) {
      lettersArray.push(chars[i]!)
      chars[i] = null
    }
  }
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === null) {
      const popped = lettersArray.pop()
      if (popped !== undefined) chars[i] = popped
    }
  }
  return chars.join('')
}
