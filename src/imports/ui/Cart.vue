<template>
  <transition name="right-panel" duration="500">
    <div class="cart-overlay">
      <div class="backdrop" @click="close" />
      <div class="cart panel">
        <div class="empty-text">Your cart is empty</div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('layout', [
      'showCart'
    ]),

    close () {
      this.showCart(false)
    },
  },
}
</script>

<style lang="less" scoped>
@import "style/imports";

.cart-overlay {
  .overlay;
}

.cart {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 500px;
}
</style>
