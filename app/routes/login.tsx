import {
  ActionFunction,
  Form,
  json,
  Link,
  LoaderFunction,
  useLoaderData,
  useTransition,
} from 'remix'

import { authenticator } from '~/services/auth.server'
import { getSession } from '~/services/session.server'

export const action: ActionFunction = async ({ request }) => {
  return authenticator.authenticate('form', request, {
    successRedirect: '/',
    failureRedirect: '/login',
  })
}

type LoaderData = {
  error: { message: string } | null
}
export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: '/',
  })
  const session = await getSession(request.headers.get('Cookie'))

  const error = session.get(
    authenticator.sessionErrorKey,
  ) as LoaderData['error']

  return json<LoaderData>({ error })
}

export default function LoginPage() {
  const { error } = useLoaderData<LoaderData>()
  const transition = useTransition()

  return (
    <Form replace method="post">
      <Link to={'/signup'} className="bg-primary-500 rounded-md px-4 py-2">
        Go to Signup
      </Link>
      {error && <div>{error.message}</div>}
      <fieldset disabled={transition.state === 'submitting'} className="mt-6">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" minLength={8} />
        </div>

        <button type="submit" name="_action" value="login">
          {transition.state === 'submitting' ? 'Sign you in...' : 'Login'}
        </button>
      </fieldset>
    </Form>
  )
}
