import clsx from 'clsx'

import { AlertVariant } from './Alert'

type AlertListProps = {
  variant: AlertVariant
  list: string[]
}

const textVariant: Record<AlertVariant, string> = {
  success: 'text-green-700',
  warning: 'text-yellow-700',
  error: 'text-red-700',
  info: 'text-blue-700',
}

export default function AlertList({ variant, list }: AlertListProps) {
  return (
    <div className={clsx(textVariant[variant], 'mt-2 text-sm')}>
      <ul role="list" className="list-disc space-y-1 pl-5">
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
