import {
  CheckCircleIcon,
  XCircleIcon,
  StarIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid'
import clsx from 'clsx'
import { Form, Link } from 'remix'

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

export default function CharacterListItem({
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
    <li className={clsx(!character.ownership && 'opacity-50', 'sm:flex')}>
      <Link
        to={`/character/${character.name}`}
        className="flex flex-1 hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6 justify-between w-full">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src={character.imageUrl}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1 px-4">
              <div>
                <p className="text-sm font-medium text-orange-600 truncate">
                  {character.name}
                </p>
                <div className="md:flex items-end gap-3">
                  <p className="mt-2 text-sm text-gray-500">
                    Lv.{character.level}
                  </p>
                  <span aria-label={`ascension ${character.ascension}`}>
                    {renderStars(character.ascension, character.vision)}
                  </span>
                </div>
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
      <div className="flex items-center p-4 gap-4 sm:w-48 flex-wrap sm:justify-end">
        <Form method="post" replace>
          <button
            type="submit"
            name="ownership"
            value={JSON.stringify(!character.ownership)}
            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
            {character.ownership ? 'Revert ownership' : 'Check as own'}
          </button>
        </Form>
        <Form method="post" replace>
          <button
            type="submit"
            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
            Track Character
          </button>
        </Form>
      </div>
    </li>
  )
}
