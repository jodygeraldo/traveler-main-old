import type { ActionFunction, LoaderFunction } from 'remix'
import { Outlet, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import CharacterList from '~/components/Character/CharacterList'
import type { ICharacter, ITraveler } from '~/types/character'
import { authenticator, supabaseStrategy } from '~/utils/auth.server'
import {
  getCharacters,
  getUserCharacterOwnership,
} from '~/utils/character.server'
import { getUserDataSession } from '~/utils/user-data.server'

interface LoaderData {
  characters: Array<ITraveler | ICharacter>
}

export const loader: LoaderFunction = async ({
  request,
}): Promise<LoaderData> => {
  const session = await supabaseStrategy.checkSession(request, {
    failureRedirect: '/login',
  })
  invariant(typeof session.user?.id === 'string', 'This should never throw')

  const userDataSession = await getUserDataSession(request)
  console.log(userDataSession.get('userData'))

  const characters = await getCharacters()

  const characterOwnership = await getUserCharacterOwnership(session.user.id)
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
