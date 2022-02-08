import { json, LoaderFunction, Outlet, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import FarmableItem from '~/components/Farmable/FarmableItem'
import ListContainer from '~/components/ListContainer'
import VerticalNavigation from '~/components/Navigation/VerticalNavigation'
import SectionContainer from '~/components/SectionContainer'
import useSubNavigation from '~/hooks/useSubNavigation'
import FarmableMap, { getFarmables } from '~/model/Farmable/Farmable.server'
import { FarmDayTypeEnum, IFarmable } from '~/model/Farmable/FarmableType'
import { requireUserServer } from '~/services/auth.server'
import { getCurrentDay } from '~/utils/date'

interface LoaderData {
  todayFarmable: IFarmable[]
}
export const loader: LoaderFunction = async ({ request }) => {
  const server = await requireUserServer(request)

  const day = getCurrentDay(server)

  let todayFarmable: IFarmable[] | undefined

  switch (day) {
    case 'Monday':
    case 'Thursday':
      todayFarmable = FarmableMap.get(FarmDayTypeEnum.MT)
      break
    case 'Tuesday':
    case 'Friday':
      todayFarmable = FarmableMap.get(FarmDayTypeEnum.TF)
      break
    case 'Wednesday':
    case 'Saturday':
      todayFarmable = FarmableMap.get(FarmDayTypeEnum.WS)
      break
    default:
      todayFarmable = getFarmables()
  }
  invariant(todayFarmable, 'Farmable should be defined unless I messed up')

  return json<LoaderData>({
    todayFarmable,
  })
}

export default function HandbookPage() {
  const { todayFarmable } = useLoaderData<LoaderData>()
  const subNavigation = useSubNavigation(1, 'Daily', [
    { name: 'Weekly', urlPathname: 'weekly' },
    { name: 'Others', urlPathname: 'others' },
  ])

  return (
    <main className="mx-auto max-w-7xl pb-10 lg:py-12 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
          <VerticalNavigation items={subNavigation} />
        </aside>

        <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
          <Outlet />

          <SectionContainer title="Today Farmable">
            <ListContainer>
              {todayFarmable.map(item => (
                <FarmableItem key={item.name} item={item} />
              ))}
            </ListContainer>
          </SectionContainer>
        </div>
      </div>
    </main>
  )
}
