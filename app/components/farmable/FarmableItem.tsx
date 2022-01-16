import type { FC } from 'react'

import { IFarmableItem } from '~/types/farmable'

interface Props {
  item: IFarmableItem
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
            src={`../assets/images/items/talent/book/${item.image}`}
            alt=""
          />
          <p>{item.name}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {item.characters.map(character => (
            <div key={character.name} className="relative">
              <img
                key={character.name}
                className="w-16 h-16"
                src={`../assets/images/characters/${character.image}`}
                alt=""
              />
              {character.name.includes('Traveler') ? (
                <img
                  key={character.name}
                  className="w-8 h-8 absolute top-0 left-0 right-0 mx-auto shadow-md"
                  src={`../assets/images/elements/${
                    // @ts-ignore
                    travelerIndentifier[character.name]
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
