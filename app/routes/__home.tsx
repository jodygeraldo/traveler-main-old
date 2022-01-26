import { useEffect } from 'react'
import { json, LoaderFunction, Outlet, useLoaderData, useNavigate } from 'remix'
import invariant from 'tiny-invariant'

import FarmableCard from '~/components/Farmable/FarmableCard'
import Tabs from '~/components/UI/Tabs'
import { farmable, getFarmables } from '~/data/farmable.server'
import { FarmableType, FarmDayTypeEnum } from '~/types/farmable'
import type { ITab } from '~/types/global'
import { authenticator } from '~/utils/auth.server'
import { getCurrentDay, getDailyResetTime, Region } from '~/utils/date'

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
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  const day = getCurrentDay(user.server as Region)

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
  const navigate = useNavigate()

  useEffect(() => {
    const refreshPage = setTimeout(() => {
      navigate('.')
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
