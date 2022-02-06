import { Menu, Transition } from '@headlessui/react'
import {
  ViewGridIcon,
  ViewListIcon,
  SortAscendingIcon,
  ChevronDownIcon,
  SortDescendingIcon,
} from '@heroicons/react/solid'
import clsx from 'clsx'
import { Fragment } from 'react'
import { Form } from 'remix'

const vision = [
  { name: 'Anemo', enable: true },
  { name: 'Geo', enable: true },
  { name: 'Electro', enable: true },
  { name: 'Dendro', enable: true },
  { name: 'Hydro', enable: true },
  { name: 'Pyro', enable: true },
  { name: 'Cryo', enable: true },
]

const weapon = [
  { name: 'Sword', enable: true },
  { name: 'Claymore', enable: true },
  { name: 'Polearm', enable: false },
  { name: 'Catalyst', enable: true },
  { name: 'Bow', enable: true },
]

const sort = [
  { name: 'Save and schedule', href: '#' },
  { name: 'Save and publish', href: '#' },
  { name: 'Export PDF', href: '#' },
]

export default function CharacterButtonGroup({
  order,
}: {
  order: 'asc' | 'desc'
}) {
  return (
    <>
      <div className="xl:flex gap-8">
        <div className="relative z-0 inline-flex shadow-sm rounded-md mr-8 xl:mr-0">
          {vision.map((v, idx) => (
            <Form
              key={v.name}
              method="post"
              replace
              className="hint--top hint--rounded"
              aria-label={v.name}>
              <input type="hidden" name="enable" value={`${v.enable}`} />
              <button
                type="submit"
                name="vision"
                value={v.name}
                className={clsx(
                  v.enable ? 'bg-gray-100' : 'bg-white',
                  idx === 0 && 'rounded-l-md',
                  idx === vision.length - 1 && 'rounded-r-md',
                  idx !== 0 && '-ml-px',
                  'relative inline-flex items-center border p-1 border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500'
                )}>
                <span className="sr-only">{`${
                  v.enable === true ? 'hide' : 'show'
                } ${v.name}`}</span>
                <img
                  className="w-8 h-8"
                  width={32}
                  height={32}
                  src={`/images/${v.name.toLowerCase()}.png`}
                  alt=""
                />
              </button>
            </Form>
          ))}
        </div>

        <div className="relative z-0 inline-flex shadow-sm rounded-md mt-4 xl:mt-0">
          {weapon.map((w, idx) => (
            <Form
              key={w.name}
              method="post"
              replace
              className="hint--top hint--rounded"
              aria-label={w.name}>
              <input type="hidden" name="enable" value={`${w.enable}`} />
              <button
                type="submit"
                name="vision"
                value={w.name}
                className={clsx(
                  w.enable ? 'bg-gray-100' : 'bg-white',
                  idx === 0 && 'rounded-l-md',
                  idx === weapon.length - 1 && 'rounded-r-md',
                  idx !== 0 && '-ml-px',
                  'relative inline-flex items-center p-1 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500'
                )}>
                <span className="sr-only">{`${
                  w.enable === true ? 'hide' : 'show'
                } ${w.name}`}</span>
                <img
                  className="w-8 h-8"
                  width={32}
                  height={32}
                  src={`/images/${w.name.toLowerCase()}.png`}
                  alt=""
                />
              </button>
            </Form>
          ))}
        </div>
      </div>

      <div className="flex gap-8 mt-4 xl:mt-0">
        <span className="relative z-0 inline-flex shadow-sm rounded-md">
          <Form method="post" replace>
            <input type="hidden" name="view" value="grid" />
            <button
              type="submit"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500">
              <span className="sr-only">Character Grid View</span>
              <ViewGridIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </Form>
          <Form method="post" replace>
            <input type="hidden" name="view" value="list" />
            <button
              type="submit"
              className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500">
              <span className="sr-only">Character List View</span>
              <ViewListIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </Form>
        </span>

        <span className="relative z-10 inline-flex shadow-sm rounded-md lg:order-1">
          <Form method="post" replace>
            <input type="hidden" name="order" value={order} />
            <button
              type="submit"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500">
              <span className="sr-only">
                {order === 'asc' ? 'Descending order' : 'Ascending order'}
              </span>
              {order === 'asc' ? (
                <SortAscendingIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <SortDescendingIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </Form>
          <Menu as="span" className="-ml-px relative block">
            <Menu.Button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500">
              Sort
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 sm:px-4 sm:py-2">
                  {sort.map((item) => (
                    <Menu.Item key={item.name} as={Form} method="post" replace>
                      {({ active }) => (
                        <button
                          type="submit"
                          name="sort"
                          value={item.name}
                          className={clsx(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'w-full text-left block px-4 py-2 text-sm'
                          )}>
                          {item.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </span>
      </div>
    </>
  )
}
