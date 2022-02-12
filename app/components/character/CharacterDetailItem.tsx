import { PaperClipIcon } from '@heroicons/react/solid'
import clsx from 'clsx'

import { ICharacter } from '~/model/Character/CharacterType'
import { toLowerSnake } from '~/utils/string'

export default function CharacterDetailItems({
  character,
}: {
  character: ICharacter
}) {
  const characterArray = [
    { kind: 'Vision', value: character.vision, image: true },
    { kind: 'Weapon', value: character.weapon, image: true },
    { kind: 'Rarity', value: character.rarity, image: false },
    { kind: 'Level', value: character.progression?.level ?? 1, image: false },
    {
      kind: 'Ascension',
      value: character.progression?.ascension ?? 0,
      image: false,
    },
    {
      kind: 'Normal Attack Level',
      value: character.progression?.talent[0] ?? 1,
      image: false,
    },
    {
      kind: 'Elemental Skill Level',
      value: character.progression?.talent[1] ?? 1,
      image: false,
    },
    {
      kind: 'Elemental Burst Level',
      value: character.progression?.talent[2] ?? 1,
      image: false,
    },
  ]

  const ascensionMaterial = [
    { kind: 'Common', value: character.material.common },
    { kind: 'Boss', value: character.material.ascensionBoss },
    { kind: 'Gem', value: character.material.ascensionGem },
    { kind: 'Local Specialty', value: character.material.localSpecialty },
  ]

  const talentMaterial = [
    {
      kind: 'Common',
      value: character.material.talentCommon ?? character.material.common,
    },
    { kind: 'Boss', value: character.material.talentBoss },
    { kind: 'Book', value: character.material.talentBook },
    { kind: 'Crown', value: character.material.crown },
  ]

  return (
    <>
      {characterArray.map(({ kind, value, image }, idx) => (
        <div
          key={kind}
          className={clsx(
            idx % 2 === 0 ? 'bg-gray-50' : 'bg-white',
            'px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6',
          )}
        >
          <dt className="text-sm font-medium text-gray-500">{kind}</dt>
          <dd className="mt-1 flex items-center gap-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {image ? (
              kind === 'Vision' ? (
                <img
                  className="w-8 sm:w-10"
                  height={40}
                  src={`/images/elements/${value}.png`}
                  alt=""
                />
              ) : (
                <img
                  className="w-8 sm:w-10"
                  height={40}
                  src={`/images/weapon_types/${value}.png`}
                  alt=""
                />
              )
            ) : null}
            <span>{value}</span>
          </dd>
        </div>
      ))}
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Ascension Material
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul
            role="list"
            className="divide-y divide-gray-200 rounded-md border border-gray-200"
          >
            {ascensionMaterial.map(({ value }) =>
              value === undefined ? null : (
                <li
                  key={value}
                  className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                >
                  <div className="flex w-0 flex-1 items-center">
                    <img
                      className="w-8 sm:w-10"
                      height={40}
                      src={`/images/items/${toLowerSnake(value)}.png`}
                      alt=""
                    />
                    <span className="ml-2 w-0 flex-1 truncate">{value}</span>
                  </div>
                </li>
              ),
            )}
          </ul>
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Talent Material</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul
            role="list"
            className="divide-y divide-gray-200 rounded-md border border-gray-200"
          >
            {talentMaterial.map(({ value }) =>
              Array.isArray(value) ? (
                value.map(v => (
                  <li
                    key={v}
                    className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                  >
                    <div className="flex w-0 flex-1 items-center">
                      <img
                        className="w-8 sm:w-10"
                        height={40}
                        src={`/images/items/${toLowerSnake(v)}.png`}
                        alt=""
                      />
                      <span className="ml-2 w-0 flex-1 truncate">{v}</span>
                    </div>
                  </li>
                ))
              ) : (
                <li
                  key={value}
                  className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                >
                  <div className="flex w-0 flex-1 items-center">
                    <img
                      className="w-8 sm:w-10"
                      height={40}
                      src={`/images/items/${toLowerSnake(value)}.png`}
                      alt=""
                    />
                    <span className="ml-2 w-0 flex-1 truncate">{value}</span>
                  </div>
                </li>
              ),
            )}
          </ul>
        </dd>
      </div>
    </>
  )
}
