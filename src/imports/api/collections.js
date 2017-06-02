import { Mongo } from 'meteor/mongo'

export const Notes = new Mongo.Collection('notes')
export const Items = new Mongo.Collection('items')
