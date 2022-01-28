import { json, LoaderFunction, Outlet, useLoaderData } from 'remix'

import { authenticator } from '~/services/auth.server'
import { ICharacter } from '~/types/character'
import {
  getCharacters,
  getUpdatedCharacters,
  getUserCharacters,
} from '~/utils/db/character.server'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  const characters = getCharacters()

  const userCharacters = (await getUserCharacters(user.id)) as {
    id: string
    name: string
    level: number
    ascension: number
    // its should be 3 number, prisma doesn't support it but I make it sure it's always 3 numbers
    talent: [number, number, number]
  }[]

  if (userCharacters.length === 0) {
    return json<ICharacter[]>(characters, { status: 200 })
  }

  const updatedCharacters = getUpdatedCharacters(userCharacters, characters)

  return json<ICharacter[]>(updatedCharacters, {
    status: 200,
  })
}

export default function CharactersPage() {
  const characters = useLoaderData<ICharacter[]>()

  return <Outlet context={characters} />
}
