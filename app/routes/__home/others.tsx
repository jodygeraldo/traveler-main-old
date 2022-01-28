import type { LoaderFunction } from 'remix'
import { json, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import TodoList from '~/components/Todo/TodoList'
import { authenticator } from '~/services/auth.server'
import { todos } from '~/services/data/todos.server'
import type { ITodo } from '~/types/todo'
import { TodoTypeEnum } from '~/types/todo'
import { getUserTodo } from '~/utils/todo.server'

type LoaderData = ITodo[]
export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  const todo = todos.get(TodoTypeEnum.Others)
  invariant(todo, 'This should never throw')

  const todoData = await getUserTodo(TodoTypeEnum.Others, user.id)

  if (!todoData) return json<LoaderData>(todo)

  const updatedTodo = todo.map(t => {
    if (todoData.includes(t.title)) {
      t.completed = true
    }
    return t
  })

  return json<LoaderData>(updatedTodo)
}

export default function OthersRoute() {
  const todo = useLoaderData<LoaderData>()

  return (
    <TodoList heading="others todos" todos={todo} type={TodoTypeEnum.Others} />
  )
}
