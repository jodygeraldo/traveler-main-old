import { Server, TodoType } from '@prisma/client'
import {
  ActionFunction,
  json,
  LoaderFunction,
  useFetcher,
  useLoaderData,
} from 'remix'
import invariant from 'tiny-invariant'

import Alert from '~/components/Alert/Alert'
import SectionContainer from '~/components/SectionContainer'
import TodoItem from '~/components/Todo/TodoItem'
import TodoList from '~/components/Todo/TodoList'
import TodoMap from '~/model/Todo/Todo.server'
import { ITodo } from '~/model/Todo/TodoType'
import { requireUser } from '~/services/auth.server'
import { getWeeklyResetTime } from '~/utils/date'
import { getUserTodo, updateUserTodo } from '~/utils/db/todo.server'

interface LoaderData {
  todos: ITodo[]
  resetIn: number
}

export const action: ActionFunction = async ({ request }) => {
  const user = await requireUser(request)
  const { resetDate } = getWeeklyResetTime(user.server)

  const formData = await request.formData()
  const todosId = formData.getAll('todos')

  const todos = todosId.map(todo => (typeof todo === 'string' ? todo : ''))

  await updateUserTodo(user.id, TodoType.Weekly, resetDate, todos)

  return json(null, { status: 201 })
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await requireUser(request)
  const { resetDate, diffInMil } = getWeeklyResetTime(user.server)

  const todos = TodoMap.get(TodoType.Weekly)
  invariant(todos, 'Todos should be defined unless I messed up')

  const todosId = await getUserTodo(user.id, TodoType.Weekly, resetDate)

  todos.forEach(todo => {
    if (todosId) {
      todosId.completed.includes(todo.title)
        ? (todo.completed = true)
        : (todo.completed = false)
    } else {
      todo.completed = false
    }
  })

  return json<LoaderData>({ todos, resetIn: diffInMil }, { status: 200 })
}

export default function HandbookIndex() {
  const { todos, resetIn } = useLoaderData<LoaderData>()
  const fetcher = useFetcher()

  return (
    <>
      <Alert
        variant="info"
        text={`America server daily reset in ${new Date(
          new Date().getTime() + resetIn,
        ).toLocaleDateString()}`}
        smallText
      />
      <SectionContainer title="Others Todo">
        <fetcher.Form
          method="post"
          replace
          onChange={e => fetcher.submit(e.currentTarget)}
        >
          <TodoList legend="Weekly Todos">
            {todos.map((todo, idx) => (
              <TodoItem
                key={todo.title}
                todo={todo}
                idx={idx}
                length={todos.length}
              />
            ))}
          </TodoList>
        </fetcher.Form>
      </SectionContainer>
    </>
  )
}
