import base from './base'
import { Items } from '../api/collections'

export default {
  extends: base,

  data () {
    return {
      items: [],
    }
  },

  meteor: {
    $subscribe: {
      'items': [],
    },

    items () {
      return Items.find({})
    },
  },
}
