import { useState } from 'react'
import { Form, useOutletContext } from 'remix'

import CharacterLevel from '~/components/Character/CharacterLevel/CharacterLevel'
import CharacterLevelTalent from '~/components/Character/CharacterLevel/CharacterLevelTalent'
import SwitchLabelDescriptionLeft from '~/components/UI/Form/Switch'
import { ICharacter } from '~/types/character'
import { ItemTypes } from '~/types/item'

export default function CharacterEditWithInventoryRoute() {
  const { character, userItem } =
    useOutletContext<{ character: ICharacter; userItem: ItemTypes }>()

  const [returnItem, setReturnItem] = useState(true)

  return (
    <>
      <div className="xl:flex xl:items-center xl:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-slate-900 sm:truncate sm:text-3xl">
            Progression With Inventory Items
          </h2>
        </div>

        <div className="mt-4 flex md:mt-0 md:ml-4">
          <SwitchLabelDescriptionLeft
            enabled={returnItem}
            setEnabled={setReturnItem}
            label="Refund Items"
            description="get items back if you revert the ascension or talent level"
          />
        </div>
      </div>

      <Form>
        <CharacterLevel character={character} items={userItem} />
        <CharacterLevelTalent talent={character.material.talent} />
      </Form>
    </>
  )
}
