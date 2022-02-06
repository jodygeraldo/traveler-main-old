import clsx from 'clsx'

import { AlertVariant } from './Alert'

type AlertDescriptionProps = {
  variant: AlertVariant
  text: string
}

const textVariant: Record<AlertVariant, string> = {
  success: 'text-green-700',
  warning: 'text-yellow-700',
  error: 'text-red-700',
  info: 'text-blue-700',
}

export default function AlertDescription({
  variant,
  text,
}: AlertDescriptionProps) {
  return (
    <div className={clsx(textVariant[variant], 'mt-2 text-sm')}>
      <p>{text}</p>
    </div>
  )
}
