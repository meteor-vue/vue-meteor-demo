<template>
  <div class="about">
    <h1>About this demo project</h1>
    <p>
      Using Meteor and Vue together!
    </p>
    <p>
      This app is SSR-enabled!
    </p>
    <p>
      <a href="https://github.com/Akryum/vue-meteor-demo">Sources</a>
    </p>
    <h2>Technologies &amp; Libraries</h2>
    <ul>
      <li>Meteor</li>
      <li>Vue 2.x</li>
      <li>Less, Sass, Stylus</li>
      <li>Apollo GraphQL, vue-apollo</li>
      <li>vue-supply</li>
      <li>vue2-google-maps</li>
      <li>moment</li>
    </ul>
  </div>
</template>

<style scoped>
p,
ul {
  padding: 32px;
}

ul {
  padding-left: 50px;
}
</style>

<style lang="scss" scoped>
@import '~src/imports/ui/style/vars';

p,
ul {
  border-left: solid 2px $app-color;
}
</style>

<style lang="scss" scoped>
@import 'style/vars';

p,
ul {
  border-right: solid 2px $app-color;
}
</style>

<style lang="stylus" scoped>
@import '~src/imports/ui/style/vars';

p,
ul {
  border-top: solid 2px $app-color;
}
</style>

<style lang="stylus" scoped>
@import 'style/vars';

p,
ul {
  border-bottom: solid 2px $app-color;
}
</style>
