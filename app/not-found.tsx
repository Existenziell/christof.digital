import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h1 className="header">You just got 404&apos;d</h1>
      <p className="mb-12 text-sm">The page you requested does not exist, sorry.</p>
      <Link href="/" className="button-sm">Back to Safety</Link>
    </div>
  )
}
