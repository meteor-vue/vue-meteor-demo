import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Notes } from './collections'

Meteor.methods({
  ['notes.add'] (args) {
    new SimpleSchema({
      text: { type: String },
    }).validate(args)

    const { text } = args

    Notes.insert({
      text,
      created: new Date(),
    })
  },

  ['notes.remove'] (args) {
    new SimpleSchema({
      _id:  { type: String },
    }).validate(args)

    const { _id } = args

    Notes.remove(_id)
  },
})
