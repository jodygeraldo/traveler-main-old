import type { FC } from 'react'

interface Props {
  title: string
}

const SectionHeading: FC<Props> = ({ title }) => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
    </div>
  )
}

export default SectionHeading
