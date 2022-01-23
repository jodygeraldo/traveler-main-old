import type { ActionFunction } from 'remix'
import { json } from 'remix'

import { TodoTypeEnum } from '~/types/todo'
import { requireUserSession } from '~/utils/auth.server'
import type { Region } from '~/utils/date'
import { getDailyResetTime } from '~/utils/date'
import { parseStringFormData } from '~/utils/http'
import type { User } from '~/utils/redis/redis-user-schema.server'
import { removeUserTodoEntry, setUserTodo } from '~/utils/todo.server'
import { getDataId, getUserData } from '~/utils/user.server'
import { commitSession, getUserDataSession } from '~/utils/user-data.server'

export const action: ActionFunction = async ({ request }) => {
  const user = await requireUserSession(request)
  const { _action, name, status } = (await parseStringFormData(
    request,
  )) as TodoFormData

  interface TodoFormData {
    _action: TodoTypeEnum
    name: string
    status: string
  }

  const userDataSession = await getUserDataSession(request)
  const userDataIds = userDataSession.get('userData') as User['data_ids']
  const todoDataId: Record<TodoTypeEnum, string | undefined> = {
    DAILY: getDataId(userDataIds, TodoTypeEnum.Daily),
    WEEKLY: getDataId(userDataIds, TodoTypeEnum.Weekly),
    OTHERS: getDataId(userDataIds, TodoTypeEnum.Others),
  }
  const timeUntilReset = getDailyResetTime(user.user_metadata.server as Region)

  if (status === 'true') {
    const id = await setUserTodo(
      _action,
      user.id,
      name,
      timeUntilReset,
      todoDataId[_action],
    )

    if (!id) {
      return json(null, { status: 200 })
    }

    const userData = await getUserData(user.id)
    userDataSession.set('userData', userData)

    return json(request.url, {
      status: 201,
      headers: { 'Set-Cookie': await commitSession(userDataSession) },
    })
  }

  await removeUserTodoEntry(_action, name, timeUntilReset, todoDataId[_action])

  return json(null, { status: 200 })
}
