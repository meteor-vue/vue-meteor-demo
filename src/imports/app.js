import 'isomorphic-fetch'

import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

import { sync } from 'vuex-router-sync'

// Meteor Tracker integration
import VueMeteorTracker from 'vue-meteor-tracker'
Vue.use(VueMeteorTracker)

import * as VueGoogleMaps from 'vue2-google-maps/dist/vue-google-maps-stubbed'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDYiCgaYDFMoflWme0wnQyGCvw0xx-inqs',
    libraries: 'places',
  },
})

import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)

import VueApollo from 'vue-apollo'
import { createApolloClient } from './api/apollo'

import * as filters from './filters'
for (const key in filters) {
  Vue.filter(key, filters[key])
}

import App from './ui/App.vue'
import routes from './routes'
import storeOptions from './store'

function createApp (context) {
  const router = new VueRouter({
    mode: 'history',
    routes,
  })

  const store = new Vuex.Store(storeOptions)

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
      ...App,
    }),
    router,
    store,
    apolloProvider,
  }
}

export default createApp
