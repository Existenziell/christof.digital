import Link from 'next/link'

const ProjectLink = ({ href, children, classes, external }) => {
  if (external) {
    return (
      <a href={href}
        target='_blank'
        rel='noopener noreferrer nofollow'
        className={classes}
        aria-label='Link to Project'
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href}>
      <a className={classes} aria-label='Link to Project'>
        {children}
      </a>
    </Link>
  )
}

export default ProjectLink
