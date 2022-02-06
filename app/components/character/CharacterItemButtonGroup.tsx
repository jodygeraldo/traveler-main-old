import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useEffect, useState } from 'react'
import { useFetcher } from 'remix'

export default function CharacterItemButtonGroup() {
  const fetcher = useFetcher()
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    fetcher.submit(
      { showFull: JSON.stringify(enabled) },
      { method: 'post', replace: true }
    )
  }, [enabled])

  return (
    <Switch.Group as={Fragment}>
      <Switch.Label
        as="h3"
        className="text-lg leading-6 font-medium text-gray-900"
        passive>
        Show full items
      </Switch.Label>
      <div className="mt-2 sm:flex sm:items-start sm:justify-between">
        <div className="max-w-xl text-sm text-gray-500">
          <Switch.Description>
            Disable this option to show only the items needed for character next
            level.
          </Switch.Description>
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            type="submit"
            className={clsx(
              enabled ? 'bg-indigo-600' : 'bg-gray-200',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            )}>
            <span
              aria-hidden="true"
              className={clsx(
                enabled ? 'translate-x-5' : 'translate-x-0',
                'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
              )}
            />
          </Switch>
        </div>
      </div>
    </Switch.Group>
  )
}
