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

export enum FarmDayTypeEnum {
  MT = 'MondayThursday',
  TF = 'TuesdayFriday',
  WS = 'WednesdaySaturday',
}

export type FarmableItemType = {
  name: TalentBook
  characters: CharacterName[]
}

export type FarmableType = FarmableItemType[]
