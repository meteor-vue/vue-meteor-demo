<template>
  <transition name="right-panel" duration="500">
    <div class="cart-overlay">
      <div class="backdrop" @click="close" />
      <div class="panel" :class="$style.cart">
        <div class="empty-text" :class="$style.meow">
          Your cart is <span :class="foo.bar">empty</span>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    console.log(this.$style)
  },

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
</style>

<style lang="less" module>
.cart {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 500px;
}

.meow {
  color: grey;
}
</style>

<style lang="less" module="foo">
.bar {
  color: black;
}
</style>
