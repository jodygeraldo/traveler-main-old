import { useOutletContext } from 'remix'

import CharacterLevel from '~/components/Character/CharacterLevel/CharacterLevel'
import { ICharacter, ITraveler } from '~/types/character'

export default function CharacterEditWithInventoryRoute() {
  const { character, level } = useOutletContext<{
    character: ICharacter | ITraveler
    level: ICharacter['level'] | ITraveler['level']
  }>()

  return <CharacterLevel character={character} level={level} />
}
