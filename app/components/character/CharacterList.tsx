import type { FC } from 'react'

import type { ICharacter, ITraveler } from '~/types/character'

import CharacterItem from './CharacterItem'

interface Props {
  characters: Array<ITraveler | ICharacter>
}

const CharacterList: FC<Props> = ({ characters }) => {
  return (
    <div className="grid grid-cols-4 xs:grid-cols-6 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map(character => (
        <CharacterItem key={character.name} character={character} />
      ))}
    </div>
  )
}

export default CharacterList
