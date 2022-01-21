import type { FC } from 'react'
import { Form } from 'remix'

import {
  CharacterActionTypeEnum,
  ICharacter,
  ITraveler,
} from '~/types/character'

import CharacterLevelTalentManual from './CharacterLevelTalentManual'

interface Props {
  level: ITraveler['level'] | ICharacter['level']
  name: ITraveler['name'] | ICharacter['name']
}

const CharacterLevelManual: FC<Props> = ({ level, name }) => {
  return (
    <Form replace method="post">
      <div className="grid grid-cols-6 gap-4">
        <input type="hidden" name="character-name" value={name} />
        <div className="col-span-3">
          <label
            htmlFor="character-level"
            className="block text-sm font-medium"
          >
            Level
          </label>
          <input
            type="number"
            name="character-level"
            id="character-level"
            className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-primary-300 rounded-md bg-primary-600"
            defaultValue={level.character}
            min={1}
            max={90}
          />
        </div>
        <div className="col-span-3">
          <label
            htmlFor="character-ascension"
            className="block text-sm font-medium"
          >
            Ascension
          </label>
          <input
            type="number"
            name="character-ascension"
            id="character-ascension"
            className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-primary-300 rounded-md bg-primary-600"
            defaultValue={level.ascension}
            min={0}
            max={6}
          />
        </div>
      </div>
      <CharacterLevelTalentManual level={level} />
      <button
        name="_action"
        value={CharacterActionTypeEnum.Munual}
        type="submit"
        className="mt-5 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Confirm
      </button>
    </Form>
  )
}

export default CharacterLevelManual
