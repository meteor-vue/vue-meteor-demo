import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Create the apollo client
export function createApolloClient (ssr = false) {
  let initialState

  if (!ssr && typeof window !== 'undefined') {
    const state = window.__APOLLO_STATE__
    if (state) {
      initialState = state.defaultClient
    }
    console.log(initialState)
  }

  const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cj1jvw20v3n310152sv0sirl7'
  })

  const cache = new InMemoryCache()
  if (initialState) cache.restore(initialState)

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    connectToDevTools: Meteor.isDevelopment,
    ...(ssr ? {
      ssrMode: true,
    } : {
      // This will temporary disable query force-fetching
      ssrForceFetchDelay: 100,
    }),
  })

  return apolloClient
}
