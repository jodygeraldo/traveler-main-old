import { ActionFunction } from 'remix'

import { TodoTypeEnum } from '~/types/todo'
import { getDailyResetTime } from '~/utils/date'
import { parseStringFormData } from '~/utils/http'
import { removeUserTodoEntry, setUserTodo } from '~/utils/todo.server'

export const action: ActionFunction = async ({ request }) => {
  const { _action, name, status } = (await parseStringFormData(request)) as {
    _action: TodoTypeEnum
    name: string
    status: string
  }

  // TODO: should get this from user session
  const user = {
    id: 'user2',
    region: 'AS' as 'EU' | 'NA' | 'AS',
    prevDataIdDaily: '01FSGT2W6SM2SGSM11RFB03Q0A',
    prevDataIdWeekly: '01FSGTD4SGZ0M1A0AA407DBD13',
    prevDataIdOthers: '01FSGTD6BVBYZHQ8HXXTRG65EP',
  }

  const prevId: Record<TodoTypeEnum, string> = {
    DAILY: user.prevDataIdDaily,
    WEEKLY: user.prevDataIdWeekly,
    OTHERS: user.prevDataIdOthers,
  }

  const timeUntilReset = getDailyResetTime(user.region)

  if (status === 'true') {
    const id = await setUserTodo(
      _action,
      prevId[_action],
      user.id,
      name,
      timeUntilReset,
    )
    // if id already in user session then do nothing
    // TODO: put ID in user session if not already there
    return null
  } else {
    const id = await removeUserTodoEntry(
      _action,
      prevId[_action],
      name,
      timeUntilReset,
    )
    // if id already in user session then do nothing
    // TODO: put ID in user session if not already there

    return null
  }
}
