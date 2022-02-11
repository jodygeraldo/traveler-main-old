import { Outlet } from 'remix'

export default function CharacterPage() {
  return (
    <main className="mx-auto max-w-7xl pb-10 lg:py-12 lg:px-8">
      <Outlet />
    </main>
  )
}
