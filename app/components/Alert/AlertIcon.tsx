import {
  CheckCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid'

import { AlertVariant } from './Alert'

export default function AlertIcon({ variant }: { variant: AlertVariant }) {
  switch (variant) {
    case 'success':
      return (
        <CheckCircleIcon
          className="h-5 w-5 text-green-400"
          aria-hidden="true"
        />
      )
    case 'info':
      return (
        <InformationCircleIcon
          className="h-5 w-5 text-blue-400"
          aria-hidden="true"
        />
      )
    case 'warning':
      return (
        <ExclamationIcon
          className="h-5 w-5 text-yellow-400"
          aria-hidden="true"
        />
      )
    case 'error':
      return <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
    default:
      return null
  }
}
