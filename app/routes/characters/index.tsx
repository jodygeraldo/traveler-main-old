import { useOutletContext } from 'remix'

import CharacterItem from '~/components/Character/CharacterItem'
import type { ICharacter, ITraveler } from '~/types/character'

export default function CharactersRoute() {
  const characters = useOutletContext<Array<ITraveler | ICharacter>>()

  return (
    <div className="flex flex-wrap gap-4">
      {characters.map(character => (
        <CharacterItem key={character.name} character={character} />
      ))}
    </div>
  )
}
