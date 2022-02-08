import { ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { useEffect } from 'react'
import { Form, useFetcher } from 'remix'

interface InventoryButtonGroupProps {
  selectedView: 'grid' | 'list'
  onChangeView: (view: 'list' | 'grid') => void
}

export default function InventoryButtonGroup({
  selectedView,
  onChangeView: setChangeView,
}: InventoryButtonGroupProps) {
  const fetcher = useFetcher()

  useEffect(() => {
    if (fetcher.submission?.formData.get('view')) {
      setChangeView(
        (fetcher.submission.formData.get('view') ?? 'grid') as 'grid' | 'list',
      )
    }
  }, [fetcher.submission])

  return (
    <span className="relative z-0 inline-flex rounded-md shadow-sm">
      <fetcher.Form method="post" replace>
        <input type="hidden" name="view" value="grid" />
        <button
          disabled={selectedView === 'grid'}
          type="submit"
          className={clsx(
            'relative inline-flex items-center rounded-l-md border border-gray-300 px-2 py-2 text-sm font-medium text-gray-500',
            selectedView === 'grid'
              ? 'bg-gray-100'
              : 'bg-white hover:bg-gray-50 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500',
          )}
        >
          <span className="sr-only">Inventory Grid View</span>
          <ViewGridIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </fetcher.Form>
      <fetcher.Form method="post" replace>
        <input type="hidden" name="view" value="list" />
        <button
          disabled={selectedView === 'list'}
          type="submit"
          className={clsx(
            'relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 px-2 py-2 text-sm font-medium text-gray-500',
            selectedView === 'list'
              ? 'bg-gray-100'
              : 'bg-white hover:bg-gray-50 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500',
          )}
        >
          <span className="sr-only">Inventory List View</span>
          <ViewListIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </fetcher.Form>
    </span>
  )
}
