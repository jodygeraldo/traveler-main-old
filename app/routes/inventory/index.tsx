import { ActionFunction, useOutletContext } from 'remix'
import invariant from 'tiny-invariant'

import Items from '~/components/Item/Item'
import ItemList from '~/components/Item/ItemList'
import { requireUserId } from '~/services/auth.server'
import { db } from '~/services/db.server'
import { ItemCategory, ItemTypes } from '~/types/item'
import {
  upsertAscensionBossMaterial,
  upsertAscensionGem,
  upsertCommonMaterial,
  upsertLocalSpecialty,
  upsertTalentBook,
  upsertTalentBossMaterial,
  upsertTalentCrown,
} from '~/utils/db/item.server'

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request)

  const formData = await request.formData()

  const category = formData.get('category')
  const name = formData.get('name')
  const count = formData.get('count')

  invariant(typeof category === 'string', 'category must be a string')
  invariant(typeof name === 'string', 'name must be a string')
  invariant(typeof count === 'string', 'count must be a string')

  const userItem = await db.item.findUnique({
    where: {
      userId,
    },
  })

  switch (category as ItemCategory) {
    case 'Crown':
      return upsertTalentCrown(userId, userItem, name, +count)
    case 'Talent Book':
      return upsertTalentBook(userId, userItem, name, +count)
    case 'Talent Boss Material':
      return upsertTalentBossMaterial(userId, userItem, name, +count)
    case 'Ascension Gem':
      return upsertAscensionGem(userId, userItem, name, +count)
    case 'Ascension Boss Material':
      return upsertAscensionBossMaterial(userId, userItem, name, +count)
    case 'Local Specialty':
      return upsertLocalSpecialty(userId, userItem, name, +count)
    case 'Common Material':
      return upsertCommonMaterial(userId, userItem, name, +count)
    default:
      return null
  }
}

export default function InventoryRoute() {
  const items = useOutletContext<ItemTypes>()

  return (
    <div>
      {items.map(item => (
        <ItemList key={item.name} name={item.name}>
          <Items category={item.name} item={item.items} />
        </ItemList>
      ))}
    </div>
  )
}
