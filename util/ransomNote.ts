export function ransomNote(note: string, magazine: string): boolean {
  const magazineWords = magazine.split(' ')
  const magazineHash: Record<string, number> = {}
  magazineWords.forEach((word) => {
    if (!magazineHash[word]) magazineHash[word] = 0
    magazineHash[word]++
  })
  const noteWords = note.split(' ')
  let possible = true
  noteWords.forEach((word) => {
    if (magazineHash[word]) {
      magazineHash[word]--
      if (magazineHash[word] < 0) possible = false
    } else possible = false
  })
  return possible
}
