import type { LoaderFunction } from 'remix'
import { json, Outlet, useLoaderData } from 'remix'

import CharacterList from '~/components/Character/CharacterList'
import { getCharacters } from '~/data/characters.server'
import type { ICharacter, ITraveler } from '~/types/character'
import { requireUserSession } from '~/utils/auth.server'
import { getUserCharacterOwnership } from '~/utils/character.server'

type LoaderData = Array<ITraveler | ICharacter>

export const loader: LoaderFunction = async ({ request }) => {
  const user = await requireUserSession(request)

  const characters = getCharacters()

  const characterOwnership = await getUserCharacterOwnership(user.id)
  if (!characterOwnership) return json<LoaderData>(characters)

  const updatedCharaters = characters.map(character => {
    if (characterOwnership.includes(character.name)) {
      character.own = true
    }
    return character
  })

  return json<LoaderData>(updatedCharaters)
}

export default function CharacterPage() {
  const characters = useLoaderData<LoaderData>()

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
