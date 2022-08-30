<template>
  <div class="apollo">
    <div class="pokemons">
      <Pokemon
        v-for="pokemon of pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Pokemon from './Pokemon.vue'

const mixin = {
  apollo: {
    pokemons: {
      query: gql`query pokemons {
        pokemons: pokemon_v2_pokemon (limit: 15) {
          id
          name
          sprites: pokemon_v2_pokemonsprites {
            id
            sprites
          }
        }
      }`,
      prefetch: true,
    },
  },
}

export default {
  components: {
    Pokemon,
  },

  mixins: [mixin],
}
</script>

<style scoped>
.pokemons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
}
</style>
