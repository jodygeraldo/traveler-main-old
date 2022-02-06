import { Fetcher } from '@remix-run/react/transition'
import type { FC } from 'react'

import type { ITodo, TodoTypeEnum } from '~/types/todo'

import TodoItem from './TodoItem'

interface Props {
  heading: string
  todos: ITodo[]
  type: TodoTypeEnum
}

const TodoList: FC<Props> = ({ heading, todos, type }) => {
  return (
    <div className="w-full mx-auto bg-primary-400 md:rounded-md p-6 flex flex-col gap-4">
      <span className="sr-only">{heading}</span>
      {todos.map(todo => (
        <TodoItem key={todo.title} todo={todo} type={type} />
      ))}
    </div>
  )
}

export default TodoList
