import clsx from 'clsx'
import type { FC } from 'react'
import { NavLink } from 'remix'

import type { ITab } from '~/types/global'

interface Props {
  tabs: ITab[]
}

const Tabs: FC<Props> = ({ tabs }) => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
          defaultValue={tabs.find(tab => tab.isActive)!.name}
        >
          {tabs.map(tab => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <NavLink
              key={tab.name}
              to={tab.href}
              className={({ isActive }) =>
                clsx(
                  isActive
                    ? 'text-gray-900 bg-primary-500'
                    : 'text-gray-500 hover:text-gray-700',
                  tabIdx === 0 ? 'rounded-l-lg' : '',
                  tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                  'group relative min-w-0 flex-1 overflow-hidden bg-primary-300 py-4 px-4 text-sm font-medium text-center hover:bg-primary-500 focus:z-10',
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span>{tab.name}</span>
                  <span
                    aria-hidden="true"
                    className={clsx(
                      isActive ? 'bg-indigo-500' : 'bg-transparent',
                      'absolute inset-x-0 bottom-0 h-0.5',
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Tabs
