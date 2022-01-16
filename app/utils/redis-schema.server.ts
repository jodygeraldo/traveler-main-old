import { Entity, Schema } from 'redis-om'

export interface DailyTodo {
  user_id: string
  complete: string[]
}
export class DailyTodo extends Entity {}
export const dailyTodoSchema = new Schema(DailyTodo, {
  user_id: { type: 'string' },
  complete: { type: 'array' },
})

export interface WeeklyTodo {
  user_id: string
  complete: string[]
}
export class WeeklyTodo extends Entity {}
export const weeklyTodoSchema = new Schema(WeeklyTodo, {
  user_id: { type: 'string' },
  complete: { type: 'array' },
})

export interface OthersTodo {
  user_id: string
  complete: string[]
}
export class OthersTodo extends Entity {}
export const othersTodoSchema = new Schema(OthersTodo, {
  user_id: { type: 'string' },
  complete: { type: 'array' },
})
