<template>
  <nav>
    <div class="app-title">Vue+Meteor</div>
    <router-link :to="{ name: 'home' }" exact>Home</router-link>
    <router-link :to="{ name: 'shop' }">Shop</router-link>
    <router-link :to="{ name: 'notes' }">Notes</router-link>
    <router-link :to="{ name: 'map' }">Map</router-link>
    <router-link :to="{ name: 'apollo' }">Apollo</router-link>
    <router-link :to="{ name: 'async' }">Async</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <div class="actions">
      <button @click="openCart"><i class="material-icons">shopping_cart</i></button>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('layout', [
      'showCart'
    ]),

    openCart () {
      this.showCart(true)
    },
  },
}
</script>

<style lang="less" scoped>
@import "style/imports";

nav {
  background: @app-color;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  padding-top: 24px;

  > * {
    flex: 0 0 auto;
  }

  a {
    color: white;
    display: inline-block;
    padding: 16px 28px;
    border-radius: 3px 3px 0 0;

    &:hover {
      background: lighten(@app-color, 10%);
    }

    &.router-link-active {
      background: @page-background;
      color: @app-color;
    }
  }
}

.app-title {
  font-size: 1.3rem;
  padding: 0 18px;
}

.actions {
  flex: 1 1 auto;
  text-align: right;
  padding: 4px 12px;
}

</style>
