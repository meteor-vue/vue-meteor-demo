import base from './base'
import { Items } from '../api/collections'

export default {
  extends: base,

  meteor: {
    $subscribe: {
      'items': [],
    },

    items () {
      return Items.find({})
    },
  },

  watch: {
    items (value) {
      console.log('items watch', value)
    },
  },
}
