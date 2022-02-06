import { FC, useEffect } from 'react'

interface Props {
  level: number
  ascension: number
}

const CharacterLevelManual: FC<Props> = ({ level, ascension }) => {
  return (
    <fieldset className="mt-2 mb-4 grid grid-cols-6 gap-4">
      <div className="col-span-3">
        <label htmlFor="level" className="block text-sm font-medium">
          Level
        </label>
        <input
          type="number"
          name="level"
          id="level"
          className="border-primary-300 bg-primary-600 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md shadow-sm sm:text-sm"
          defaultValue={level}
          min={1}
          max={90}
        />
      </div>
      <div className="col-span-3">
        <label htmlFor="ascension" className="block text-sm font-medium">
          Ascension
        </label>
        <input
          type="number"
          name="ascension"
          id="ascension"
          className="border-primary-300 bg-primary-600 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md shadow-sm sm:text-sm"
          defaultValue={ascension}
          min={0}
          max={6}
        />
      </div>
    </fieldset>
  )
}

export default CharacterLevelManual
