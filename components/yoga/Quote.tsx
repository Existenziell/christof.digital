import type { QuoteProps } from '@/types'

export default function Quote({ text, classes = '' }: QuoteProps) {
  return (
    <blockquote
      className={`quote ${classes}`}
    >
      <span
        className="absolute left-2 top-2 font-serif text-3xl md:text-4xl text-cta/70 leading-none select-none"
        aria-hidden
      >
        &ldquo;
      </span>
      <p className="font-serif text-lg md:text-xl italic">
        {text}
      </p>
      <span
        className="absolute right-2 top-2 font-serif text-3xl md:text-4xl text-cta/70 leading-none select-none"
        aria-hidden
      >
        &rdquo;
      </span>
    </blockquote>
  )
}
