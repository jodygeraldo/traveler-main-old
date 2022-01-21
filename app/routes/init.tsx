import { LoaderFunction, redirect } from 'remix'
import invariant from 'tiny-invariant'

import { supabaseStrategy } from '~/utils/auth.server'
import { getUserData } from '~/utils/user.server'
import { commitSession, getUserDataSession } from '~/utils/user-data.server'

export const loader: LoaderFunction = async ({ request }) => {
  const session = await supabaseStrategy.checkSession(request, {
    failureRedirect: '/login',
  })

  invariant(typeof session.user?.id === 'string', 'This should never throw')
  const userDataSession = await getUserDataSession(request)
  const userData = await getUserData(session.user.id)
  userDataSession.set('userData', userData)

  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(userDataSession),
    },
  })
}
