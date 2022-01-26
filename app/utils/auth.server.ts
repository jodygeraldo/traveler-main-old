import { User } from '@prisma/client'
import { Authenticator, AuthorizationError } from 'remix-auth'
import { FormStrategy } from 'remix-auth-form'
import invariant from 'tiny-invariant'

import { sessionStorage } from '~/services/session.server'

import { login, signup } from './db/user.server'

export const authenticator = new Authenticator<User>(sessionStorage, {
  sessionErrorKey: 'auth-error',
})

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const action = form.get('_action')
    const username = form.get('username')
    const password = form.get('password')
    const server = form.get('server')

    invariant(typeof action === 'string', 'action must be a string')
    invariant(
      action === 'login' || action === 'signup',
      'action must be login or signup',
    )

    invariant(typeof username === 'string', 'username must be a string')
    if (username.length < 6 && username.length > 16) {
      throw new Error('username must be between 6 and 16 characters')
    }

    invariant(typeof password === 'string', 'password must be a string')
    if (password.length < 8) {
      throw new Error('password must be at least 8 characters')
    }

    if (action === 'login') {
      const user = await login(username, password)

      return user
    } else {
      invariant(typeof server === 'string', 'server not selected properly')
      const user = await signup(username, password, server)

      return user
    }
  }),
  'form',
)
