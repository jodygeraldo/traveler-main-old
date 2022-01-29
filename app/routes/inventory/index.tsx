import { ClipboardListIcon } from '@heroicons/react/outline'
import { ActionFunction, useOutletContext } from 'remix'
import invariant from 'tiny-invariant'

import Item from '~/components/Item/Item'
import { requireUserId } from '~/services/auth.server'
import { db } from '~/services/db.server'
import { ItemCategory, ItemTypes } from '~/types/item'
import {
  upsertAscensionBossMaterial,
  upsertAscensionGem,
  upsertCommonMaterial,
  upsertCrown,
  upsertLocalSpecialty,
  upsertTalentBook,
  upsertTalentBossMaterial,
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
      return upsertCrown(userId, userItem, name, +count)
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
      {items.map((item, idx) => (
        <div key={item.name} className="mb-8 space-y-4 last-of-type:mb-0">
          <div className="flex items-center justify-between">
            <h1 className="rounded-md border-2 border-slate-500 bg-slate-900 p-2 text-xl font-bold text-slate-300">
              {item.name}
            </h1>
            {idx === 0 ? (
              <div className="hidden items-center gap-2 rounded-md border-2 border-slate-500 bg-slate-900 p-2 lg:flex">
                <ClipboardListIcon className="h-6 w-6 text-slate-400" />
                <p className="text-slate-200">
                  Use <span className="text-teal-400">CTRL + F</span> to search
                  for item
                </p>
              </div>
            ) : null}
          </div>
          <Item category={item.name} item={item.items} />
        </div>
      ))}
    </div>
  )
}
