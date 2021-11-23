import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactNode } from 'react'
import { NextPageWithLayout } from '@/frontend/layouts/layout.types'
import { useApollo } from '@/frontend/lib/apolloClient'
import './_app.css'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout): ReactNode {
  const { initialApolloState, ...otherPageProps } = pageProps
  const apolloClient = useApollo(initialApolloState)

  // Use the layouts defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/BrikLSquare.svg" />
        <title>Swatch generator - BRIKL</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        {getLayout(<Component {...otherPageProps} />)}
      </ApolloProvider>
    </>
  )
}

export default App
