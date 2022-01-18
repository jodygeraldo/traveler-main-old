import type { ActionFunction } from 'remix'
import { LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import TodoList from '~/components/Todo/TodoList'
import type { ITodo } from '~/types/todo'
import { TodoTypeEnum } from '~/types/todo'
import { supabaseStrategy } from '~/utils/auth.server'
import { getUserTodo } from '~/utils/todo.server'

type LoaderData = {
  todos: ITodo[]
}
export const loader: LoaderFunction = async ({
  request,
}): Promise<LoaderData> => {
  const session = await supabaseStrategy.checkSession(request, {
    failureRedirect: '/login',
  })
  invariant(typeof session.user?.id === 'string', 'This should never throw')

  const todos: ITodo[] = [
    {
      title: 'Parametric Transformer',
      description: 'Parametric Transformer description',
      completed: false,
    },
    {
      title: 'Lupus Boreas, Dominator of Wolves',
      description: 'Lupus Boreas, Dominator of Wolves description',
      completed: false,
    },
    {
      title: 'Confront Stormterror',
      description: 'Confront Stormterror description',
      completed: false,
    },
    {
      title: 'Enter the Golden House',
      description: 'Enter the Golden House description',
      completed: false,
    },
    {
      title: 'Beneath the Dragon-Queller',
      description: 'Beneath the Dragon-Queller description',
      completed: false,
    },
    {
      title: 'Narukami Island: Tenshukaku',
      description: 'Narukami Island: Tenshukaku description',
      completed: false,
    },
  ]

  const todoCompletion = await getUserTodo(TodoTypeEnum.Weekly, session.user.id)

  if (!todoCompletion) return { todos }

  const updatedTodo = todos.map(todo => {
    if (todoCompletion.includes(todo.title)) {
      todo.completed = true
    }
    return todo
  })

  return { todos: updatedTodo }
}

export default function WeeklyRoute() {
  const { todos } = useLoaderData<LoaderData>()

  return (
    <TodoList heading="weekly todos" todos={todos} type={TodoTypeEnum.Weekly} />
  )
}

export const action: ActionFunction = () => {}
