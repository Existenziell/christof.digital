import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type ExternalLinkProps = {
  href: string
  children: ReactNode
  nofollow?: boolean
  rel?: string
} & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'target' | 'rel'>

const DEFAULT_REL = 'noopener noreferrer'

export default function ExternalLink({
  href,
  children,
  nofollow = false,
  rel,
  ...rest
}: ExternalLinkProps) {
  const relValue = [DEFAULT_REL, nofollow && 'nofollow', rel].filter(Boolean).join(' ')
  return (
    <a href={href} target="_blank" rel={relValue} {...rest}>
      {children}
    </a>
  )
}
