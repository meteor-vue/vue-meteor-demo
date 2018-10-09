import { Meteor } from 'meteor/meteor'
import { Notes, Items } from './collections'

Meteor.publish('notes', function (filter) {
  let selector
  if (filter) {
    selector = {
      $text: {
        $search: filter,
      },
    }
  } else {
    selector = {}
  }
  return Notes.find(selector, {
    sort: { created: -1 },
  })
})

Meteor.publish('items', function () {
  return Items.find({})
})
