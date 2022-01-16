import type { FC } from 'react'

import { IFarmable } from '~/types/farmable'

import FarmableItem from './FarmableItem'

interface Props {
  farmable: IFarmable
}

const FarmableList: FC<Props> = ({ farmable }) => {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {farmable.talent_book.map(item => (
        <FarmableItem key={item.name} item={item} />
      ))}
    </ul>
  )
}

export default FarmableList
