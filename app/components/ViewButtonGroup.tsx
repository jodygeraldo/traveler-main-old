import { ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import { Form } from 'remix'

import Tooltip from '~/components/Primitive/Tooltip'

export default function ViewButtonGroup() {
  return (
    <span className="relative z-0 inline-flex rounded-md shadow-sm">
      <Form method="get" action="?index" replace>
        <input type="hidden" name="view" value="grid" />
        <Tooltip content="Grid view">
          <button
            type="submit"
            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
          >
            <span className="sr-only">Character Grid View</span>
            <ViewGridIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </Tooltip>
      </Form>
      <Form method="get" action="?index" replace>
        <input type="hidden" name="view" value="list" />
        <Tooltip content="List view">
          <button
            type="submit"
            className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
          >
            <span className="sr-only">Character List View</span>
            <ViewListIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </Tooltip>
      </Form>
    </span>
  )
}
