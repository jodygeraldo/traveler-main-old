import clsx from 'clsx'
import { useState } from 'react'

type Todo = {
  title: string
  description: string
  link?: string
  checked: boolean
}

export default function TodoCheckbox({ todos }: { todos: Todo[] }) {
  const [controlledTodos, setControlledTodos] = useState(todos)

  function handleChange(id: string, val: boolean) {
    setControlledTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.title === id ? { ...todo, checked: val } : todo
      )
    )
  }

  return (
    <fieldset className="relative -space-y-px rounded-md bg-white">
      <legend className="sr-only">Daily Todo</legend>
      {controlledTodos.map((todo, planIdx) => (
        <div
          key={todo.title}
          className={clsx(
            planIdx === 0 && 'rounded-tl-md rounded-tr-md',
            planIdx === controlledTodos.length - 1 &&
              'rounded-bl-md rounded-br-md',
            todo.checked
              ? 'z-10 border-orange-200 bg-orange-50'
              : 'border-gray-200',
            'relative flex items-start border p-4 focus:outline-none md:pl-4 md:pr-6'
          )}>
          <div className="flex items-center h-5">
            <input
              id={todo.title}
              aria-describedby={`${todo.title}-description`}
              name="todos"
              value={todo.title}
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleChange(todo.title, !todo.checked)}
              className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm md:flex gap-5 flex-1 justify-between items-center">
            <div>
              <label htmlFor={todo.title} className="font-medium text-gray-700">
                {todo.title}
              </label>
              <p id={`${todo.title}-description`} className="text-gray-500">
                {todo.description}
              </p>
            </div>
            {todo.link ? (
              <p className="mt-3 text-sm md:mt-0 md:ml-6">
                <a
                  target="_blank"
                  href={todo.link}
                  className="whitespace-nowrap font-medium text-orange-700 hover:text-orange-600 cursor-pointer">
                  Link <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </fieldset>
  )
}
