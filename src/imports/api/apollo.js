import { ApolloClient, createNetworkInterface } from 'apollo-client'

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

  const apolloClient = new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: 'https://api.graph.cool/simple/v1/cj1jvw20v3n310152sv0sirl7',
      transportBatching: true,
    }),
    ...(ssr ? {
      ssrMode: true,
    } : {
      initialState,
      ssrForceFetchDelay: 100,
    }),
  })

  return apolloClient
}
