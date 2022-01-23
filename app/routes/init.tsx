import { LoaderFunction, redirect } from 'remix'

import { requireUserSession } from '~/utils/auth.server'
import { getUserData } from '~/utils/user.server'
import { commitSession, getUserDataSession } from '~/utils/user-data.server'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await requireUserSession(request)
  const userDataSession = await getUserDataSession(request)
  const userData = await getUserData(user.id)
  userDataSession.set('userData', userData)

  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(userDataSession),
    },
  })
}
