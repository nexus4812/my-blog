import '../styles/global.css'
import '../styles/normalize.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
