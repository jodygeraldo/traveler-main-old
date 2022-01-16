import { LoaderFunction, useLoaderData } from 'remix'

import TodoList from '~/components/todo/TodoList'
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
      title: 'Daily Commission',
      description: 'Daily Commission description',
      completed: false,
    },
    {
      title: 'Expedition',
      description: 'Expedition description',
      completed: false,
    },
    {
      title: 'Claim Teapot Realm Currency',
      description: 'Claim Teapot Realm Currency description',
      completed: false,
    },
    {
      title: 'Claim Realm Bounty',
      description: 'Claim Realm Bounty teapot friendship exp description',
      completed: false,
    },
    {
      title: 'Ore Farms',
      description: 'Ore Farms description',
      completed: false,
    },
    {
      title: 'Artifact Farms',
      description: 'Artifact Farms description',
      completed: false,
    },
    {
      title: 'HoYoLAB Check-In',
      description: 'HoYoLAB Check-In description',
      link: 'https://webstatic-sea.mihoyo.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&mhy_auth_required=true&mhy_presentation_style=fullscreen&utm_source=tools&lang=en-us&bbs_theme=dark&bbs_theme_device=1',
      completed: false,
    },
  ]

  const todoCompletion = await getUserTodo(TodoTypeEnum.Daily, userId)

  if (!todoCompletion) return { todos }

  const updatedTodo = todos.map(todo => {
    if (todoCompletion.includes(todo.title)) {
      todo.completed = true
    }
    return todo
  })

  return { todos: updatedTodo }
}

export default function DailyRoute() {
  const { todos } = useLoaderData<LoaderData>()

  return (
    <TodoList heading="daily todos" todos={todos} type={TodoTypeEnum.Daily} />
  )
}