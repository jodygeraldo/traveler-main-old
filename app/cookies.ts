import { createCookie } from 'remix'

export const userThemePrefs = createCookie('user-theme-pref', {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
})

export const userViewPrefs = createCookie('user-view-pref', {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
})
