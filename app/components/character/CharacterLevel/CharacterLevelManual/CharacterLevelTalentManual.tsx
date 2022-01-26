import type { FC } from 'react'
import invariant from 'tiny-invariant'

import { ICharacter, ITraveler } from '~/types/character'

interface Props {
  talent: ITraveler['level']['talent'] | ICharacter['level']['talent']
}

const travelerTalent: ['anemo', 'geo', 'electro'] = ['anemo', 'geo', 'electro']

const CharacterLevelTalentManual: FC<Props> = ({ talent }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl text-primary-500">Talent</h2>
      {Array.isArray(talent) ? (
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-2">
            <label
              className="block text-sm font-medium"
              htmlFor="talent-normal"
            >
              Normal Attack
            </label>
            <input
              type="number"
              name="talent-normal"
              id="talent-normal"
              className="block w-full rounded-md border-primary-300 bg-primary-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
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
              className="block w-full rounded-md border-primary-300 bg-primary-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
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
              className="block w-full rounded-md border-primary-300 bg-primary-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              defaultValue={talent[2]}
              min={1}
              max={13}
            />
          </div>
        </div>
      ) : (
        <>
          {travelerTalent.map(type => (
            <div key={type}>
              <h2 className="bg-primary-800 text-2xl capitalize">{type}</h2>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">
                  <label
                    className="block text-sm font-medium"
                    htmlFor={`${type}-talent-normal`}
                  >
                    Normal Attack
                  </label>
                  <input
                    type="number"
                    name={`${type}-talent-normal`}
                    id={`${type}-talent-normal`}
                    className="block w-full rounded-md border-primary-300 bg-primary-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    defaultValue={
                      Array.isArray(talent) ? undefined : `${talent[type][0]}`
                    }
                    min={1}
                    max={10}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    className="block text-sm font-medium"
                    htmlFor={`${type}-talent-skill`}
                  >
                    Elemental Skill
                  </label>
                  <input
                    type="number"
                    name={`${type}-talent-skill`}
                    id={`${type}-talent-skill`}
                    className="block w-full rounded-md border-primary-300 bg-primary-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    defaultValue={
                      Array.isArray(talent) ? undefined : `${talent[type][1]}`
                    }
                    min={1}
                    max={13}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    className="block text-sm font-medium"
                    htmlFor={`${type}-talent-burst`}
                  >
                    Elemental Burst
                  </label>
                  <input
                    type="number"
                    name={`${type}-talent-burst`}
                    id={`${type}-talent-burst`}
                    className="block w-full rounded-md border-primary-300 bg-primary-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    defaultValue={
                      Array.isArray(talent) ? undefined : `${talent[type][2]}`
                    }
                    min={1}
                    max={13}
                  />
                </div>
              </div>{' '}
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default CharacterLevelTalentManual
