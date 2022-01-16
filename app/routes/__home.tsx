import { useEffect } from 'react'
import {
  ActionFunction,
  LoaderFunction,
  Outlet,
  useLoaderData,
  useSubmit,
} from 'remix'

import FarmableCard from '~/components/Farmable/FarmableCard'
import TodoList from '~/components/Todo/TodoList'
import Tabs from '~/components/UI/Tabs'
import type { IFarmable } from '~/types/farmable'
import type { ITab } from '~/types/global'
import type { ITodo } from '~/types/todo'
import { getCurrentDay, getDailyResetTime } from '~/utils/date'
import { getFarmable, getFileName } from '~/utils/farmable.server'

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
  farmable: IFarmable
}
export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const day = getCurrentDay('AS')
  const timeUntilReset = getDailyResetTime('AS')

  const farmable = await getFarmable(getFileName(day))

  return { farmable, timeUntilReset: timeUntilReset * 1000 }
}

export default function Index() {
  const { farmable, timeUntilReset } = useLoaderData<LoaderData>()
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
      <FarmableCard farmable={farmable} />
      {/* <TodoList todos={todos} /> */}
    </div>
  )
}
