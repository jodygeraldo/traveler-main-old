import type { FC } from 'react'
import { Form } from 'remix'

import { ICharacter } from '~/types/character'

import CharacterLevelManual from './CharacterLevelManual/CharacterLevelManual'
import CharacterLevelTalent from './CharacterLevelTalent'

interface Props {
  character: ICharacter
}

const CharacterLevel: FC<Props> = ({ character }) => {
  return (
    <Form method="post">
      <input type="hidden" name="character-name" value={character.name} />
      <CharacterLevelTalent talent={character.progression.talent} />
    </Form>
  )
}

export default CharacterLevel
