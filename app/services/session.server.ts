import { createCookieSessionStorage } from 'remix'
import invariant from 'tiny-invariant'

invariant(process.env.AUTH_COOKIE_SECRET, 'AUTH_COOKIE_SECRET is required')

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'raf',
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secrets: [process.env.AUTH_COOKIE_SECRET],
    secure: process.env.NODE_ENV === 'production',
  },
})

// eslint-disable-next-line
export const { getSession, commitSession, destroySession } = sessionStorage
