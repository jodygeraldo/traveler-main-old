import { LoaderFunction, useLoaderData } from 'remix'

import TodoList from '~/components/Todo/TodoList'
import type { ITodo } from '~/types/todo'
import { TodoTypeEnum } from '~/types/todo'
import { getUserTodo } from '~/utils/todo.server'

type LoaderData = {
  todos: ITodo[]
}
export const loader: LoaderFunction = async ({
  request,
}): Promise<LoaderData> => {
  // Todo: should get this from user session
  const userId = 'user2'

  const todos: ITodo[] = [
    {
      title: 'Spiral Abbys',
      description: 'Spiral Abbys description',
      completed: false,
    },
    {
      title: 'Events',
      description: 'Events description',
      completed: false,
    },
    {
      title: 'Teapot Garden(?)',
      description: 'Teapot Garden(?) description',
      completed: false,
    },
  ]

  const todoCompletion = await getUserTodo(TodoTypeEnum.Others, userId)

  if (!todoCompletion) return { todos }

  const updatedTodo = todos.map(todo => {
    if (todoCompletion.includes(todo.title)) {
      todo.completed = true
    }
    return todo
  })

  return { todos: updatedTodo }
}

export default function OthersRoute() {
  const { todos } = useLoaderData<LoaderData>()

  return (
    <TodoList heading="others todos" todos={todos} type={TodoTypeEnum.Others} />
  )
}
