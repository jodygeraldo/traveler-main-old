import { createCookie } from 'remix'

export const userThemePref = createCookie('user-theme-pref', {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
})
