import type { Session, User } from '@supabase/supabase-js'
import { createClient } from '@supabase/supabase-js'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUPABASE_URL: string
      SUPABASE_SERVICE_KEY: string
    }
  }
}

if (!process.env.SUPABASE_URL) {
  throw new Error('SUPABASE_URL is required')
}

if (!process.env.SUPABASE_SERVICE_KEY) {
  throw new Error('SUPABASE_SERVICE_KEY is required')
}

// Supabase options example (build your own :))
// https://supabase.com/docs/reference/javascript/initializing#with-additional-parameters

const supabaseOptions = {
  persistSession: true,
  autoRefreshToken: true,
  detectSessionInUrl: true,
}

// ⚠️ cloudflare needs you define fetch option : https://github.com/supabase/supabase-js#custom-fetch-implementation
// Use Remix fetch polyfill for node (See https://remix.run/docs/en/v1/other-api/node)

export const sbClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
  supabaseOptions,
)

export { Session, User }
