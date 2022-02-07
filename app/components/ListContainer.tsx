export default function ListContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
      <ul role="list" className="divide-y divide-gray-300">
        {children}
      </ul>
    </div>
  )
}
