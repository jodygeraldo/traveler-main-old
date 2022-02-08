import {
  json,
  LoaderFunction,
  Outlet,
  ShouldReloadFunction,
  useLoaderData,
} from 'remix'
import invariant from 'tiny-invariant'

import AppsLayout from '~/components/AppsLayout'
import { requireUserId } from '~/services/auth.server'
import { getUserData } from '~/utils/db/user.server'

interface LoaderData {
  email: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const id = await requireUserId(request)
  const userData = await getUserData(id)

  invariant(userData, "User data doesn't exist. WHO ARE YOU?")

  return json({ email: userData.email }, { status: 200 })
}

export default function AppLayout() {
  const { email } = useLoaderData<LoaderData>()

  return (
    <AppsLayout email={email}>
      <Outlet />
    </AppsLayout>
  )
}

export const unstable_shouldReload: ShouldReloadFunction = () => false
