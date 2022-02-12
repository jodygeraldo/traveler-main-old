import { Link, LoaderFunction, redirect } from 'remix'

export const loader: LoaderFunction = () => {
  return redirect('/handbook')
}
