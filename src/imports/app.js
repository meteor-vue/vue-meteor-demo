import Vue from 'vue'

// Meteor Tracker integration
import VueMeteorTracker from 'vue-meteor-tracker'
Vue.use(VueMeteorTracker)

import * as filters from './filters'
for (const key in filters) {
  Vue.filter(key, filters[key])
}

import App from './ui/App.vue'
import router from './router'

function createApp () {
  return {
    app: new Vue({
      el: '#app',
      router,
      ...App,
    }),
    router,
  }
}

export default createApp
