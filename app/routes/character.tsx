import {
  json,
  LoaderFunction,
  Outlet,
  ShouldReloadFunction,
  useLoaderData,
} from 'remix'

import { requireUserId } from '~/services/auth.server'
import { getAllCharacterDetail } from '~/services/data/characters/character-lookup.server'
import { ICharacterDetail } from '~/types/character'
import { getUserCharacterOwnership } from '~/utils/db/character.server'

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)

  const characters = getAllCharacterDetail()
  const userCharacterOwnership = await getUserCharacterOwnership(userId)

  const updatedCharacters: ICharacterDetail[] = characters.map(character => {
    return {
      ...character,
      ownership: userCharacterOwnership.includes(character.name),
    }
  })

  return json<ICharacterDetail[]>(updatedCharacters, { status: 200 })
}

export default function CharactersPage() {
  const characters = useLoaderData<ICharacterDetail[]>()

  return <Outlet context={characters} />
}

export const unstable_shouldReload: ShouldReloadFunction = ({ submission }) => {
  return !!submission && submission.method !== 'GET'
}
