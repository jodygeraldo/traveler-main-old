import type { FC } from 'react'

import { ICharacter } from '~/types/character'

interface Props {
  talent: ICharacter['progression']['talent']
}

const CharacterLevelTalent: FC<Props> = ({ talent }) => {
  return <h1>Automatic Level Up with Inventory items, IMPLETEMENT LATER</h1>
}

export default CharacterLevelTalent
