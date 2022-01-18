import type { MetaFunction } from 'remix'
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'

import Layout from './components/Layout'
import styles from './tailwind.css'
import { authenticator } from './utils/auth.server'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
    { rel: 'stylesheet', href: styles },
  ]
}

export const meta: MetaFunction = () => {
  return { title: 'Genshin Impact Companion' }
}

export default function App() {
  return (
    <html lang="en" className="h-full bg-primary-900 text-primary-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
