import { useState } from 'react'
import {
  ActionFunction,
  json,
  LoaderFunction,
  Outlet,
  useLoaderData,
} from 'remix'
import invariant from 'tiny-invariant'

import Alert from '~/components/Alert/Alert'
import InventoryButtonGroup from '~/components/Inventory/InventoryButtonGroup'
import VerticalNavigation from '~/components/Navigation/VerticalNavigation'
import SectionContainer from '~/components/SectionContainer'
import { userViewPrefs } from '~/cookies'
import useSubNavigation from '~/hooks/useSubNavigation'
import { getItems } from '~/model/Item/Item.server'
import { ItemTypes } from '~/model/Item/ItemType'
import { requireUserId } from '~/services/auth.server'
import { getUpdatedUserItems, getUserItems } from '~/utils/db/item.server'
import getUserPref from '~/utils/user-pref.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const view = formData.get('view')

  const viewPref = await getUserPref(request)

  invariant(
    (typeof view === 'string' && view === 'grid') || view === 'list',
    'view must be a string',
  )

  viewPref.itemView = view

  return json(null, {
    status: 201,
    headers: {
      'Set-Cookie': await userViewPrefs.serialize(viewPref),
    },
  })
}

interface LoaderData {
  view: 'grid' | 'list'
  items: ItemTypes
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)

  // eslint-disable-next-line
  const viewPref =
    (await userViewPrefs.parse(request.headers.get('Cookie'))) || {}

  const items = getItems()
  const userItems = await getUserItems(userId)

  if (!userItems) {
    return json<LoaderData>(
      // eslint-disable-next-line
      { view: viewPref.itemView || 'grid', items },
      { status: 200 },
    )
  }

  const updatedItems = getUpdatedUserItems(userItems, items)

  return json<LoaderData>(
    // eslint-disable-next-line
    { view: viewPref.itemView || 'grid', items: updatedItems },
    { status: 200 },
  )
}

export default function InventoryPage() {
  const { view, items } = useLoaderData<LoaderData>()
  const [selectedView, setSelectedView] = useState<'grid' | 'list'>(view)

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
            <InventoryButtonGroup
              selectedView={selectedView}
              onChangeView={setSelectedView}
            />
          </SectionContainer>

          <Outlet context={{ selectedView, ...items }} />
        </div>
      </div>
    </main>
  )
}
