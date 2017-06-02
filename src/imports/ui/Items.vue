<template>
  <div class="items">
    <h1>{{ count }} Item(s)</h1>
    <div v-for="item of items">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { use } from 'vue-supply'
import { mapGetters } from 'vuex'

export default {
  mixins: [
    use('Items'),
  ],

  computed: {
    ...mapGetters({
      count: 'items/count',
    }),

    items () {
      return this.$supply.Items.items
    },
  },
}
</script>
