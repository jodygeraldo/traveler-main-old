import { useEffect } from 'react'
import { json, LoaderFunction, Outlet, useLoaderData, useSubmit } from 'remix'
import invariant from 'tiny-invariant'

import FarmableCard from '~/components/Farmable/FarmableCard'
import Tabs from '~/components/UI/Tabs'
import { farmable, getFarmables } from '~/data/farmable.server'
import { FarmableType, FarmDayTypeEnum } from '~/types/farmable'
import type { ITab } from '~/types/global'
import { supabaseStrategy } from '~/utils/auth.server'
import { getCurrentDay, getDailyResetTime } from '~/utils/date'

const tabs: ITab[] = [
  {
    name: 'Daily',
    href: '/',
    isActive: true,
  },
  {
    name: 'Weekly',
    href: '/weekly',
    isActive: false,
  },
  {
    name: 'Others',
    href: '/others',
    isActive: false,
  },
]

type LoaderData = {
  timeUntilReset: number
  todayFarmable: FarmableType
}
export const loader: LoaderFunction = async ({ request }) => {
  const session = await supabaseStrategy.checkSession(request, {
    failureRedirect: '/login',
  })
  invariant(typeof session.user?.id === 'string', 'This should never throw')
  const region = session.user.user_metadata.server as
    | 'EU'
    | 'NA'
    | 'AS'
    | undefined

  const day = getCurrentDay(region)

  let todayFarmable: FarmableType | undefined

  switch (day) {
    case 'Monday':
    case 'Thursday':
      todayFarmable = farmable.get(FarmDayTypeEnum.MT)
      break
    case 'Tuesday':
    case 'Friday':
      todayFarmable = farmable.get(FarmDayTypeEnum.TF)
      break
    case 'Wednesday':
    case 'Saturday':
      todayFarmable = farmable.get(FarmDayTypeEnum.WS)
      break
    default:
      return json<LoaderData>({
        todayFarmable: getFarmables(),
        timeUntilReset: getDailyResetTime('AS') * 1000,
      })
  }
  invariant(todayFarmable, 'This should never throw')

  return json<LoaderData>({
    todayFarmable,
    timeUntilReset: getDailyResetTime('AS') * 1000,
  })
}

export default function Index() {
  const { todayFarmable, timeUntilReset } = useLoaderData<LoaderData>()
  const submit = useSubmit()

  useEffect(() => {
    const refreshPage = setTimeout(() => {
      submit(null, { method: 'get' })
    }, timeUntilReset)

    return () => clearTimeout(refreshPage)
  }, [])

  return (
    <div className="flex justify-between gap-5">
      <div className="flex flex-1 flex-col gap-5">
        <Tabs tabs={tabs} />
        <Outlet />
      </div>
      <FarmableCard farmable={todayFarmable} />
    </div>
  )
}
