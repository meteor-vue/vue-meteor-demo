import Vue from 'vue'
import { ApolloClient, createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

// Install the vue plugin
Vue.use(VueApollo)

// Create the apollo client
export function createApolloClient (initialState) {
  const apolloClient = new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: 'https://api.graph.cool/simple/v1/cj1jvw20v3n310152sv0sirl7',
      transportBatching: true,
    }),
  })

  return apolloClient
}
