import {
  ActionFunction,
  Form,
  json,
  Link,
  LoaderFunction,
  useLoaderData,
  useTransition,
} from 'remix'

import {
  authenticator,
  sessionStorage,
  supabaseStrategy,
} from '~/utils/auth.server'

type LoaderData = {
  error: { message: string } | null
}

export const action: ActionFunction = async ({ request }) => {
  await authenticator.authenticate('sb', request, {
    successRedirect: '/init',
    failureRedirect: '/login',
  })
}

export const loader: LoaderFunction = async ({ request }) => {
  await supabaseStrategy.checkSession(request, {
    successRedirect: '/',
  })

  const session = await sessionStorage.getSession(request.headers.get('Cookie'))

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
      <Link to={'/signup'} className="bg-primary-500 px-4 py-2 rounded-md">
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
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" name="_action" value="login">
          {transition.state === 'submitting' ? 'Sign you in...' : 'Login'}
        </button>
      </fieldset>
    </Form>
  )
}
