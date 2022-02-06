import {
  CheckCircleIcon,
  XCircleIcon,
  StarIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid'
import clsx from 'clsx'
import { Form, Link, useFetcher } from 'remix'

type InventoryGridItemProps = {
  item: {
    name: string
    region?: string
    rarity: number
    count: number
  }
  idx: number
}

const colorVariant = {
  1: 'bg-rarity-one/10 text-rarity-one',
  2: 'bg-rarity-two/10 text-rarity-two',
  3: 'bg-rarity-three/10 text-rarity-three',
  4: 'bg-rarity-four/10 text-rarity-four',
  5: 'bg-rarity-five/10 text-rarity-five',
}

export default function InventoryListItem({
  item,
  idx,
}: InventoryGridItemProps) {
  const fetcher = useFetcher()

  return (
    <li className="sm:flex">
      <div className="flex flex-1 border-b sm:border-b-0">
        <div className="flex items-center px-4 py-4 sm:px-6 justify-between w-full">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              <img
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/48"
                //   src={`${item.name}.png`}
                alt={item.name}
              />
            </div>
            <div className="min-w-0 flex-1 px-4">
              <div>
                <p className="text-sm font-medium text-orange-600 truncate">
                  {item.name}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  {item.region ? (
                    <p className="text-sm text-gray-500">{item.region}</p>
                  ) : null}
                  <span
                    className={clsx(
                      colorVariant[item.rarity],
                      'flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'
                    )}>
                    <StarIcon className="h-5 w-5" aria-label="rarity" />
                    {item.rarity}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <fetcher.Form
        method="post"
        replace
        onChange={(e) => fetcher.submit(e.currentTarget)}
        className="flex px-4 py-2 sm:p-6 justify-end gap-4 items-center">
        <div className="grow-[2]">
          <label htmlFor={`${item.name}-count`} className="sr-only">
            {item.name} count
          </label>
          <input
            type="number"
            min={0}
            max={9999}
            defaultValue={item.count}
            name="count"
            id={`${item.name}-count`}
            className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md text-center tabular-nums"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
          Save
        </button>
      </fetcher.Form>
    </li>
  )
}
