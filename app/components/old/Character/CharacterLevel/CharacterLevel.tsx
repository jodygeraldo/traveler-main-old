import { Dispatch, FC } from 'react'

import { Input } from '~/components/UI/Form/Input'

interface Props {
  level: number
  ascension: number
  state: {
    toLevel: number
    toAscension: number
  }
  setState: {
    setToLevel: Dispatch<React.SetStateAction<number>>
    setToAscension: Dispatch<React.SetStateAction<number>>
  }
}

const CharacterLevel: FC<Props> = ({ level, ascension, state, setState }) => {
  return (
    <div className="space-y-5">
      <div className="col-span-3">
        <h3 className="text-lg font-medium">Level</h3>
        <div className="flex items-center gap-4">
          <Input
            className="w-24"
            id="current-level"
            name="old-level"
            type="number"
            label="Current level"
            hideLabel
            disabled
            min={1}
            max={90}
            defaultValue={level}
          />
          <div className="text-center">&rarr;</div>
          <Input
            className="w-24"
            id="to-level"
            name="new-level"
            type="number"
            label="To level"
            hideLabel
            min={1}
            max={90}
            value={state.toLevel}
            onChange={e => setState.setToLevel(parseInt(e.target.value, 10))}
          />
        </div>
      </div>
      <div className="col-span-3">
        <h3 className="text-lg font-medium">Ascension</h3>
        <div className="flex grow items-center gap-4">
          <Input
            className="w-24"
            id="current-ascension"
            name="old-ascension"
            type="number"
            label="Current ascension"
            hideLabel
            disabled
            min={0}
            max={6}
            defaultValue={ascension}
          />
          <div className="text-center">&rarr;</div>
          <Input
            className="w-24"
            id="to-ascension"
            name="new-ascension"
            type="number"
            label="To ascension"
            hideLabel
            min={0}
            max={6}
            value={state.toAscension}
            onChange={e =>
              setState.setToAscension(parseInt(e.target.value, 10))
            }
          />
        </div>
      </div>
    </div>
  )
}

export default CharacterLevel
