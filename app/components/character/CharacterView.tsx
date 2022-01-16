import type { FC } from 'react'

import type { ICharacter, ITraveler } from '~/types/character'

interface Props {
  character: ICharacter | ITraveler
}

const CharacterView: FC<Props> = ({ character }) => {
  return <div>{character.name}</div>
}

export default CharacterView
