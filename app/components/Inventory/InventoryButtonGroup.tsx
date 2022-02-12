import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Form } from 'remix'

interface ToggleGroupProps {
  defaultValue?: string
  ariaLabel?: string
}

export default ({ defaultValue, ariaLabel }: ToggleGroupProps) => (
  <Form>
    <ToggleGroup.Root
      type="single"
      defaultValue={defaultValue}
      aria-label={ariaLabel}
      className="bg-red-900"
    >
      <ToggleGroup.Item
        type="submit"
        name="test"
        value="1"
        aria-label="Grid View"
      >
        <h1>test</h1>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        type="submit"
        name="test"
        value="2"
        aria-label="List View"
      >
        <h1>test2</h1>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  </Form>
)
