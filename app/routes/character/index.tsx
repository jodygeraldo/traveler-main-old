import { Chip, Chips, MultiSelect } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useOutletContext } from 'remix'

import CharacterItem from '~/components/Character/CharacterItem'
import FilterLabel from '~/components/UI/FilterLabel'
import type { ICharacterDetail } from '~/types/character'

const vision = [
  { value: 'Anemo', label: 'Anemo' },
  { value: 'Cryo', label: 'Cryo' },
  { value: 'Dendro', label: 'Dendro', disabled: true },
  { value: 'Electro', label: 'Electro' },
  { value: 'Geo', label: 'Geo' },
  { value: 'Hydro', label: 'Hydro' },
  { value: 'Pyro', label: 'Pyro' },
]

const weaponType = ['Bow', 'Catalyst', 'Claymore', 'Polearm', 'Sword']

export default function CharactersRoute() {
  const initialCharacters = useOutletContext<ICharacterDetail[]>()
  const [characters, setCharacters] = useState(initialCharacters)

  const [filterVision, setFilterVision] = useState([
    'Anemo',
    'Cryo',
    'Electro',
    'Geo',
    'Hydro',
    'Pyro',
  ])

  const [filterWeaponType, setFilterWeaponType] = useState([
    'Bow',
    'Catalyst',
    'Claymore',
    'Polearm',
    'Sword',
  ])

  const [filterRarity, setFilterRarity] = useState(['4', '5'])

  useEffect(() => {
    const parsedIntArrFilterRarity: (string | number)[] = []

    filterRarity.forEach(filter => {
      parsedIntArrFilterRarity.push(parseInt(filter, 10))
    })

    if (parsedIntArrFilterRarity.includes(5)) {
      parsedIntArrFilterRarity.push('aloy')
    }

    setCharacters(() =>
      initialCharacters.filter(
        character =>
          filterWeaponType.includes(character.weapon) &&
          filterVision.includes(character.vision) &&
          parsedIntArrFilterRarity.includes(character.rarity),
      ),
    )
  }, [filterWeaponType, filterVision, filterRarity])

  return (
    <div>
      <div className="mb-8 grid grid-cols-2 grid-rows-1 gap-5">
        <MultiSelect
          data={vision}
          value={filterVision}
          onChange={setFilterVision}
          valueComponent={props => (
            <FilterLabel filterFor="elements" {...props} />
          )}
          aria-label="Vision Filter"
          placeholder="Pick all character vision you want"
        />
        <MultiSelect
          data={weaponType}
          value={filterWeaponType}
          onChange={setFilterWeaponType}
          valueComponent={props => (
            <FilterLabel filterFor="weapon_types" {...props} />
          )}
          aria-label="Vision Filter"
          placeholder="Pick all character vision you want"
        />
      </div>
      <Chips value={filterRarity} onChange={setFilterRarity} multiple>
        <Chip value={'5'}>5 Star</Chip>
        <Chip value={'4'}>4 Star</Chip>
      </Chips>
      <div className="flex flex-wrap gap-4">
        {characters.map(character => (
          <CharacterItem key={character.name} character={character} />
        ))}
      </div>
    </div>
  )
}
