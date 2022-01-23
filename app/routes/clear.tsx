import { LoaderFunction } from 'remix'

import { clearUserDataSession } from '~/utils/user-data.server'

export const loader: LoaderFunction = async ({ request }) => {
  return clearUserDataSession(request)
}
