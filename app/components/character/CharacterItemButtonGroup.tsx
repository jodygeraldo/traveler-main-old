import { Form, useSearchParams } from 'remix'

import Label from '~/components/Primitive/Label'
import Switch from '~/components/Primitive/Switch'

export default function CharacterItemButtonGroup({ name }: { name: string }) {
  const [searchParams] = useSearchParams()

  return (
    <Form method="get" replace>
      <Label htmlFor="show-all-switch">Show full items</Label>
      <div className="mt-5 sm:flex sm:items-start sm:justify-between">
        <div className="max-w-xl text-sm text-gray-500">
          <p>{`Enable to show full items for ${name}.`}</p>
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
          <Switch
            id="show-all-switch"
            name="all"
            defaultChecked={searchParams.has('all')}
          />
        </div>
      </div>
    </Form>
  )
}
