import * as Label from '@radix-ui/react-label'

interface LabelProps {
  htmlFor: string
  className?: string
  children: React.ReactNode
}

export default ({ htmlFor, className, children }: LabelProps) => (
  <Label.Root
    className={
      className ? className : 'text-lg font-medium leading-6 text-gray-900'
    }
    htmlFor={htmlFor}
  >
    {children}
  </Label.Root>
)
