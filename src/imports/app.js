import Vue from 'vue'

// Meteor Tracker integration
import VueMeteorTracker from 'vue-meteor-tracker'
Vue.use(VueMeteorTracker)

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
