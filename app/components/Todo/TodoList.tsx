interface TodoListProps {
  legend: string
  children: React.ReactNode
}

export default ({ legend, children }: TodoListProps) => {
  return (
    <fieldset className="relative -space-y-px rounded-md bg-white">
      <legend className="sr-only">{legend}</legend>
      {children}
    </fieldset>
  )
}
