import type { FC } from 'react'

import { ICharacter, ITraveler } from '~/types/character'

interface Props {
  level: ITraveler['level'] | ICharacter['level']
}

const CharacterLevelTalent: FC<Props> = ({ level }) => {
  return <h1>Automatic Level Up with Inventory items, IMPLETEMENT LATER</h1>
}

export default CharacterLevelTalent
