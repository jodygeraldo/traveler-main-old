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
import {
  upsertAscensionBossMaterial,
  upsertAscensionGem,
  upsertCommonMaterial,
  upsertCrown,
  upsertLocalSpecialty,
  upsertTalentBook,
  upsertTalentBossMaterial,
} from '~/utils/db/item.server'
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

  switch (category as ItemCategory) {
    case 'Crown':
      await upsertCrown(userId, name, +count)
      return null
    case 'Talent Book':
      await upsertTalentBook(userId, name, +count)
      return null
    case 'Talent Boss Material':
      await upsertTalentBossMaterial(userId, name, +count)
      return null
    case 'Ascension Gem':
      await upsertAscensionGem(userId, name, +count)
      return null
    case 'Ascension Boss Material':
      await upsertAscensionBossMaterial(userId, name, +count)
      return null
    case 'Local Specialty':
      await upsertLocalSpecialty(userId, name, +count)
      return null
    case 'Common Material':
      await upsertCommonMaterial(userId, name, +count)
      return null
    default:
      return null
  }
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

export default function InventoryIndex() {
  const { view } = useLoaderData<LoaderData>()
  const optimisticView = useOptimisticView(view)

  const {
    common,
    talentBoss,
    ascensionBoss,
    ascensionGem,
    talentBook,
    crown,
    localSpecialty,
  } = useOutletContext<{
    common: ItemTypes['common']
    talentBoss: ItemTypes['talentBoss']
    ascensionBoss: ItemTypes['ascensionBoss']
    ascensionGem: ItemTypes['ascensionGem']
    talentBook: ItemTypes['talentBook']
    crown: ItemTypes['crown']
    localSpecialty: ItemTypes['localSpecialty']
  }>()

  const renderView = (
    category: ItemCategory,
    itemArr:
      | ItemTypes['ascensionBoss']['items']
      | ItemTypes['talentBoss']['items']
      | ItemTypes['common']['items']
      | ItemTypes['crown']['items']
      | ItemTypes['talentBook']['items']
      | ItemTypes['localSpecialty']['items']
      | ItemTypes['ascensionGem']['items'],
  ) => {
    if (optimisticView === 'grid') {
      return (
        <InventoryGrid>
          {itemArr.map(item => (
            <InventoryGridItem
              key={item.name}
              category={category}
              item={item}
            />
          ))}
        </InventoryGrid>
      )
    } else {
      return (
        <InventoryList>
          {itemArr.map(item => (
            <InventoryListItem
              key={item.name}
              category={category}
              item={item}
            />
          ))}
        </InventoryList>
      )
    }
  }

  return (
    <>
      <SectionContainer title="Common Material">
        {renderView('Common Material', common.items)}
      </SectionContainer>
      <SectionContainer title="Talent Boss Material">
        {renderView('Talent Boss Material', talentBoss.items)}
      </SectionContainer>
      <SectionContainer title="Ascension Boss Material">
        {renderView('Ascension Boss Material', ascensionBoss.items)}
      </SectionContainer>
      <SectionContainer title="Ascension Gem">
        {renderView('Ascension Gem', ascensionGem.items)}
      </SectionContainer>
      <SectionContainer title="Talent Book">
        {renderView('Talent Book', talentBook.items)}
      </SectionContainer>
      <SectionContainer title="Crown">
        {renderView('Crown', crown.items)}
      </SectionContainer>
      <SectionContainer title="Local Specialty">
        {renderView('Local Specialty', localSpecialty.items)}
      </SectionContainer>
    </>
  )
}
