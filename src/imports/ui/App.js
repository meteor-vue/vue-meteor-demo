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
