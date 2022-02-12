export default function CharacterDetail({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) {
  return (
    <div className="flex-1 overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-3xl font-medium leading-6 text-gray-900">{name}</h3>
      </div>

      <div className="border-t border-gray-200">
        <dl>{children}</dl>
      </div>
    </div>
  )
}
