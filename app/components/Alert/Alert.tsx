import clsx from 'clsx'

import AlertIcon from './AlertIcon'

export type AlertVariant = 'success' | 'warning' | 'error' | 'info'

type AlertProps = {
  variant: AlertVariant
  text: string
  smallText?: boolean
}

const bgVariant: Record<AlertVariant, string> = {
  success: 'bg-green-50',
  warning: 'bg-yellow-50',
  error: 'bg-red-50',
  info: 'bg-blue-50',
}

const textVariant: Record<AlertVariant, string> = {
  success: 'text-green-800',
  warning: 'text-yellow-800',
  error: 'text-red-800',
  info: 'text-blue-800',
}

export default function Alert({
  variant,
  text,
  smallText = false,
  children,
}: AlertProps & {
  children?: React.ReactNode
}) {
  return (
    <div className={clsx(bgVariant[variant], 'rounded-md p-4')}>
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertIcon variant={variant} />
        </div>
        <div className="ml-3">
          {smallText ? (
            <p className={clsx(textVariant[variant], 'text-sm')}>{text}</p>
          ) : (
            <h3 className={clsx(textVariant[variant], 'text-sm font-medium')}>
              {text}
            </h3>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}
