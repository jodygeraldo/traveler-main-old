import type { FC } from 'react'

import { ICharacter, ICharacterDetail } from '~/types/character'
import { ItemTypes } from '~/types/item'

interface Props {
  character: ICharacterDetail
  items?: ItemTypes
}

const CharacterLevel: FC<Props> = ({ character, items }) => {
  return (
    <>
      <input type="hidden" name="character-name" value={character.name} />
    </>
  )
}

export default CharacterLevel
