export interface ITodo {
  title: string
  description: string
  link?: string
  completed?: boolean
}

export enum TodoTypeEnum {
  Daily = 'DAILY',
  Weekly = 'WEEKLY',
  Others = 'OTHERS',
}
