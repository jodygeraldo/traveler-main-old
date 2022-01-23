import type { LoaderFunction } from 'remix'
import { json, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import TodoList from '~/components/Todo/TodoList'
import { todos } from '~/data/todos.server'
import type { ITodo } from '~/types/todo'
import { TodoTypeEnum } from '~/types/todo'
import { requireUserSession } from '~/utils/auth.server'
import { getUserTodo } from '~/utils/todo.server'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await requireUserSession(request)

  const todo = todos.get(TodoTypeEnum.Weekly)
  invariant(todo, 'This should never throw')

  const todoCompletion = await getUserTodo(TodoTypeEnum.Weekly, user.id)

  if (!todoCompletion) return json<ITodo[]>(todo)

  const updatedTodo = todo.map(t => {
    if (todoCompletion.includes(t.title)) {
      t.completed = true
    }
    return t
  })

  return json<ITodo[]>(updatedTodo)
}

export default function WeeklyRoute() {
  const todo = useLoaderData<ITodo[]>()

  return (
    <TodoList heading="weekly todos" todos={todo} type={TodoTypeEnum.Weekly} />
  )
}
