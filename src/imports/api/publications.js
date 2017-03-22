import { Meteor } from 'meteor/meteor'
import { Notes } from './collections'

Meteor.publish('notes', function () {
  return Notes.find()
})
