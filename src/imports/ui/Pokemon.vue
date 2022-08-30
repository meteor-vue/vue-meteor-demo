<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },

  computed: {
    sprite () {
      return JSON.parse(this.pokemon.sprites[0].sprites).front_default
    },
  },
}
</script>

<template>
  <div class="pokemon">
    <div class="img">
      <img :src="sprite" :alt="pokemon.name" />
    </div>
    <div class="name">
      {{ pokemon.name }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.pokemon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border: solid 1px fade(black, 10%);
  border-radius: 4px;

  img {
    max-width: 100%;
  }

  .name::first-letter {
    text-transform: uppercase;
  }
}
</style>
  