import { CharacterName } from './character'
import { TalentBook } from './item'

export type DayOfWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'

export interface IFarmableItem {
  name: TalentBook
  image: string
  characters: Array<{
    name: CharacterName
    image: string
  }>
}

export interface IFarmable {
  days:
    | ['Sunday', 'Monday', 'Thursday']
    | ['Sunday', 'Tuesday', 'Friday']
    | ['Sunday', 'Wednesday', 'Saturday']
  talent_book: Array<IFarmableItem>
}
