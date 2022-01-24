import { json, LoaderFunction, Outlet, useLoaderData, useMatches } from 'remix'

import { getCharacters } from '~/data/characters.server'
import type { ICharacter, ITraveler } from '~/types/character'
import { requireUserSession } from '~/utils/auth.server'
import { getUserCharacterOwnership } from '~/utils/character.server'

type LoaderData = Array<ITraveler | ICharacter>

export const loader: LoaderFunction = async ({ request }) => {
  const user = await requireUserSession(request)

  const characters = getCharacters()

  const ownershipData = await getUserCharacterOwnership(user.id)
  if (!ownershipData) return json<LoaderData>(characters)

  const updatedCharaters = characters.map(character => {
    if (ownershipData.characters.includes(character.name)) {
      character.own = true
    }
    return character
  })

  return json<LoaderData>(updatedCharaters)
}

export default function CharactersPage() {
  const characters = useLoaderData<LoaderData>()

  return <Outlet context={characters} />
}
