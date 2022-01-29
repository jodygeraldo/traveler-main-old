import clsx from 'clsx'
import {
  json,
  LoaderFunction,
  NavLink,
  Outlet,
  ShouldReloadFunction,
  useLoaderData,
  useLocation,
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

const navigation = [
  { name: 'All', to: '' },
  { name: 'Common Material', to: 'common-material' },
  { name: 'Talent Boss Material', to: 'talent-boss-material' },
  { name: 'Ascension Boss Material', to: 'ascension-boss-material' },
  { name: 'Ascension Gem', to: 'ascension-gem' },
  { name: 'Talent Book', to: 'talent-book' },
  { name: 'Crown', to: 'crown' },
  { name: 'Local Specialty', to: 'local-specialty' },
]

export default function InventoryPage() {
  const items = useLoaderData<ItemTypes>()
  const location = useLocation()
  // IDK why typescript think this is only can be a string
  const currentPathname = location.pathname.split('/')[2] as string | undefined

  return (
    <div className="gap-8 px-2 sm:flex">
      <nav className="top-5 h-full space-y-1 sm:sticky " aria-label="Sidebar">
        {navigation.map(item => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              clsx(
                (item.to === currentPathname && isActive) ||
                  (currentPathname === undefined && item.to === '')
                  ? 'bg-gray-800 text-gray-100'
                  : 'text-gray-600 hover:bg-gray-800 hover:text-gray-100',
                'flex items-center rounded-md px-3 py-2 text-sm font-medium',
              )
            }
          >
            <span className="truncate">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <Outlet context={items} />
    </div>
  )
}
