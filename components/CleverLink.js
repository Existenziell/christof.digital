import Link from 'next/link'

const CleverLink = ({ href, children, classes, external }) => {
  if (external) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer nofollow' className={classes}>{children}</a>
    )
  }
  return (
    <Link href={href}>
      <a className={classes}>
        {children}
      </a>
    </Link>
  )
}

export default CleverLink
