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
    failureRedirect: '/signup',
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

  console.log(error)

  return json<LoaderData>({ error })
}

export default function SignupPage() {
  const { error } = useLoaderData<LoaderData>()
  const transition = useTransition()

  return (
    <Form replace method="post">
      <Link to={'/login'} className="bg-primary-500 rounded-md px-4 py-2">
        Go to Login
      </Link>
      {error && <div>{error.message}</div>}
      <fieldset disabled={transition.state === 'submitting'} className="mt-6">
        <div>
          <label htmlFor="username">Email</label>
          <input
            type="username"
            name="username"
            id="username"
            minLength={6}
            maxLength={16}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" minLength={8} />
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
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
