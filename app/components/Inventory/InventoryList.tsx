export default function InventoryList({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {children}
      </ul>
    </div>
  )
}
