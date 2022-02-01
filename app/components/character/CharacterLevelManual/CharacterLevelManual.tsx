import type { FC } from 'react'

import { ICharacter, ICharacterDetail } from '~/types/character'

interface Props {
  character: ICharacterDetail
  progression: ICharacter['progression']
  id?: string
}

const CharacterLevelManual: FC<Props> = ({ character, progression, id }) => {
  return (
    <fieldset className="mt-2 mb-4 grid grid-cols-6 gap-4">
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="name" value={character.name} />
      <div className="col-span-3">
        <label htmlFor="level" className="block text-sm font-medium">
          Level
        </label>
        <input
          type="number"
          name="level"
          id="level"
          className="border-primary-300 bg-primary-600 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md shadow-sm sm:text-sm"
          defaultValue={progression.level}
          min={1}
          max={90}
        />
      </div>
      <div className="col-span-3">
        <label htmlFor="ascension" className="block text-sm font-medium">
          Ascension
        </label>
        <input
          type="number"
          name="ascension"
          id="ascension"
          className="border-primary-300 bg-primary-600 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md shadow-sm sm:text-sm"
          defaultValue={progression.ascension}
          min={0}
          max={6}
        />
      </div>
    </fieldset>
  )
}

export default CharacterLevelManual
