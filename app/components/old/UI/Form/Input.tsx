import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { DefaultValue } from '@mantine/core/lib/components/MultiSelect/DefaultValue/DefaultValue'
import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

type InputProps = {
  hint?: string
  hideLabel?: boolean
  label: string
  error?: string
  help?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  className,
  hint,
  id,
  hideLabel,
  label,
  error,
  type,
  help,
  disabled,
  ...props
}: InputProps) => (
  <div className={className}>
    <div className={hint && 'flex justify-between'}>
      <label
        htmlFor={id}
        className={clsx(hideLabel && 'sr-only', 'block text-sm font-medium')}
      >
        {label}
      </label>
      {hint ? (
        <span className="text-sm text-gray-500" id="email-optional">
          {hint}
        </span>
      ) : null}
    </div>
    <div className={clsx(error && 'relative rounded-md shadow-sm', 'mt-1')}>
      <input
        type={type}
        id={id}
        className={clsx(
          disabled && 'cursor-not-allowed bg-gray-100',
          error
            ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
            : 'border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500',
          'block w-full rounded-md sm:text-sm',
        )}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : `${id}-description`}
        {...props}
      />
      {error ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      ) : null}
    </div>
    {help || error ? (
      <p
        className={clsx(
          error ? 'text-red-600' : 'text-gray-500',
          'mt-2 text-sm',
        )}
        id={error ? `${id}-error` : `${id}-description`}
      >
        {error ? error : help}
      </p>
    ) : null}
  </div>
)
