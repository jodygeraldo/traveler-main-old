import { FC } from 'react'

import { IAscensionMaterial, ITalentMaterial } from '~/types/character'
import { stringToLowerSnake } from '~/utils/string'

type Props = {
  items: IAscensionMaterial | ITalentMaterial
}

const CharacterProgressionItem: FC<Props> = ({ items }) => {
  return (
    <tr>
      {Object.values(items).map(({ name, amount }) => (
        <td
          key={name as string}
          className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900"
        >
          <div className="flex items-center gap-2">
            {name === '' ? null : (
              <img
                className="h-6 w-6"
                width={24}
                height={24}
                src={`/assets/images/items/${stringToLowerSnake(
                  name as string,
                )}.png`}
                alt={`${name} Icon`}
              />
            )}
            <p className="font-semibold tabular-nums">
              {typeof amount === 'number'
                ? new Intl.NumberFormat().format(amount).length > 3
                  ? `${new Intl.NumberFormat().format(amount).slice(0, -4)}K`
                  : new Intl.NumberFormat().format(amount)
                : '-'}
            </p>
          </div>
        </td>
      ))}
    </tr>
  )
}

export default CharacterProgressionItem
