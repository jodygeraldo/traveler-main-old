import type { FC } from 'react'

import { ICharacter } from '~/types/character'

interface Props {
  talent: ICharacter['progression']['talent']
}

const CharacterLevelTalentManual: FC<Props> = ({ talent }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-primary-500 text-2xl">Talent</h2>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium" htmlFor="talent-normal">
            Normal Attack
          </label>
          <input
            type="number"
            name="talent-normal"
            id="talent-normal"
            className="border-primary-300 bg-primary-600 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md shadow-sm sm:text-sm"
            defaultValue={talent[0]}
            min={1}
            max={10}
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium" htmlFor="talent-skill">
            Elemental Skill
          </label>
          <input
            type="number"
            name="talent-skill"
            id="talent-skill"
            className="border-primary-300 bg-primary-600 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md shadow-sm sm:text-sm"
            defaultValue={talent[1]}
            min={1}
            max={13}
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium" htmlFor="talent-burst">
            Elemental Burst
          </label>
          <input
            type="number"
            name="talent-burst"
            id="talent-burst"
            className="border-primary-300 bg-primary-600 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md shadow-sm sm:text-sm"
            defaultValue={talent[2]}
            min={1}
            max={13}
          />
        </div>
      </div>
    </div>
  )
}

export default CharacterLevelTalentManual
