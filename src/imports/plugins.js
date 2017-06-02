import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

// Meteor Tracker integration
import VueMeteorTracker from 'vue-meteor-tracker'
Vue.use(VueMeteorTracker)
Vue.config.meteor.freeze = true
console.log('tracker installed')

import * as VueGoogleMaps from 'vue2-google-maps/dist/vue-google-maps-stubbed'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCV908coKxEB_GcWuGucl79Zy_rIG4GQSI',
    libraries: 'places',
  },
})

import VueSupply from 'vue-supply'
Vue.use(VueSupply)

import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)

import VueApollo from 'vue-apollo'
Vue.use(VueApollo)

import * as filters from './filters'
for (const key in filters) {
  Vue.filter(key, filters[key])
}
