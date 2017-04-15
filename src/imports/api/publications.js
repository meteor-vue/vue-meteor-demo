import { Meteor } from 'meteor/meteor'
import { Notes } from './collections'

Meteor.publish('notes', function (limit) {
  return Notes.find({}, {
    sort: { created: -1 },
    limit,
  })
})
