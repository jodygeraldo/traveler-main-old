import { TodoType } from '@prisma/client'
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

interface LoaderData {
  todos: ITodo[]
}

// TODO: Others todo need implementation on different expire date of each todo
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const todosId = formData.getAll('todos')
  console.log(todosId)

  return json(null, { status: 201 })
}

export const loader: LoaderFunction = () => {
  const todos = TodoMap.get(TodoType.Others)
  invariant(todos, 'Todos should be defined unless I messed up')

  const todosId = ['Spiral Abbys']

  todos.forEach(todo =>
    todosId.includes(todo.title)
      ? (todo.completed = true)
      : (todo.completed = false),
  )

  return json<LoaderData>({ todos }, { status: 200 })
}

export default function HandbookIndex() {
  const { todos } = useLoaderData<LoaderData>()
  const fetcher = useFetcher()

  return (
    <>
      <Alert
        variant="info"
        text="America server daily reset in 999999"
        smallText
      />
      <SectionContainer title="Others Todo">
        <fetcher.Form
          method="post"
          replace
          onChange={e => fetcher.submit(e.currentTarget)}
        >
          <TodoList legend="Others Todos">
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
