import clsx from 'clsx'
import { FC } from 'react'

type Props = {
  titleLabel: string
  bigText?: boolean
  center?: boolean
  asButton?: boolean
  buttonLabel?: string
}

const Divider: FC<Props> = ({
  titleLabel,
  buttonLabel,
  bigText,
  center,
  asButton,
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div
        className={clsx(
          center && 'justify-center',
          buttonLabel && 'justify-between',
          'relative flex',
        )}
      >
        {asButton ? null : (
          <span
            className={clsx(
              bigText && center ? 'px-3' : 'pr-3',
              !bigText && center ? 'px-2' : 'pr-2',
              bigText
                ? 'text-lg font-medium text-gray-900'
                : 'text-sm text-gray-500',
              'bg-white',
            )}
          >
            {titleLabel}
          </span>
        )}
        {asButton || buttonLabel ? (
          <button
            type="button"
            className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {asButton ? titleLabel : buttonLabel}
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default Divider
