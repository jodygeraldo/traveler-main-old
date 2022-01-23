// app/sessions.js
import { createCookieSessionStorage, redirect } from 'remix'

if (!process.env.USER_COOKIE_SECRET) {
  throw new Error('USER_COOKIE_SECRET is required')
}

// eslint-disable-next-line @typescript-eslint/unbound-method
export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: 'ud',
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secrets: [process.env.USER_COOKIE_SECRET],
      secure: process.env.NODE_ENV === 'production',
    },
  })

export function getUserDataSession(request: Request) {
  return getSession(request.headers.get('Cookie'))
}

export async function clearUserDataSession(request: Request) {
  const session = await getUserDataSession(request)

  if (session.has('userData')) {
    return redirect('/login', {
      headers: {
        'Set-Cookie': await destroySession(session),
      },
    })
  }

  return redirect('/login')
}
