import type { FC } from 'react'
import { Form, useFetcher } from 'remix'

import { ICharacter, ITraveler } from '~/types/character'

import CharacterLevelManual from './CharacterLevelManual/CharacterLevelManual'
import CharacterLevelTalent from './CharacterLevelTalent'

interface Props {
  character: ITraveler | ICharacter
}

const CharacterLevel: FC<Props> = ({ character }) => {
  return (
    <Form method="post">
      <input type="hidden" name="character-name" value={character.name} />
      <CharacterLevelTalent talent={character.level.talent} />
    </Form>
  )
}

export default CharacterLevel
