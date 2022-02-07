import { TodoType } from '@prisma/client'

import { ITodo } from './TodoType'

const TodoMap = new Map<TodoType, ITodo[]>()

TodoMap.set(TodoType.Daily, [
  {
    title: 'Daily Commission',
    description: 'Daily Commission description',
  },
  {
    title: 'Expedition',
    description: 'Expedition description',
  },
  {
    title: 'Claim Teapot Realm Currency',
    description: 'Claim Teapot Realm Currency description',
  },
  {
    title: 'Claim Realm Bounty',
    description: 'Claim Realm Bounty teapot friendship exp description',
  },
  {
    title: 'Ore Farms',
    description: 'Ore Farms description',
  },
  {
    title: 'Artifact Farms',
    description: 'Artifact Farms description',
  },
  {
    title: 'HoYoLAB Check-In',
    description: 'HoYoLAB Check-In description',
    link: 'https://webstatic-sea.mihoyo.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&mhy_auth_required=true&mhy_presentation_style=fullscreen&utm_source=tools&lang=en-us&bbs_theme=dark&bbs_theme_device=1',
  },
])

TodoMap.set(TodoType.Weekly, [
  {
    title: 'Parametric Transformer',
    description: 'Parametric Transformer description',
  },
  {
    title: 'Request',
    description: 'Request description',
  },
  {
    title: 'Bounty',
    description: 'Bounty description',
  },
  {
    title: 'Lupus Boreas, Dominator of Wolves',
    description: 'Lupus Boreas, Dominator of Wolves description',
  },
  {
    title: 'Confront Stormterror',
    description: 'Confront Stormterror description',
  },
  {
    title: 'Enter the Golden House',
    description: 'Enter the Golden House description',
  },
  {
    title: 'Beneath the Dragon-Queller',
    description: 'Beneath the Dragon-Queller description',
  },
  {
    title: 'Narukami Island: Tenshukaku',
    description: 'Narukami Island: Tenshukaku description',
  },
])

TodoMap.set(TodoType.Others, [
  {
    title: 'Spiral Abbys',
    description: 'Spiral Abbys description',
  },
  {
    title: 'Events',
    description: 'Events description',
  },
  {
    title: 'Teapot Garden(?)',
    description: 'Teapot Garden(?) description',
  },
])

export default TodoMap
