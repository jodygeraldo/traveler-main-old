import { Item } from '@prisma/client'
import { FC } from 'react'
import { useFetcher } from 'remix'

import {
  IAscensionBossMaterial,
  IAscensionGem,
  ICommonMaterial,
  ILocalSpecialty,
  ITalentBook,
  ITalentBossMaterial,
  ITalentCrown,
} from '~/types/item'
import { stringToLowerSnake } from '~/utils/string'

type Props = {
  category: string
  item:
    | ITalentCrown[]
    | ITalentBook[]
    | ITalentBossMaterial[]
    | IAscensionGem[]
    | ILocalSpecialty[]
    | ICommonMaterial[]
    | IAscensionBossMaterial[]
}

const Item: FC<Props> = ({ category, item }) => {
  const fetcher = useFetcher()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    fetcher.submit(
      {
        category,
        name: e.target.name,
        count: e.target.value,
      },
      {
        method: 'post',
        action: '/inventory?index',
        replace: true,
      },
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {item.map(it => (
        <div
          key={it.name}
          className="flex items-center justify-between gap-4 rounded-md bg-slate-800 p-2"
        >
          <div className="flex items-center gap-4">
            <img
              src={`/assets/images/items/${stringToLowerSnake(it.name)}.png`}
              className="h-7 w-5"
              width={20}
              height={28}
              alt={`${it.name} image`}
            />
            <h1 className="text-sm text-white">{it.name}</h1>
          </div>

          <input
            aria-label={`${it.name}-count`}
            onChange={handleChange}
            type="number"
            className="w-[84px] rounded-md tabular-nums"
            defaultValue={it.count}
            name={it.name}
            min={0}
            max={9999}
            id={`${it.name}-count`}
          />
        </div>
      ))}
    </div>
  )
}

export default Item
