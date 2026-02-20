export default async function fetchApi(
  ...args: Parameters<typeof fetch>
): Promise<unknown> {
  const res = await fetch(...args)
  return await res.json()
}
