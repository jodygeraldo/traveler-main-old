import type { FC } from 'react'

import { ICharacter, ITraveler } from '~/types/character'

interface Props {
  talent: ITraveler['level']['talent'] | ICharacter['level']['talent']
}

const CharacterLevelTalent: FC<Props> = ({ talent }) => {
  return <h1>Automatic Level Up with Inventory items, IMPLETEMENT LATER</h1>
}

export default CharacterLevelTalent
