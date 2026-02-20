import Link from 'next/link'

interface ProjectLinkProps {
  href: string
  children: React.ReactNode
  classes?: string
  external?: boolean
}

export default function ProjectLink({ href, children, classes, external }: ProjectLinkProps) {
  if (external) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer nofollow' className={classes} aria-label='Link to Project'>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes} aria-label='Link to Project'>
      {children}
    </Link>
  )
}
