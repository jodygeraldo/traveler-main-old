import {
  ActionFunction,
  json,
  LoaderFunction,
  useLoaderData,
  useOutletContext,
} from 'remix'
import invariant from 'tiny-invariant'

import InventoryGrid from '~/components/Inventory/InventoryGrid'
import InventoryGridItem from '~/components/Inventory/InventoryGridItem'
import InventoryList from '~/components/Inventory/InventoryList'
import InventoryListItem from '~/components/Inventory/InventoryListItem'
import SectionContainer from '~/components/SectionContainer'
import { userViewPrefs } from '~/cookies'
import useOptimisticView from '~/hooks/useOptimisticView'
import { ItemCategory, ItemTypes } from '~/model/Item/ItemType'
import { requireUserId } from '~/services/auth.server'
import { upsertTalentBook } from '~/utils/db/item.server'
import { getUpdatedUserPref } from '~/utils/user-pref.server'

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request)

  const formData = await request.formData()

  const category = formData.get('category')
  const name = formData.get('name')
  const count = formData.get('count')

  invariant(typeof category === 'string', 'category must be a string')
  invariant(typeof name === 'string', 'name must be a string')
  invariant(typeof count === 'string', 'count must be a string')

  if ((category as ItemCategory) === 'Talent Book') {
    // TODO: add trycatch to handle fail to upsert
    await upsertTalentBook(userId, name, +count)
  }

  return null
}
interface LoaderData {
  view: 'grid' | 'list'
}

export const loader: LoaderFunction = async ({ request }) => {
  const { userPref, view } = await getUpdatedUserPref(request, 'item')

  return json<LoaderData>(
    { view },
    {
      status: 200,
      headers: { 'Set-Cookie': await userViewPrefs.serialize(userPref) },
    },
  )
}

export default function InventoryTalentBook() {
  const { view } = useLoaderData<LoaderData>()
  const optimisticView = useOptimisticView(view)

  const { talentBook } = useOutletContext<{
    talentBook: ItemTypes['talentBook']
  }>()

  function renderView() {
    if (optimisticView === 'grid') {
      return (
        <InventoryGrid>
          {talentBook.items.map(item => (
            <InventoryGridItem
              key={item.name}
              category="Talent Book"
              item={item}
            />
          ))}
        </InventoryGrid>
      )
    } else {
      return (
        <InventoryList>
          {talentBook.items.map(item => (
            <InventoryListItem
              key={item.name}
              category="Talent Book"
              item={item}
            />
          ))}
        </InventoryList>
      )
    }
  }

  return <SectionContainer title="Talent Book">{renderView()}</SectionContainer>
}
