import '../styles/globals.css'
import Layout from '../components/Layout'
import { DefaultSeo } from 'next-seo'
import SEO from '../config/next-seo.config'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  )
}
