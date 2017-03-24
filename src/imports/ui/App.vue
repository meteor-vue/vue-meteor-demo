<template>
  <div id="app">
    <app-nav />

    <main>
      <router-view />
    </main>

    <cart v-if="showCart" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppNav from './AppNav.vue'
import Cart from './Cart.vue'

export default {
  components: {
    AppNav,
    Cart,
  },

  computed: {
    ...mapGetters('layout', [
      'showCart',
    ]),
  },
}
</script>

<style lang="less">
@import "style/main";
</style>
