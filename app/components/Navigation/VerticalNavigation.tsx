import clsx from 'clsx'
import { Link } from 'remix'

type Navigation = {
  name: string
  to: string
  active: boolean
}[]

export default function VerticalNavigation({ items }: { items: Navigation }) {
  return (
    <nav className="space-y-1">
      {items.map(item => (
        <Link
          key={item.name}
          to={item.to}
          className={clsx(
            item.active
              ? 'bg-gray-50 text-orange-600 hover:bg-white'
              : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
          )}
          aria-current={item.active ? 'page' : undefined}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
