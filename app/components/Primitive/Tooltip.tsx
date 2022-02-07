import * as Tooltip from '@radix-ui/react-tooltip'

interface TooltipProps extends Tooltip.TooltipContentProps {
  children: React.ReactNode
  content: string
  defaultOpen?: boolean
}

export default ({ content, defaultOpen, children, ...props }: TooltipProps) => (
  <Tooltip.Provider delayDuration={150}>
    <Tooltip.Root defaultOpen={defaultOpen}>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Content
        side="top"
        align="center"
        {...props}
        className="rounded bg-gray-900 px-2 py-1 text-sm text-gray-100"
      >
        {content}
        <Tooltip.Arrow
          offset={5}
          width={11}
          height={5}
          className="fill-gray-900"
        />
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
)
