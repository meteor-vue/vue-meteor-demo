import 'intersection-observer'

import { Meteor } from 'meteor/meteor'
import CreateApp from './app'

Meteor.startup(() => {
  CreateApp({
    ssr: false,
  })
})
