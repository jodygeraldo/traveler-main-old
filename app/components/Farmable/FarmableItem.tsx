import clsx from 'clsx'

import { IFarmable } from '~/model/Farmable/FarmableType'
import { stringToLowerSnake } from '~/utils/string'

import Tooltip from '../Primitive/Tooltip'

interface FarmableItemProps {
  item: IFarmable
}

const characterRarity: Record<4 | 5, string> = {
  4: 'bg-item-4',
  5: 'bg-item-5',
}

export default ({ item }: FarmableItemProps) => (
  <li
    key={item.name}
    className="flex flex-col items-start justify-between gap-8 px-6 py-4 sm:flex-row sm:gap-10"
  >
    <div className="flex flex-shrink-0 items-center gap-3">
      <img
        className="h-20 w-20"
        width={80}
        height={80}
        src={`/images/items/philosophies_of_${item.name.toLowerCase()}.png`}
        alt=""
      />
      <p className="text-lg font-medium text-gray-700">{item.name}</p>
    </div>
    <ul className="flex flex-wrap gap-4 sm:justify-end">
      {item.characters.map(character => (
        <li
          className={clsx(
            characterRarity[character.rarity],
            'h-20 w-20 rounded bg-cover',
          )}
          key={character.name}
        >
          <Tooltip content={character.name}>
            <div className="relative">
              <img
                width={80}
                height={80}
                src={`/images/characters/close/${stringToLowerSnake(
                  character.name,
                )}.png`}
                alt={character.name}
              />
              {character.name.includes('Traveler') ? (
                <img
                  className="absolute top-0 right-0 h-5 w-5 shadow-sm"
                  src={`/images/elements/${character.name
                    .split(' ')[1]
                    .toLowerCase()}.png`}
                  alt=""
                />
              ) : null}
            </div>
          </Tooltip>
        </li>
      ))}
    </ul>
  </li>
)
