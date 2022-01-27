import type { FC } from 'react'

type Props = {
  name: string
}

const ItemList: FC<Props> = ({ name, children }) => {
  return (
    <div className="mb-8 space-y-4 last-of-type:mb-0">
      <h1>{name}</h1>
      {children}
    </div>
  )
}

export default ItemList
