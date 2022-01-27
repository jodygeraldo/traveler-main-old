import { Item } from '@prisma/client'
import { ActionFunction, useOutletContext } from 'remix'
import invariant from 'tiny-invariant'

import Items from '~/components/Item/Item'
import ItemList from '~/components/Item/ItemList'
import { ItemCategory, ItemTypes, TalentBook } from '~/types/item'
import { authenticator } from '~/utils/auth.server'
import { db } from '~/utils/db/db.server'
import {
  upsertAscensionBossMaterial,
  upsertAscensionCommonMaterial,
  upsertAscensionGem,
  upsertLocalSpecialty,
  upsertTalentBook,
  upsertTalentBossMaterial,
  upsertTalentCrown,
} from '~/utils/db/item.server'

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })
  const formData = await request.formData()

  const category = formData.get('category')
  const name = formData.get('name')
  const count = formData.get('count')

  invariant(typeof category === 'string', 'category must be a string')
  invariant(typeof name === 'string', 'name must be a string')
  invariant(typeof count === 'string', 'count must be a string')

  const userItem = await db.item.findUnique({
    where: {
      userId: user.id,
    },
  })

  switch (category as ItemCategory) {
    case 'Crown':
      return upsertTalentCrown(user.id, userItem, name, +count)
    case 'Talent Book':
      return upsertTalentBook(user.id, userItem, name, +count)
    case 'Talent Boss Material':
      return upsertTalentBossMaterial(user.id, userItem, name, +count)
    case 'Ascension Gem':
      return upsertAscensionGem(user.id, userItem, name, +count)
    case 'Ascension Boss Material':
      return upsertAscensionBossMaterial(user.id, userItem, name, +count)
    case 'Local Specialty':
      return upsertLocalSpecialty(user.id, userItem, name, +count)
    case 'Ascension Common Material':
      return upsertAscensionCommonMaterial(user.id, userItem, name, +count)
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
