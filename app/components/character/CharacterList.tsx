import type { FC } from 'react'

const CharacterList: FC = ({ children }) => {
  return (
    <div className="grid grid-cols-4 xs:grid-cols-6 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </div>
  )
}

export default CharacterList
