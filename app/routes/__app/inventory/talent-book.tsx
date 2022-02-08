import { ActionFunction, useOutletContext } from 'remix'
import invariant from 'tiny-invariant'

import InventoryGrid from '~/components/Inventory/InventoryGrid'
import InventoryGridItem from '~/components/Inventory/InventoryGridItem'
import InventoryList from '~/components/Inventory/InventoryList'
import InventoryListItem from '~/components/Inventory/InventoryListItem'
import SectionContainer from '~/components/SectionContainer'
import { ItemCategory, ItemTypes } from '~/model/Item/ItemType'
import { requireUserId } from '~/services/auth.server'
import { upsertTalentBook } from '~/utils/db/item.server'

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request)

  const formData = await request.formData()

  const category = formData.get('category')
  const name = formData.get('name')
  const count = formData.get('count')

  invariant(typeof category === 'string', 'category must be a string')
  invariant(typeof name === 'string', 'name must be a string')
  invariant(typeof count === 'string', 'count must be a string')

  if ((category as ItemCategory) === 'Talent Book') {
    // TODO: add trycatch to handle fail to upsert
    await upsertTalentBook(userId, name, +count)
  }

  return null
}

export default function InventoryTalentBook() {
  const { selectedView, talentBook } = useOutletContext<{
    selectedView: 'grid' | 'list'
    talentBook: ItemTypes['talentBook']
  }>()

  function renderView() {
    if (selectedView === 'grid') {
      return (
        <InventoryGrid>
          {talentBook.items.map(item => (
            <InventoryGridItem
              key={item.name}
              category="Talent Book"
              item={item}
            />
          ))}
        </InventoryGrid>
      )
    } else {
      return (
        <InventoryList>
          {talentBook.items.map(item => (
            <InventoryListItem
              key={item.name}
              category="Talent Book"
              item={item}
            />
          ))}
        </InventoryList>
      )
    }
  }

  return <SectionContainer title="Talent Book">{renderView()}</SectionContainer>
}
