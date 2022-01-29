import {
  json,
  LoaderFunction,
  Outlet,
  ShouldReloadFunction,
  useLoaderData,
} from 'remix'

import { requireUserId } from '~/services/auth.server'
import { ItemTypes } from '~/types/item'
import {
  getItems,
  getUpdatedUserItems,
  getUserItems,
} from '~/utils/db/item.server'

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)
  const userItem = await getUserItems(userId)

  const items = getItems()

  if (!userItem) {
    return json<ItemTypes>(items, { status: 200 })
  }

  const updatedItems = getUpdatedUserItems(userItem, items)

  return json<ItemTypes>(updatedItems, { status: 200 })
}

export default function InventoryPage() {
  const items = useLoaderData<ItemTypes>()

  return <Outlet context={items} />
}

export const unstable_shouldReload: ShouldReloadFunction = () => {
  return false
}
