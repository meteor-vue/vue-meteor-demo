import 'isomorphic-fetch'

import './plugins'
import './supply'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import VueApollo from 'vue-apollo'
import { createApolloClient } from './api/apollo'
import { injectSupply } from 'vue-supply'
import App from './ui/App.vue'
import routes from './routes'
import storeOptions from './store'

function createApp (context) {
  const router = new VueRouter({
    mode: 'history',
    routes,
  })

  const supplyCache = {}
  const suppliedStoreOptions = injectSupply(storeOptions, supplyCache)
  const store = new Vuex.Store(suppliedStoreOptions)

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // Apollo
  const apolloClient = createApolloClient(context.ssr)
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  })

  return {
    app: new Vue({
      el: '#app',
      router,
      store,
      apolloProvider,
      supplyCache,
      ...App,
    }),
    router,
    store,
    apolloProvider,
  }
}

export default createApp
