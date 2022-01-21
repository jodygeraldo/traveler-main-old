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
    failureRedirect: '/signup',
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

export default function SignupPage() {
  const { error } = useLoaderData<LoaderData>()
  const transition = useTransition()

  return (
    <Form replace method="post">
      <Link to={'/login'} className="bg-primary-500 px-4 py-2 rounded-md">
        Go to Login
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

        <div>
          <label
            htmlFor="server"
            className="block text-sm font-medium text-gray-700"
          >
            Server
          </label>
          <select
            id="server"
            name="server"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="Canada"
          >
            <option value="AS">Asia</option>
            <option value="NA">America</option>
            <option value="EU">Europe</option>
          </select>
        </div>

        <button type="submit" name="_action" value="signup">
          {transition.state === 'submitting'
            ? 'Creating your account...'
            : 'Sign Up'}
        </button>
      </fieldset>
    </Form>
  )
}
