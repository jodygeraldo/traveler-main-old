import { Server } from '@prisma/client'
import { Authenticator } from 'remix-auth'
import { FormStrategy } from 'remix-auth-form'
import invariant from 'tiny-invariant'

import { sessionStorage } from '~/services/session.server'

import { login, signup } from '../utils/db/user.server'

export const authenticator = new Authenticator<{ id: string; server: string }>(
  sessionStorage,
  {
    sessionErrorKey: 'auth-error',
  },
)

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const action = form.get('_action')
    const email = form.get('email')
    const password = form.get('password')
    const server = form.get('server')

    invariant(typeof action === 'string', 'action must be a string')
    invariant(
      action === 'login' || action === 'signup',
      'action must be login or signup',
    )

    invariant(typeof email === 'string', 'Email must be a string')
    // html native email input validation should be enough

    invariant(typeof password === 'string', 'password must be a string')
    if (password.length < 8) {
      throw new Error('password must be at least 8 characters')
    }

    if (action === 'login') {
      const user = await login(email, password)

      return user
    } else {
      invariant(typeof server === 'string', 'server not selected properly')
      if (server !== 'America' && server !== 'Europe' && server !== 'Asia') {
        throw new Error('server not selected properly')
      }
      const user = await signup(email, password, server)

      return user
    }
  }),
  'form',
)

export async function requireUser(request: Request) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  return {
    id: user.id,
    server: user.server as Server,
  }
}

export async function requireUserId(request: Request) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  return user.id
}

export async function requireUserServer(request: Request) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  const server = user.server as Server

  return server
}
