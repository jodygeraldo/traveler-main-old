export default function CharacterList({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {children}
      </ul>
    </div>
  )
}
