import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { Form, Link } from 'remix'

import { Actions } from '~/actions/actions'
import Tooltip from '~/components/Primitive/Tooltip'
import { ICharacterData } from '~/model/Character/CharacterType'
import { toLowerSnake } from '~/utils/string'

const visionVariant: Record<ICharacterData['vision'], string> = {
  Pyro: 'bg-red-100 text-red-800',
  Anemo: 'bg-emerald-100 text-emerald-800',
  Cryo: 'bg-cyan-100 text-cyan-800',
  Dendro: 'bg-green-100 text-green-800',
  Electro: 'bg-violet-100 text-violet-800',
  Hydro: 'bg-blue-100 text-blue-800',
  Geo: 'bg-yellow-100 text-yellow-800',
}

const ascensionVariant: Record<ICharacterData['vision'], string> = {
  Pyro: 'text-red-200',
  Anemo: 'text-emerald-200',
  Cryo: 'text-cyan-200',
  Dendro: 'text-green-200',
  Electro: 'text-violet-200',
  Hydro: 'text-blue-200',
  Geo: 'text-yellow-200',
}
const ascensionPassVariant: Record<ICharacterData['vision'], string> = {
  Pyro: 'text-red-600',
  Anemo: 'text-emerald-600',
  Cryo: 'text-cyan-600',
  Dendro: 'text-green-600',
  Electro: 'text-violet-600',
  Hydro: 'text-blue-600',
  Geo: 'text-yellow-600',
}

const renderStars = (ascension: number, vision: ICharacterData['vision']) => {
  const starsToRender = []
  for (let index = 0; index < 6; index++) {
    const element = (
      <StarIcon
        key={index}
        className={clsx(
          ascension > index
            ? ascensionPassVariant[vision]
            : ascensionVariant[vision],
          'inline-block h-5 w-5',
        )}
        aria-hidden="true"
      />
    )
    starsToRender.push(element)
  }
  return starsToRender
}

export default function CharacterListItem({
  character,
}: {
  character: ICharacterData
}) {
  return (
    <li className={clsx(!character.ownership && 'opacity-75', 'sm:flex')}>
      <Link
        to={`/character/${character.name}`}
        className="flex flex-1 hover:bg-gray-50"
      >
        <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src={`/images/characters/close/${toLowerSnake(
                  character.name,
                )}.png`}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1 px-4">
              <div className="flex items-center space-x-3">
                <p className="truncate text-sm font-medium text-orange-600">
                  {character.name}
                </p>
                <Tooltip content={character.vision}>
                  <span
                    aria-label={character.vision}
                    className={clsx(
                      visionVariant[character.vision],
                      'hint--bottom-left hint--rounded inline-flex flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium',
                    )}
                  >
                    <img
                      className="h-4 w-4"
                      width={16}
                      height={16}
                      src={`/images/elements/${character.vision.toLowerCase()}.png`}
                      alt=""
                    />
                  </span>
                </Tooltip>
              </div>
              <div className="items-end gap-3 md:flex">
                <p className="mt-2 text-sm text-gray-500">
                  Lv.{character.level ?? 1}
                </p>
                <span aria-label={`ascension ${character.ascension ?? 0}`}>
                  {renderStars(character.ascension ?? 0, character.vision)}
                </span>
              </div>
            </div>
          </div>
          <div>
            <ChevronRightIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
      <div className="flex flex-wrap items-center gap-4 p-4 sm:w-48 sm:justify-end">
        <Form method="post" replace>
          <input type="hidden" name="name" value={character.name} />
          <input type="hidden" name="id" value={character.characterUserId} />
          <button
            type="submit"
            name="_action"
            value={
              character.ownership ? Actions.UNMARK_OWNED : Actions.MARK_OWNED
            }
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
          >
            {character.ownership ? 'Revert ownership' : 'Check as own'}
          </button>
        </Form>
        <Form method="post" replace>
          <input type="hidden" name="name" value={character.name} />
          <input type="hidden" name="id" value={character.characterUserId} />
          <button
            type="submit"
            name="_action"
            value={
              character.tracked ? Actions.UNMARK_TRACKED : Actions.MARK_TRACKED
            }
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
            disabled={true}
          >
            Coming Soon
            {/* {character.tracked ? 'Untrack Character' : 'Track Character'} */}
          </button>
        </Form>
      </div>
    </li>
  )
}
