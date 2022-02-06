export default function CharacterGrid({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {children}
    </ul>
  )
}
