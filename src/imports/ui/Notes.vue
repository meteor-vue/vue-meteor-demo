<template>
  <div class="notes">
    <input v-model="newNote" placeholder="Add a note" @keyup.enter="addNote" />
    <div class="note" v-for="note in notes">
      <div class="actions"><button @click="removeNote(note)">Delete note</button></div>
      <div class="text">{{ note.text }}</div>
    </div>
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor'
import { Notes } from '../api/collections'

export default {
  data () {
    return {
      newNote: '',
      notes: [],
    }
  },

  meteor: {
    subscribe: {
      'notes': [],
    },
    notes () {
      return Notes.find()
    },
  },

  methods: {
    async addNote () {
      if (this.newNote) {
        try {
          await Meteor.callPromise('notes.add', {
            text: this.newNote,
          })
          this.newNote = ''
        } catch (e) {
          console.error(e)
        }
      }
    },

    async removeNote (note) {
      try {
        await Meteor.callPromise('notes.remove', {
          _id: note._id,
        })
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style scoped>
.note {
  margin-top: 32px;
}
</style>
