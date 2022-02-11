import { userViewPrefs } from '~/cookies'

interface pref {
  itemView: 'grid' | 'list'
  characterView: 'grid' | 'list'
}

export default async function getUserPref(request: Request) {
  // eslint-disable-next-line
  const viewPref = ((await userViewPrefs.parse(
    request.headers.get('Cookie'),
  )) || {
    itemView: 'grid',
    characterView: 'grid',
  }) as pref

  return viewPref
}

export async function getUpdatedUserPref(
  request: Request,
  viewFor: 'character' | 'item',
) {
  const userPref = await getUserPref(request)

  const searchParams = new URL(request.url).searchParams
  let viewParam = searchParams.get('view')
  if (viewParam !== 'grid' && viewParam !== 'list') {
    if (viewFor === 'character') {
      viewParam = userPref.characterView
    } else {
      viewParam = userPref.itemView
    }
  }
  const view = viewParam as 'grid' | 'list'
  if (viewFor === 'character') {
    userPref.characterView = view
  } else {
    userPref.itemView = view
  }

  return { userPref, view }
}
