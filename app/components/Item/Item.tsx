import { Item } from '@prisma/client'
import { FC } from 'react'
import { useFetcher } from 'remix'

import {
  IAscensionBossMaterial,
  IAscensionCommonMaterial,
  IAscensionGem,
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
    | IAscensionCommonMaterial[]
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
    <div className="flex flex-wrap gap-5">
      {item.map(it => (
        <div
          key={it.name}
          className="flex items-center gap-4 rounded-md bg-slate-800 p-2"
        >
          <img
            src={`/assets/images/items/${stringToLowerSnake(it.name)}.png`}
            className="h-12 w-10"
            width={40}
            height={48}
            alt={`${it.name} image`}
          />
          <div className="w-32">
            <h1 className="text-sm text-white">{it.name}</h1>

            <div>
              <label htmlFor={`${it.name}-count`}></label>
              <input
                onChange={handleChange}
                type="number"
                className="mt-2 h-full w-full rounded-md"
                defaultValue={it.count}
                name={it.name}
                min={0}
                id={`${it.name}-count`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Item
