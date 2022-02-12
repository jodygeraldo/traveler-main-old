import {
  BookmarkIcon,
  CheckCircleIcon,
  StarIcon,
  XCircleIcon,
} from '@heroicons/react/solid'
import clsx from 'clsx'
import { Form, Link } from 'remix'

import { Actions } from '~/actions/actions'
import Tooltip from '~/components/Primitive/Tooltip'
import { ICharacterData } from '~/model/Character/CharacterType'
import { toLowerKebabCase, toLowerSnake } from '~/utils/string'

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

export default function CharacterGridItem({
  character,
}: {
  character: ICharacterData
}) {
  return (
    <li
      key={character.name}
      className={clsx(
        !character.ownership && 'opacity-75',
        'col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow',
      )}
    >
      <Link
        to={`/character/${toLowerKebabCase(character.name)}`}
        className="flex h-24 hover:bg-gray-50"
      >
        <div className="flex w-full items-center justify-between space-x-6 truncate p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="truncate text-sm font-medium text-gray-900">
                {character.name}
              </h3>
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
            <p className="mt-1 truncate text-sm text-gray-500">
              Lv.{character.level ?? 1}
            </p>
            <span
              aria-label={`ascension ${character.ascension ?? 0}`}
              className="mt-1 truncate text-sm text-gray-500"
            >
              {renderStars(character.ascension ?? 0, character.vision)}
            </span>
          </div>
        </div>
        <div className="h-full flex-shrink-0 rounded-tr-lg">
          <img
            className="h-full w-full rounded-tr-lg"
            src={`/images/characters/close/${toLowerSnake(character.name)}.png`}
            alt=""
          />
        </div>
      </Link>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <Form
              method="post"
              replace
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center"
            >
              <input type="hidden" name="name" value={character.name} />
              <input
                type="hidden"
                name="id"
                value={character.characterUserId}
              />
              <button
                type="submit"
                name="_action"
                value={
                  character.ownership
                    ? Actions.UNMARK_OWNED
                    : Actions.MARK_OWNED
                }
                className="flex h-full w-full items-center justify-center gap-3 rounded-bl-lg border border-transparent text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                {character.ownership ? (
                  <>
                    <XCircleIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden
                    />
                    <span>Revert ownership</span>
                  </>
                ) : (
                  <>
                    <CheckCircleIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden
                    />
                    <span>Check as own</span>
                  </>
                )}
              </button>
            </Form>
          </div>
          <Form method="post" replace className="-ml-px flex w-0 flex-1">
            <input type="hidden" name="name" value={character.name} />
            <input type="hidden" name="id" value={character.characterUserId} />
            <button
              type="submit"
              name="_action"
              value={
                character.tracked
                  ? Actions.UNMARK_TRACKED
                  : Actions.MARK_TRACKED
              }
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-3 rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              disabled
            >
              Coming Soon
              {/* <BookmarkIcon className="h-5 w-5 text-gray-400" aria-hidden />
              {character.tracked ? 'Untrack Character' : 'Track Character'} */}
            </button>
          </Form>
        </div>
      </div>
    </li>
  )
}
