<template>
  <div class="apollo">
    <div class="posts">
      <div v-for="post of allPosts" class="post">
        <div class="img">
          <img :src="post.imageUrl" :alt="post.description" />
        </div>
        <div class="description" v-text="post.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const mixin = {
  apollo: {
    allPosts: {
      query: gql`query allPosts {
        allPosts {
          id
          imageUrl
          description
        }
      }`,
      prefetch: true,
    },
  },
}

export default {
  mixins: [mixin],
}
</script>

<style lang="less" scoped>
.post {
  padding: 32px 0;

  &:not(:last-child) {
    border-bottom: solid 1px fade(black, 10%);
  }

  img {
    max-width: 100%;
  }
}
</style>
