import * as Switch from '@radix-ui/react-switch'
import clsx from 'clsx'

interface SwitchProps {
  id: string
  name: string
  defaultChecked?: boolean
}

export default ({ id, name, defaultChecked }: SwitchProps) => (
  <Switch.Root
    id={id}
    defaultChecked={defaultChecked}
    name={name}
    className={clsx(
      'switch-root relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
    )}
  >
    <Switch.Thumb
      className={clsx(
        'switch-thumb inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
      )}
    />
  </Switch.Root>
)
