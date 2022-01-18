import { createCookieSessionStorage } from 'remix'
import { Authenticator, AuthorizationError } from 'remix-auth'
import { SupabaseStrategy } from 'remix-auth-supabase'
import invariant from 'tiny-invariant'

import type { Session, User } from './supabase.server'
import { sbClient } from './supabase.server'
import { getUserData, initUserData } from './user.server'

if (!process.env.AUTH_COOKIE_SECRET) {
  throw new Error('AUTH_COOKIE_SECRET is required')
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'sb',
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secrets: [process.env.AUTH_COOKIE_SECRET],
    secure: process.env.NODE_ENV === 'production',
  },
})

export const supabaseStrategy = new SupabaseStrategy(
  {
    supabaseClient: sbClient,
    sessionStorage,
  },

  async ({ req, supabaseClient }) => {
    const form = await req.formData()
    const $action = form.get('_action')
    const email = form.get('email')
    const password = form.get('password')

    if (!email) throw new AuthorizationError('Email is required')
    if (typeof email !== 'string') {
      throw new AuthorizationError('Email must be a string')
    }

    if (!password) throw new AuthorizationError('Password is required')
    if (typeof password !== 'string') {
      throw new AuthorizationError('Password must be a string')
    }
    if (password.length < 8 || password.length > 16) {
      throw new AuthorizationError(
        'Password must be between 8 and 16 characters',
      )
    }

    if ($action === 'login') {
      const { data, error } = await supabaseClient.auth.api.signInWithEmail(
        email,
        password,
      )

      if (error || !data) {
        throw new AuthorizationError(error?.message ?? '')
      }

      return data
    } else {
      const { data, error } = await supabaseClient.auth.api.signUpWithEmail(
        email,
        password,
      )

      if (error || !data) {
        throw new AuthorizationError(error?.message ?? '')
      }

      const sessionData = data as Session
      invariant(
        typeof sessionData.user?.id === 'string',
        'This should never throw',
      )
      await initUserData(sessionData.user.id)

      return data as Session
    }
  },
)

export const authenticator = new Authenticator<Session>(sessionStorage, {
  sessionKey: supabaseStrategy.sessionKey, // keep in sync
  sessionErrorKey: supabaseStrategy.sessionErrorKey, // keep in sync
})

authenticator.use(supabaseStrategy)
