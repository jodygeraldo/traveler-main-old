import { MantineProvider } from '@mantine/core'
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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <MantineProvider theme={{ colorScheme: 'dark' }}>
          <Layout>
            <Outlet />
          </Layout>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
