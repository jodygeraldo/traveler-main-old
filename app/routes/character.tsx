import type { LoaderFunction } from 'remix'
import { Outlet, useLoaderData } from 'remix'

import CharacterList from '~/components/Character/CharacterList'
import type { ICharacter, ITraveler } from '~/types/character'
import {
  getCharacters,
  getUserCharacterOwnership,
} from '~/utils/character.server'

interface LoaderData {
  characters: Array<ITraveler | ICharacter>
}

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const characters = await getCharacters()

  // Todo get this from the session
  const userId = 'user2'
  const characterOwnership = await getUserCharacterOwnership(userId)
  if (!characterOwnership) return { characters }

  const updatedCharaters = characters.map(character => {
    if (characterOwnership.includes(character.name)) {
      character.owned = true
    }
    return character
  })

  return { characters: updatedCharaters }
}

export default function CharacterPage() {
  const { characters } = useLoaderData<LoaderData>()

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
      {/* Primary column */}
      <section
        aria-labelledby="primary-heading"
        className="grid col-span-1 md:col-span-2 overflow-y-auto scrollbar"
      >
        <h1 id="primary-heading" className="sr-only">
          Account
        </h1>
        {/* Your content */}
        <Outlet />
      </section>

      {/* Secondary column (hidden on smaller screens) */}
      <aside className="grid col-span-1 md:row-start-1 h-full relative border-r border-gray-200 bg-primary-800 overflow-y-auto p-6 scrollbar">
        <CharacterList characters={characters} />
      </aside>
    </main>
  )
}
