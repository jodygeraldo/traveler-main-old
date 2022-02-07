import clsx from 'clsx'
import { useState } from 'react'

import Label from '~/components/Primitive/Label'
import { ITodo } from '~/model/Todo/TodoType'

interface TodoItemProps {
  todo: ITodo
  idx: number
  length: number
}

export default ({ todo, idx, length }: TodoItemProps) => {
  const [isComplete, setIsComplete] = useState(todo.completed)

  function toggleState() {
    setIsComplete(prevState => !prevState)
  }

  return (
    <div
      className={clsx(
        idx === 0 && 'rounded-tl-md rounded-tr-md',
        idx === length - 1 && 'rounded-bl-md rounded-br-md',
        isComplete ? 'z-10 border-orange-200 bg-orange-50' : 'border-gray-200',
        'relative flex items-start border p-4 focus:outline-none md:pl-4 md:pr-6',
      )}
    >
      <div className="flex h-5 items-center">
        <input
          id={todo.title}
          aria-describedby={`${todo.title}-description`}
          name="todos"
          value={todo.title}
          type="checkbox"
          checked={isComplete}
          onChange={toggleState}
          className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
        />
      </div>
      <div className="ml-3 flex-1 items-center justify-between gap-5 text-sm md:flex">
        <div>
          <Label htmlFor={todo.title} className="font-medium text-gray-700">
            {todo.title}
          </Label>
          <p id={`${todo.title}-description`} className="text-gray-500">
            {todo.description}
          </p>
        </div>
        {todo.link ? (
          <p className="mt-3 text-sm md:mt-0 md:ml-6">
            <a
              target="_blank"
              href={todo.link}
              className="cursor-pointer whitespace-nowrap font-medium text-orange-700 hover:text-orange-600"
            >
              Link <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        ) : null}
      </div>
    </div>
  )
}
