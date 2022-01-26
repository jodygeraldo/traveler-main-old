import { json, LoaderFunction, Outlet, useLoaderData } from 'remix'

import type { ICharacter, ITraveler } from '~/types/character'
import { authenticator } from '~/utils/auth.server'
import {
  getCharacters,
  getUpdatedCharacters,
  getUserCharacters,
} from '~/utils/db/character.server'

type LoaderData = Array<ITraveler | ICharacter>
export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  const characters = getCharacters()

  const userCharacters = await getUserCharacters(user.id)

  if (userCharacters.length === 0) {
    return json<LoaderData>(characters, { status: 200 })
  }

  const updatedCharacters = getUpdatedCharacters(userCharacters, characters)

  return json<LoaderData>(updatedCharacters, {
    status: 200,
  })
}

export default function CharactersPage() {
  const characters = useLoaderData<LoaderData>()

  return <Outlet context={characters} />
}
