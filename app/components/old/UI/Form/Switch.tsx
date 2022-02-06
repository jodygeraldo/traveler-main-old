import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import type { FC } from 'react'

interface Props {
  enabled: boolean
  setEnabled: (enabled: boolean) => void
  label?: string
  description?: string
  ariaLabel?: string
}

const SwitchLabelDescriptionLeft: FC<Props> = ({
  enabled,
  setEnabled,
  label,
  description,
  ariaLabel,
}) => {
  return (
    <Switch.Group
      as="div"
      className={clsx(label && 'gap-4', 'flex items-center justify-between')}
    >
      <span className="flex flex-grow flex-col">
        <Switch.Label
          as="span"
          className="text-sm font-medium text-gray-900"
          passive
          aria-label={ariaLabel}
        >
          {label}
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-500">
          {description}
        </Switch.Description>
      </span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={clsx(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        )}
      >
        <span
          aria-hidden="true"
          className={clsx(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
          )}
        />
      </Switch>
    </Switch.Group>
  )
}

export default SwitchLabelDescriptionLeft
