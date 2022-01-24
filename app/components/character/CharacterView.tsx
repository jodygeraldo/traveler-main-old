import type { FC } from 'react'
import { Form, useTransition } from 'remix'

import { CharacterName, ICharacter, ITraveler } from '~/types/character'

interface Props {
  character: ICharacter | ITraveler
}

const og7character: Array<CharacterName> = [
  'Traveler',
  'Amber',
  'Noelle',
  'Lisa',
  'Kaeya',
  'Barbara',
  'Xiangling',
]

const CharacterView: FC<Props> = ({ character }) => {
  const transition = useTransition()

  return (
    <div className="flex justify-between items-start">
      <h1 className="text-6xl">{character.name}</h1>
      {og7character.includes(character.name) ? null : (
        <Form replace method="post">
          <input type="hidden" name="name" value={character.name} />
          <input type="hidden" name="own" value={`${!character.own}`} />
          <button className="bg-primary-400 rounded-md shadow-md shadow-primary-800 px-4 py-2 ">
            {transition.submission
              ? 'Saving...'
              : character.own
              ? 'Mark as Unowned'
              : 'Mark as Owned'}
          </button>
        </Form>
      )}
    </div>
  )
}

export default CharacterView
