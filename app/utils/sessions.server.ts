// app/sessions.js
import { createCookieSessionStorage, redirect } from 'remix'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: '__user:session',

      // all of these are optional
      //   domain: 'remix.run',
      //   expires: new Date(Date.now() + 60),
      httpOnly: true,
      //   maxAge: 60,
      path: '/',
      sameSite: 'lax',
      secrets: ['change-this-later'],
      secure: true,
    },
  })

export function getUserSession(request: Request) {
  return getSession(request.headers.get('Cookie'))
}

export async function clearCookie(request: Request) {
  const session = await getUserSession(request)

  if (session.has('session')) {
    return redirect('/login', {
      headers: {
        'Set-Cookie': await destroySession(session),
      },
    })
  }
}
