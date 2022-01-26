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
  const id = character.dbId ?? 'NEW'

  return (
    <div className="flex items-start justify-between">
      <h1 className="text-6xl">{character.name}</h1>
      {og7character.includes(character.name) ? null : (
        <Form replace method="post">
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="name" value={character.name} />
          <input type="hidden" name="toggle-own" value={`${!character.own}`} />
          <button className="rounded-md bg-primary-400 px-4 py-2 shadow-md shadow-primary-800 ">
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
