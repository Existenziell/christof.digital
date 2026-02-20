export function downloadTime(filesize: number, trend: number[], observations: number): number {
  const getSum = (array: number[]) => array.reduce((partialSum, a) => partialSum + parseInt(String(a), 10), 0)
  const trendCopy = [...trend]
  const downloaded = getSum(trendCopy)
  const remaining = filesize - downloaded
  const observedElements = trendCopy.splice(trendCopy.length - observations)
  const lastAverage = getSum(observedElements) / observations
  if (lastAverage === 0) return -1
  const result = Math.ceil(remaining / lastAverage)
  if (isNaN(result) || result <= 0) return -1
  return result
}
