import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import type { Character } from '@/types'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return createPageMetadata({ title: 'API' })
    const character = (await res.json()) as Character
    return createPageMetadata({
      title: `${character.name} | API`,
      description:
        character.status && character.species
          ? `${character.name} – ${character.status}, ${character.species}`
          : undefined,
    })
  } catch {
    return createPageMetadata({ title: 'API' })
  }
}

export default function ApiCharacterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
