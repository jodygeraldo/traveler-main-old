import { json, LoaderFunction, Outlet, useLoaderData } from 'remix'

import Alert from '~/components/Alert/Alert'
import VerticalNavigation from '~/components/Navigation/VerticalNavigation'
import SectionContainer from '~/components/SectionContainer'
import ViewButtonGroup from '~/components/ViewButtonGroup'
import useSubNavigation from '~/hooks/useSubNavigation'
import { getItems } from '~/model/Item/Item'
import { ItemTypes } from '~/model/Item/ItemType'
import { requireUserId } from '~/services/auth.server'
import { getUpdatedUserItems, getUserItems } from '~/utils/db/item.server'

interface LoaderData {
  items: ItemTypes
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)

  const items = getItems()
  const userItems = await getUserItems(userId)
  if (!userItems) {
    return json<LoaderData>({ items }, { status: 200 })
  }

  const updatedItems = getUpdatedUserItems(userItems, items)
  return json<LoaderData>({ items: updatedItems }, { status: 200 })
}

export default function InventoryPage() {
  const { items } = useLoaderData<LoaderData>()

  const subNavigation = useSubNavigation(1, 'All', [
    { name: 'Common', urlPathname: 'common' },
    { name: 'Talent Boss', urlPathname: 'talent-boss' },
    { name: 'Ascension Boss', urlPathname: 'ascension-boss' },
    { name: 'Ascension Gem', urlPathname: 'ascension-gem' },
    { name: 'Talent Book', urlPathname: 'talent-book' },
    { name: 'Crown', urlPathname: 'crown' },
    { name: 'Local Specialty', urlPathname: 'local-specialty' },
  ])

  return (
    <main className="mx-auto max-w-7xl pb-10 lg:py-12 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
          <VerticalNavigation items={subNavigation} />
        </aside>

        <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
          <span className="hidden lg:inline">
            <Alert variant="info" text="Use CTRL + F to search item" />
          </span>

          <SectionContainer title="Inventory View">
            <ViewButtonGroup />
          </SectionContainer>

          <Outlet context={{ ...items }} />
        </div>
      </div>
    </main>
  )
}
