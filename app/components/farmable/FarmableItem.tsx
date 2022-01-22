import type { FC } from 'react'

import { FarmableItemType } from '~/types/farmable'
import { stringToLowerSnake } from '~/utils/string'

interface Props {
  item: FarmableItemType
}

const travelerIndentifier = {
  'Geo Traveler': 'geo.png',
  'Anemo Traveler': 'anemo.png',
  'Electro Traveler': 'electro.png',
}

const FarmableItem: FC<Props> = ({ item }) => {
  return (
    <li key={item.name}>
      <div className="flex flex-wrap justify-between gap-4 p-6">
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16"
            src={`../assets/images/items/talent/book/${item.name.toLowerCase()}_philosophies.png`}
            alt={`${item.name} talent book image`}
          />
          <p>{item.name}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {item.characters.map(name => (
            <div key={name} className="relative">
              <img
                className="w-16 h-16"
                src={`../assets/images/characters/close/${stringToLowerSnake(
                  name.includes('Traveler') ? name.split(' ')[1] : name,
                )}.png`}
                alt={`${name} character image`}
              />
              {name.includes('Traveler') ? (
                <img
                  className="w-8 h-8 absolute top-0 left-0 right-0 mx-auto shadow-md"
                  src={`../assets/images/elements/${
                    // @ts-ignore
                    travelerIndentifier[name]
                  }`}
                  alt=""
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </li>
  )
}

export default FarmableItem
