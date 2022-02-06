import type { FC } from 'react'
import { Form, useTransition } from 'remix'

import { ICharacter, ICharacterDetail } from '~/types/character'

interface Props {
  character: ICharacterDetail
  progression: ICharacter['progression']
  id?: string
}

const CharacterView: FC<Props> = ({ character, progression, id }) => {
  const transition = useTransition()

  return (
    <div className="flex items-start justify-between">
      <h1 className="text-6xl">{character.name}</h1>
      <Form replace method="post">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="name" value={character.name} />
        <input
          type="hidden"
          name="toggle-own"
          value={`${!character.ownership}`}
        />
        <button
          disabled={transition.state === 'submitting'}
          className="bg-primary-400 shadow-primary-800 rounded-md px-4 py-2 shadow-md "
        >
          {transition.submission
            ? 'Saving...'
            : character.ownership
            ? 'Mark as Unowned'
            : 'Mark as Owned'}
        </button>
      </Form>
    </div>
  )
}

export default CharacterView
