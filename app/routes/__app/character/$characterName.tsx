import { Outlet } from 'remix'

import VerticalNavigation from '~/components/Navigation/VerticalNavigation'
import useSubNavigation from '~/hooks/useSubNavigation'

export default function CharacterDetailPage() {
  const subNavigation = useSubNavigation(2, 'Character Detail', [
    { name: 'Character Items Table', urlPathname: 'items' },
    { name: 'Manual Level Up', urlPathname: 'level-up' },
    // { name: 'Level Up With Inventory', urlPathname: 'level-with-inventory' },
  ])

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
      <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
        <VerticalNavigation items={subNavigation} />
      </aside>

      <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <Outlet />
      </div>
    </div>
  )
}
