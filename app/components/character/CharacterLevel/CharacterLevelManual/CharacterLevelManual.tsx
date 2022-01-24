import type { FC } from 'react'
import { Form, useLocation } from 'remix'
import invariant from 'tiny-invariant'

import {
  CharacterActionTypeEnum,
  ICharacter,
  ITraveler,
} from '~/types/character'

import CharacterLevelTalentManual from './CharacterLevelTalentManual'

interface Props {
  level: ITraveler['level'] | ICharacter['level']
  character: ICharacter | ITraveler
}

const CharacterLevelManual: FC<Props> = ({ level, character }) => {
  invariant(
    level,
    'This should never happen, unless I forget to pass the level',
  )

  return (
    <Form method="post">
      <div className="grid grid-cols-6 gap-4">
        <input type="hidden" name="name" value={character.name} />
        <div className="col-span-3">
          <label htmlFor="level" className="block text-sm font-medium">
            Level
          </label>
          <input
            type="number"
            name="level"
            id="level"
            className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-primary-300 rounded-md bg-primary-600"
            defaultValue={level.character}
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
            className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-primary-300 rounded-md bg-primary-600"
            defaultValue={level.ascension}
            min={0}
            max={6}
          />
        </div>
      </div>
      <CharacterLevelTalentManual level={level} />
      <button
        type="submit"
        className="mt-5 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Confirm
      </button>
    </Form>
  )
}

export default CharacterLevelManual
