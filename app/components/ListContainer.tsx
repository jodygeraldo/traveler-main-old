export default function ListContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white border border-gray-300 overflow-hidden rounded-md">
      <ul role="list" className="divide-y divide-gray-300">
        {children}
      </ul>
    </div>
  )
}
