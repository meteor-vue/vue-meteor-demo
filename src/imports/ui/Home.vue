<template>
  <div class="home">
    <p>
      <img src="/vue%2Bmeteor.png"/>
    </p>
    <p>Work in progress... <a href="https://github.com/Akryum/vue-meteor-demo">Contribute!</a></p>
    <p>This application is a complete demo project using Meteor and Vue. It features routing and SSR, and more (vuex, apollo, accounts...) will be added soon.</p>
    <p><a href="https://github.com/Akryum/vue-meteor/" target="_blank">More info</a></p>

    <p>{{ counter }}</p>
    <p><button @click="onClick">Increment</button></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
    }
  },

  methods: {
    onClick () {
      this.counter++
    },
  },
}
</script>


<style lang="less" scoped>
.home {
  text-align: center;
}
</style>
