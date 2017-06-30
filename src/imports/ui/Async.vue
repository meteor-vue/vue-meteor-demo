<template>
  <div>
    <div v-if="loading">Loading...</div>
    <component v-else :is="comp"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comp: null,
      loading: true,
    }
  },

  async mounted () {
    /* Eager */
    // this.comp = require('./Svg.vue').default

    /* Easy */
    this.comp = await import('./Svg.vue').then(m => m.default)

    this.loading = false
  },
}
</script>
