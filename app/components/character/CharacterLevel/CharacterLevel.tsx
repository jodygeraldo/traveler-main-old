import type { FC } from 'react'
import { useFetcher } from 'remix'

import { ICharacter, ITraveler } from '~/types/character'

import CharacterLevelManual from './CharacterLevelManual/CharacterLevelManual'
import CharacterLevelTalent from './CharacterLevelTalent'

interface Props {
  level: ITraveler['level'] | ICharacter['level']
  name: ITraveler['name'] | ICharacter['name']
}

const CharacterLevel: FC<Props> = ({ level, name }) => {
  const fetcher = useFetcher()

  function handleSubmit() {
    fetcher.submit({ data: 'string' })
  }

  return (
    <fetcher.Form method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="character-name" value={name} />
      <CharacterLevelTalent level={level} />
    </fetcher.Form>
  )
}

export default CharacterLevel
