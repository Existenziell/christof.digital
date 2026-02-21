import Link from 'next/link'

interface ProjectLinkProps {
  href: string
  children: React.ReactNode
  classes?: string
  external?: boolean
  'aria-label'?: string
}

export default function ProjectLink({ href, children, classes, external, 'aria-label': ariaLabel }: ProjectLinkProps) {
  const label = ariaLabel ?? 'Link to Project'
  if (external) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer nofollow' className={classes} aria-label={label}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes} aria-label={label}>
      {children}
    </Link>
  )
}
