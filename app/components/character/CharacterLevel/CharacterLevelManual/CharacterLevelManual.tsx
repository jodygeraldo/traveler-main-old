import type { FC } from 'react'
import { Form } from 'remix'

import { ICharacter, ITraveler } from '~/types/character'

import CharacterLevelTalentManual from './CharacterLevelTalentManual'

interface Props {
  character: ICharacter | ITraveler
}

const CharacterLevelManual: FC<Props> = ({ character }) => {
  const id = character.dbId ?? 'NEW'

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
            className="block w-full rounded-md border-primary-300 bg-primary-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            defaultValue={character.level.character}
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
            className="block w-full rounded-md border-primary-300 bg-primary-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            defaultValue={character.level.ascension}
            min={0}
            max={6}
          />
        </div>
      </div>
      <CharacterLevelTalentManual talent={character.level.talent} />
      <button
        type="submit"
        className="border-transparent bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 mt-5 inline-flex items-center rounded-md border px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        Confirm
      </button>
    </Form>
  )
}

export default CharacterLevelManual
