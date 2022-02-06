export default function InventoryGrid({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {children}
    </ul>
  )
}
