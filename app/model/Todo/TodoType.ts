export interface ITodo {
  title: string
  description: string
  link?: string
  completed?: boolean
}

export type DayOfWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
