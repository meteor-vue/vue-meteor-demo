import { Meteor } from 'meteor/meteor'
import { Notes, Items } from './collections'

Meteor.publish('notes', function (limit) {
  return Notes.find({}, {
    sort: { created: -1 },
    limit,
  })
})

Meteor.publish('items', function () {
  return Items.find({})
})
