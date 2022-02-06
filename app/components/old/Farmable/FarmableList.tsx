import type { FC } from 'react'

import { FarmableType } from '~/types/farmable'

import FarmableItem from './FarmableItem'

interface Props {
  farmable: FarmableType
}

const FarmableList: FC<Props> = ({ farmable }) => {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {farmable.map(item => (
        <FarmableItem key={item.name} item={item} />
      ))}
    </ul>
  )
}

export default FarmableList
