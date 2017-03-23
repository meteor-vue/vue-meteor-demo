<template>
  <div id="app">
    <nav>
      <div class="app-title">Vue+Meteor</div>
      <router-link :to="{ name: 'home' }" exact>Home</router-link>
      <router-link :to="{ name: 'notes' }">Notes</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="less">
@app-color: #40b883;

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: darken(white, 2%);
}

body,
input,
textarea,
button {
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
}

a {
  color: @app-color;
  text-decoration: none;
}

nav {
  background: @app-color;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: white;

  > * {
    flex: 0 0 auto;
  }

  a {
    color: white;
    display: inline-block;
    padding: 12px 18px;

    &:hover {
      background: lighten(@app-color, 10%);
    }

    &.router-link-active {
      background: white;
      color: @app-color;
    }
  }
}

.app-title {
  font-size: 1.3rem;
  padding: 0 18px;
}

main {
  max-width: 800px;
  margin: 64px auto;
  padding: 42px;
  background: white;
}

h1 {
  font-weight: lighter;

  &:first-child {
    margin-top: 0;
  }
}

input {
  border: none;
  background: white;
  border-bottom: solid 1px darken(white, 30%);
  padding: 8px 12px;

  &:focus {
    border-bottom-color: @app-color;
  }
}

button {
  padding: 8px 12px;
  background: @app-color;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: lighten(@app-color, 10%);
  }
}
</style>
