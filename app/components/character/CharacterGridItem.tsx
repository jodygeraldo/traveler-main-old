import {
  CheckCircleIcon,
  XCircleIcon,
  StarIcon,
  BookmarkIcon,
} from '@heroicons/react/solid'
import clsx from 'clsx'
import { Form, Link } from 'remix'

const visionVariant: Record<'Pyro', string> = {
  Pyro: 'bg-red-100 text-red-800',
}

const ascensionVariant: Record<'Pyro', string> = {
  Pyro: 'text-red-200',
}
const ascensionPassVariant: Record<'Pyro', string> = {
  Pyro: 'text-red-600',
}

const renderStars = (ascension: number, vision: string) => {
  const starsToRender = []
  for (let index = 0; index < 6; index++) {
    const element = (
      <StarIcon
        className={clsx(
          ascension > index
            ? ascensionPassVariant[vision]
            : ascensionVariant[vision],
          'w-5 h-5 inline-block'
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
  character: {
    name: string
    vision: string
    level: number
    ascension: number
    ownership: boolean
    imageUrl: string
  }
}) {
  return (
    <li
      key={character.name}
      className={clsx(
        !character.ownership && 'opacity-50',
        'col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200'
      )}>
      <Link
        to={`/character/${character.name.toLowerCase()}`}
        className="flex h-24 hover:bg-gray-50">
        <div className="w-full flex items-center justify-between p-6 space-x-6 truncate">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-gray-900 text-sm font-medium truncate">
                {character.name}
              </h3>
              <span
                aria-label={character.vision}
                className={clsx(
                  visionVariant[character.vision],
                  'flex-shrink-0 inline-flex px-2 py-0.5 text-xs font-medium rounded-full hint--bottom-left hint--rounded'
                )}>
                <img
                  className="w-4 h-4"
                  width={16}
                  height={16}
                  src={`/images/${character.vision.toLowerCase()}.png`}
                  alt=""
                />
              </span>
            </div>
            <p className="mt-1 text-gray-500 text-sm truncate">
              Lv.{character.level}
            </p>
            <p className="mt-1 text-gray-500 text-sm truncate">
              {renderStars(character.ascension, character.vision)}
            </p>
          </div>
        </div>
        <div className="h-full flex-shrink-0 rounded-tr-lg">
          <img
            className="w-full h-full bg-gray-300 rounded-tr-lg"
            src={character.imageUrl}
            alt=""
          />
        </div>
      </Link>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <Form
              method="post"
              replace
              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center">
              <button
                type="submit"
                name="ownership"
                value={JSON.stringify(!character.ownership)}
                className="w-full h-full flex items-center justify-center gap-3 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                {character.ownership ? (
                  <>
                    <XCircleIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden
                    />
                    <span>Revert ownership</span>
                  </>
                ) : (
                  <>
                    <CheckCircleIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden
                    />
                    <span>Check as own</span>
                  </>
                )}
              </button>
            </Form>
          </div>
          <Form className="-ml-px w-0 flex-1 flex">
            <button
              type="submit"
              name="track"
              value={character.name}
              className="relative w-0 flex-1 inline-flex gap-3 items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
              <BookmarkIcon className="h-5 w-5 text-gray-400" aria-hidden />
              <span>Track Character</span>
            </button>
          </Form>
        </div>
      </div>
    </li>
  )
}
