export const invertStringSpecial = (string) => {
  const chars = string.split('')
  const lettersArray = [] // Hold all letters in an extra array

  for (let i = 0; i < chars.length; i++) {
    const isLetter = /^[a-zA-Z]+$/.test(chars[i])
    if (isLetter) {
      lettersArray.push(chars[i])
      // Replace all letters with null to be replaced later
      chars[i] = null
    }
  }

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === null) {
      chars[i] = lettersArray.pop()
    }
  }

  const result = chars.join('')
  return result
}
