// pages/_app.js is where you need to client-side codes. It is shared between all pages.

import '@/styles/styles.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
