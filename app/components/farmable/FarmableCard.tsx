import type { FC } from 'react'

import { IFarmable } from '~/types/farmable'

import FarmableList from './FarmableList'

interface Props {
  farmable: IFarmable
}

const FarmableCard: FC<Props> = ({ farmable }) => {
  return (
    <div className="text-white">
      <div className="bg-primary-400 px-4 py-5 border-b border-gray-200 sm:px-6 sm:rounded-t-md">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Today's farmables
        </h3>
      </div>
      <div className="bg-primary-400 shadow overflow-hidden sm:rounded-b-md">
        <FarmableList farmable={farmable} />
      </div>
    </div>
  )
}

export default FarmableCard
