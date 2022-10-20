import Link from "next/link"

export default function NotFound() {
  return (
    <div className="">
      <h1 className="text-4xl md:text-6xl mb-4 md:mt-8">You just got 404&apos;d</h1>
      <p className="mb-12 text-sm">The page you requested does not exist, sorry.</p>
      <Link href={'/'}><a className="button-sm">Back to Safety</a></Link>
    </div>
  )
}
