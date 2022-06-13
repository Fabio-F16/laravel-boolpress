<template>
  <div>
    <h2 class="mt-2">{{ title }}</h2>
    <img :src="'storage/' + cover" :alt="title" />
    <p class="mt-2">{{ trimmedContent }}...</p>
    <router-link :to="{ name: 'single-blog', params: { slug } }">
      Visualizza Post
    </router-link>
    <hr />
  </div>
</template>

<script>
export default {
  name: "PostCardComponent",
  props: ["title", "cover", "content", "id", "slug"],
  computed: {
    trimmedContent() {
      const shortContent =
        this.content.length > 50 ? this.content.substring(0, 50) : this.content;

      return shortContent;
    },
  },
};
</script>

<style>
</style>
