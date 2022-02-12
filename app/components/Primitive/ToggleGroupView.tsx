import { ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

interface ToggleGroupProps {
  defaultValue?: string[]
  ariaLabel?: string
}

export default ({ defaultValue, ariaLabel }: ToggleGroupProps) => (
  <ToggleGroup.Root
    type="multiple"
    defaultValue={defaultValue}
    aria-label={ariaLabel}
    className="relative z-0 inline-flex rounded-md shadow-sm"
  >
    {/* BUG: VALUE IS NOT RENDERED */}
    <ToggleGroup.Item
      type="submit"
      name="view"
      value="grid"
      className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
      aria-label="Grid View"
    >
      <ViewGridIcon className="pointer-events-none h-5 w-5" aria-hidden />
    </ToggleGroup.Item>
    <ToggleGroup.Item
      type="submit"
      name="view"
      value="list"
      className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
      aria-label="List View"
    >
      <ViewListIcon className="pointer-events-none h-5 w-5" aria-hidden />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
)
