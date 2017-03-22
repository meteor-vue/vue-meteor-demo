import { Meteor } from 'meteor/meteor'
import CreateApp from './app'

Meteor.startup(() => {
  CreateApp()
})
