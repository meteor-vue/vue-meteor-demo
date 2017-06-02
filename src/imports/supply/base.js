import { Supply } from 'vue-supply'

export default {
  extends: Supply,

  methods: {
    activate () {
      this.$startMeteor()
    },

    deactivate () {
      this.$stopMeteor()
    },
  },

  meteor: {
    $lazy: true,
  },
}
