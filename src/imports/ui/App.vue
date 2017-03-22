<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'notes' }">Notes</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
