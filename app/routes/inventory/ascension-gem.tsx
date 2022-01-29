import { ClipboardListIcon } from '@heroicons/react/outline'
import { ActionFunction, useOutletContext } from 'remix'
import invariant from 'tiny-invariant'

import Item from '~/components/Item/Item'
import { requireUserId } from '~/services/auth.server'
import { db } from '~/services/db.server'
import { ItemTypes } from '~/types/item'
import { upsertAscensionGem } from '~/utils/db/item.server'

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

  if (category === 'Ascension Gem') {
    // TODO: add trycatch to handle fail to upsert
    await upsertAscensionGem(userId, userItem, name, +count)
  }

  return null
}

export default function InventoryCrownRoute() {
  const items = useOutletContext<ItemTypes>()
  const filteredItems = items.filter(item => item.name === 'Ascension Gem')

  return (
    <div>
      {filteredItems.map(item => (
        <div key={item.name} className="mb-8 space-y-4 last-of-type:mb-0">
          <div className="hidden items-center gap-2 rounded-md border-2 border-slate-500 bg-slate-900 p-2 lg:flex">
            <ClipboardListIcon className="h-6 w-6 text-slate-400" />
            <p className="text-slate-200">
              Use <span className="text-teal-400">CTRL + F</span> to search for
              item
            </p>
          </div>
          <Item category={item.name} item={item.items} />
        </div>
      ))}
    </div>
  )
}
