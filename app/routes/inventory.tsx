import { Item } from '@prisma/client'
import {
  json,
  LoaderFunction,
  Outlet,
  ShouldReloadFunction,
  useLoaderData,
} from 'remix'

import { authenticator } from '~/services/auth.server'
import { ItemTypes } from '~/types/item'
import {
  getItems,
  getUpdatedUserItems,
  getUserItems,
} from '~/utils/db/item.server'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  const items = getItems()

  const userItem = await getUserItems(user.id)

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
