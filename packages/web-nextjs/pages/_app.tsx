import type { AppProps } from 'next/app'
import App from '../../components/src/App'

const NextApp = ({ Component, pageProps }: AppProps) => {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}

export default NextApp
