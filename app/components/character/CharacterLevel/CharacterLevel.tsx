import type { FC } from 'react'
import { Form, useFetcher } from 'remix'

import { ICharacter, ITraveler } from '~/types/character'

import CharacterLevelManual from './CharacterLevelManual/CharacterLevelManual'
import CharacterLevelTalent from './CharacterLevelTalent'

interface Props {
  level: ITraveler['level'] | ICharacter['level']
  character: ITraveler | ICharacter
}

const CharacterLevel: FC<Props> = ({ level, character }) => {
  return (
    <Form method="post">
      <input type="hidden" name="character-name" value={character.name} />
      <CharacterLevelTalent level={level} />
    </Form>
  )
}

export default CharacterLevel
