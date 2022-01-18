import type { FC } from 'react'

import { ICharacter, ITraveler } from '~/types/character'

interface Props {
  level: ITraveler['level'] | ICharacter['level']
}

const travelerTalent: ['anemo', 'geo', 'electro'] = ['anemo', 'geo', 'electro']

const CharacterLevelTalentManual: FC<Props> = ({ level }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-primary-500 text-2xl">Talent</h2>
      {Array.isArray(level.talent) ? (
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
              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-primary-300 rounded-md bg-primary-600"
              defaultValue={level.talent[0]}
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
              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-primary-300 rounded-md bg-primary-600"
              defaultValue={level.talent[1]}
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
              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-primary-300 rounded-md bg-primary-600"
              defaultValue={level.talent[2]}
              min={1}
              max={13}
            />
          </div>
        </div>
      ) : (
        <>
          {travelerTalent.map(type => (
            <>
              <h2 className="text-2xl bg-primary-800 capitalize">{type}</h2>
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
                    className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-primary-300 rounded-md bg-primary-600"
                    defaultValue={
                      (level.talent as ITraveler['level']['talent'])[type][0]
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
                    className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-primary-300 rounded-md bg-primary-600"
                    defaultValue={
                      (level.talent as ITraveler['level']['talent'])[type][1]
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
                    className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-primary-300 rounded-md bg-primary-600"
                    defaultValue={
                      (level.talent as ITraveler['level']['talent'])[type][2]
                    }
                    min={1}
                    max={13}
                  />
                </div>
              </div>{' '}
            </>
          ))}
        </>
      )}
    </div>
  )
}

export default CharacterLevelTalentManual
