import 'intersection-observer'
import 'vue-googlemaps/dist/vue-googlemaps.css'

import { Meteor } from 'meteor/meteor'
import CreateApp from './app'

Meteor.startup(() => {
  CreateApp({
    ssr: false,
  })
})
