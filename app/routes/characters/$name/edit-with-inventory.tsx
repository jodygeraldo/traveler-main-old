import { useOutletContext } from 'remix'

import { ICharacter, ITraveler } from '~/types/character'

export default function CharacterEditWithInventoryRoute() {
  const { character, level } = useOutletContext<{
    character: ICharacter | ITraveler
    level: ICharacter['level'] | ITraveler['level']
  }>()

  return (
    <div>
      <h1>This from Character Edit With Inventory Route</h1>
    </div>
  )
}
