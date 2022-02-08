import { StarIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { useFetcher } from 'remix'

import {
  IAscensionBossMaterial,
  IAscensionGem,
  ICommonMaterial,
  ICrown,
  ILocalSpecialty,
  ITalentBook,
  ITalentBossMaterial,
  ItemCategory,
} from '~/model/Item/ItemType'
import { stringToLowerSnake } from '~/utils/string'

type InventoryGridItemProps = {
  category: ItemCategory
  item:
    | ICommonMaterial
    | ITalentBossMaterial
    | IAscensionBossMaterial
    | IAscensionGem
    | ITalentBook
    | ICrown
    | ILocalSpecialty
}

const colorVariant: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: 'bg-rarity-one/10 text-rarity-one',
  2: 'bg-rarity-two/10 text-rarity-two',
  3: 'bg-rarity-three/10 text-rarity-three',
  4: 'bg-rarity-four/10 text-rarity-four',
  5: 'bg-rarity-five/10 text-rarity-five',
}

export default function InventoryGridItem({
  category,
  item,
}: InventoryGridItemProps) {
  const fetcher = useFetcher()

  return (
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <h3 className="truncate text-sm font-medium text-gray-900">
            {item.name}
          </h3>
          <div className="mt-1 flex items-center space-x-3">
            <span
              className={clsx(
                colorVariant[item.rarity],
                'inline-flex flex-shrink-0 items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800',
              )}
            >
              <StarIcon className="h-5 w-5" aria-hidden />
              {item.rarity}
              <span className="sr-only">{`rarity ${item.rarity}`}</span>
            </span>
          </div>
        </div>
        <img
          className="h-10 w-10 flex-shrink-0"
          src={`/images/items/${stringToLowerSnake(item.name)}.png`}
          alt=""
        />
      </div>
      <fetcher.Form
        method="post"
        replace
        onChange={e => fetcher.submit(e.currentTarget)}
        className="flex items-center justify-end gap-4 px-4 py-2"
      >
        <input type="hidden" name="category" value={category} />
        <input type="hidden" name="name" value={item.name} />
        <div className="grow-[2]">
          <label htmlFor={`${item.name}-count`} className="sr-only">
            {item.name} count
          </label>
          <input
            type="number"
            min={0}
            max={9999}
            defaultValue={item.count ?? 0}
            name="count"
            id={`${item.name}-count`}
            className="block w-full rounded-md border-gray-300 text-center tabular-nums shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Save
        </button>
      </fetcher.Form>
    </li>
  )
}
