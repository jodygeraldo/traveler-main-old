import { ActionFunction } from 'remix'

import { authenticator } from '~/utils/auth.server'

export const action: ActionFunction = async ({ request }) => {
  // it's fine i guess
  // eslint-disable-next-line
  await authenticator.logout(request, { redirectTo: '/clear' })
}