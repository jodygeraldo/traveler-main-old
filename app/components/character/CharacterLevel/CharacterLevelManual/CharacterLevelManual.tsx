import type { FC } from 'react'
import { Form } from 'remix'

import { ICharacter } from '~/types/character'

import CharacterLevelTalentManual from './CharacterLevelTalentManual'

interface Props {
  character: ICharacter
}

const CharacterLevelManual: FC<Props> = ({ character }) => {
  const id = character.id ?? 'NEW'

  return (
    <Form method="post">
      <div className="grid grid-cols-6 gap-4">
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
            defaultValue={character.progression.level}
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
            defaultValue={character.progression.ascension}
            min={0}
            max={6}
          />
        </div>
      </div>
      <CharacterLevelTalentManual talent={character.progression.talent} />
      <button
        type="submit"
        className="mt-5 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Confirm
      </button>
    </Form>
  )
}

export default CharacterLevelManual
