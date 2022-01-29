import { Item } from '@prisma/client'
import { ActionFunction, useMatches, useOutletContext } from 'remix'

import CharacterLevel from '~/components/Character/CharacterLevel/CharacterLevel'
import { ICharacter } from '~/types/character'

export const action: ActionFunction = async ({ request, params }) => {
  return null
}

export default function CharacterEditWithInventoryRoute() {
  const userItems = useMatches().filter(
    match => match.id === 'routes/character/$name',
  )[0].data.userItems as Item | null
  console.log(userItems)

  const character = useOutletContext<ICharacter>()

  return <CharacterLevel character={character} />
}
