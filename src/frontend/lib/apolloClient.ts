import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

export function useApollo(
  initialApolloState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
  return useMemo(
    () => initializeApollo(initialApolloState),
    [initialApolloState]
  )
}

function initializeApollo(initialState: NormalizedCacheObject) {
  const newApolloClient = apolloClient ?? createApolloClient()
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = newApolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    newApolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (!process.browser) return newApolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = newApolloClient
  }

  return newApolloClient
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: !process.browser,
    uri: '/api/graphql',
    cache: new InMemoryCache(),
  })
}
