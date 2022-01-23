import { FC, useEffect, useRef, useState } from 'react'
import { useFetcher } from 'remix'

import type { ITodo, TodoTypeEnum } from '~/types/todo'

interface Props {
  todo: ITodo
  type: TodoTypeEnum
}

const TodoItem: FC<Props> = ({ todo, type }) => {
  const fetcher = useFetcher()

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fetcher.submit(
      {
        _action: type,
        name: todo.title,
        status: JSON.stringify(e.target.checked),
      },
      {
        method: 'post',
        action: '/toggle',
        replace: true,
      },
    )
  }
  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          onChange={handleCheckboxChange}
          id={todo.title}
          aria-describedby={`${todo.title}-description`}
          name={todo.title}
          defaultChecked={todo.completed}
          type="checkbox"
          className="focus:ring-primary-900 h-4 w-4 text-primary-600 border-primary-900 bg-primary-400 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={todo.title} className="font-medium text-gray-700">
          {todo.title}
        </label>
        {todo.link ? (
          <a
            href={todo.link}
            className="inline-block text-primary-600 hover:underline"
            target="_blank"
          >
            {todo.description}
          </a>
        ) : (
          <p id={`${todo.title}-description`} className="text-gray-500">
            {todo.description}
          </p>
        )}
      </div>
    </div>
  )
}

export default TodoItem
