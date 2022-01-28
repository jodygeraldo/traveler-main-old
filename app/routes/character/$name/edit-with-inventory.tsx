import { Item } from '@prisma/client'
import { useMatches, useOutletContext } from 'remix'

import CharacterLevel from '~/components/Character/CharacterLevel/CharacterLevel'
import { ICharacter } from '~/types/character'

export default function CharacterEditWithInventoryRoute() {
  const userItems = useMatches().filter(
    match => match.id === 'routes/characters',
  )[0].data.userItems as Item | null
  console.log(userItems)

  const character = useOutletContext<ICharacter>()

  return <CharacterLevel character={character} />
}
