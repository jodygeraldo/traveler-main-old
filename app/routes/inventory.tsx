// import { json, LoaderFunction, Outlet, useLoaderData } from 'remix'

// import { ItemTypes } from '~/types/item'
// import { authenticator } from '~/utils/auth.server'
// import { getUserInventory } from '~/utils/inventory.server'

// export const loader: LoaderFunction = async ({ request }) => {
//   const user = await authenticator.isAuthenticated(request, {
//     failureRedirect: '/login',
//   })

//   const t1 = performance.now()
//   const items = getAllItems()
//   console.log(`getAllItems: ${performance.now() - t1}ms`)

//   const inventoryData = await getUserInventory(user.id)
//   if (!inventoryData) return json<ItemTypes>(items, { status: 200 })

//   const t = performance.now()
//   const freshItems = getFreshItemsCount(inventoryData)
//   console.log(`getFreshItemsCount: ${performance.now() - t}ms`)

//   return json<ItemTypes>(freshItems, { status: 200 })
// }

// export default function InventoryPage() {
//   const items = useLoaderData<ItemTypes>()

//   return <Outlet context={items} />
// }
