import { ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import { Form } from 'remix'

export default function InventoryButtonGroup() {
  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      <Form method="post" replace>
        <input type="hidden" name="view" value="grid" />
        <button
          type="submit"
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500">
          <span className="sr-only">Inventory Grid View</span>
          <ViewGridIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </Form>
      <Form method="post" replace>
        <input type="hidden" name="view" value="list" />
        <button
          type="submit"
          className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500">
          <span className="sr-only">Inventory List View</span>
          <ViewListIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </Form>
    </span>
  )
}
