import type { ActionFunction } from 'remix'
import { json } from 'remix'

import { TodoTypeEnum } from '~/types/todo'
import { authenticator } from '~/utils/auth.server'
import type { Region } from '~/utils/date'
import { getDailyResetTime } from '~/utils/date'
import { parseStringFormData } from '~/utils/http'
import { removeUserTodoEntry, setUserTodo } from '~/utils/todo.server'

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })
  const { _action, name, status } = (await parseStringFormData(
    request,
  )) as TodoFormData

  interface TodoFormData {
    _action: TodoTypeEnum
    name: string
    status: string
  }

  const timeUntilReset = getDailyResetTime(user.server as Region)

  if (status === 'true') {
    await setUserTodo(_action, name, timeUntilReset, user.id)
  } else {
    await removeUserTodoEntry(_action, name, timeUntilReset, user.id)
  }

  return json(request.url, {
    status: 201,
  })
}
