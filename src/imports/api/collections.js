import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor';

export const Notes = new Mongo.Collection('notes')
export const Items = new Mongo.Collection('items')

if (Meteor.isServer) {
  Notes.rawCollection().createIndex({
    text: 'text',
  })
}
