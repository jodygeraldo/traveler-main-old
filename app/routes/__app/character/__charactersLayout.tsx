import { Outlet } from 'remix'

import VerticalNavigation from '~/components/Navigation/VerticalNavigation'
import useSubNavigation from '~/hooks/useSubNavigation'

export default function CharactersLayout() {
  // const subNavigation = useSubNavigation(1, 'Character List', [
  //   { name: 'Character Tracker', urlPathname: 'tracker' },
  // ])

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
      {/* <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
        <VerticalNavigation items={subNavigation} />
      </aside> */}

      <div className="space-y-6 sm:px-6 lg:col-span-12 lg:px-0">
        <Outlet />
      </div>
    </div>
  )
}
