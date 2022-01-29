import { Item } from '@prisma/client'
import type { FC } from 'react'
import { Form } from 'remix'

import { ICharacter } from '~/types/character'

import CharacterLevelTalent from './CharacterLevelTalent'

interface Props {
  character: ICharacter
  items: Item | null
}

const CharacterLevel: FC<Props> = ({ character, items }) => {
  return (
    <Form method="post">
      <input type="hidden" name="character-name" value={character.name} />
      <CharacterLevelTalent talent={character.progression.talent} />
    </Form>
  )
}

export default CharacterLevel
