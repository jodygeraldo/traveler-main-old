import { LoaderFunction } from 'remix'

import { clearUserDataSession } from '~/utils/user-data.server'

export const loader: LoaderFunction = async ({ request }) => {
  // it's fine i guess
  // eslint-disable-next-line
  return await clearUserDataSession(request)
}
