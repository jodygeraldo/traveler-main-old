import { Item } from '@prisma/client'
import { json, LoaderFunction, Outlet, useLoaderData } from 'remix'

import { authenticator } from '~/services/auth.server'
import { ICharacter } from '~/types/character'
import {
  getCharacters,
  getUpdatedCharacters,
  getUserCharacters,
} from '~/utils/db/character.server'
import { getUserItems } from '~/utils/db/item.server'

interface LoaderData {
  characters: ICharacter[]
  userItems?: Item | null
}
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
    return json<LoaderData>({ characters }, { status: 200 })
  }

  const userItems = await getUserItems(user.id)

  const updatedCharacters = getUpdatedCharacters(userCharacters, characters)

  return json<LoaderData>(
    { characters: updatedCharacters, userItems },
    {
      status: 200,
    },
  )
}

export default function CharactersPage() {
  const { characters } = useLoaderData<LoaderData>()

  return <Outlet context={characters} />
}
