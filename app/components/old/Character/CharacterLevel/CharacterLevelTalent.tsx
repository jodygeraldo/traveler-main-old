import type { Dispatch, FC } from 'react'

import { Input } from '~/components/UI/Form/Input'
import { ICharacter } from '~/types/character'

interface Props {
  talent: ICharacter['progression']['talent']
  state: number[]
  setState: Dispatch<React.SetStateAction<number[]>>
}

const CharacterLevelTalent: FC<Props> = ({ talent, state, setState }) => {
  return (
    <div className="space-y-5">
      <div className="col-span-2">
        <h3 className="text-lg font-medium">Normal Attack</h3>
        <div className="flex items-center gap-4">
          <Input
            id="current-normal"
            name="old-normal"
            type="number"
            label="Current normal attack"
            hideLabel
            disabled
            min={1}
            max={10}
            defaultValue={talent[0]}
          />
          <div className="text-center">&rarr;</div>
          <Input
            id="to-level"
            name="new-level"
            type="number"
            label="To level"
            placeholder="To level"
            hideLabel
            min={1}
            max={10}
            value={state[0]}
            onChange={e =>
              setState(prevState => [
                parseInt(e.target.value, 10),
                prevState[1],
                prevState[2],
              ])
            }
          />
        </div>
      </div>
      <div className="col-span-2">
        <h3 className="text-lg font-medium">Elemental Skill</h3>
        <div className="flex grow items-center gap-4">
          <Input
            id="current-ascension"
            name="old-ascension"
            type="number"
            label="Current ascension"
            hideLabel
            disabled
            min={1}
            max={13}
            defaultValue={talent[1]}
          />
          <div className="text-center">&rarr;</div>
          <Input
            id="to-ascension"
            name="new-ascension"
            type="number"
            label="To ascension"
            placeholder="To ascension"
            hideLabel
            min={1}
            max={13}
            value={state[1]}
            onChange={e =>
              setState(prevState => [
                prevState[0],
                parseInt(e.target.value, 10),
                prevState[2],
              ])
            }
          />
        </div>
      </div>
      <div className="col-span-2">
        <h3 className="text-lg font-medium">Elemental Burst</h3>
        <div className="flex grow items-center gap-4">
          <Input
            id="current-ascension"
            name="old-ascension"
            type="number"
            label="Current ascension"
            hideLabel
            disabled
            min={1}
            max={13}
            defaultValue={talent[2]}
          />
          <div className="text-center">&rarr;</div>
          <Input
            id="to-ascension"
            name="new-ascension"
            type="number"
            label="To ascension"
            placeholder="To ascension"
            hideLabel
            min={1}
            max={13}
            value={state[2]}
            onChange={e =>
              setState(prevState => [
                prevState[0],
                prevState[1],
                parseInt(e.target.value, 10),
              ])
            }
          />
        </div>
      </div>
    </div>
  )
}

export default CharacterLevelTalent
