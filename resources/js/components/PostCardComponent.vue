<template>
  <div>
    <h2 class="mt-2">{{ title }}</h2>
    <img :src="'storage/' + cover" :alt="title" />
    <p class="mt-2">{{ trimmedContent }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "PostCardComponent",
  props: ["title", "cover", "content"],
  computed: {
    trimmedContent() {
      const shortContent =
        this.content.length > 100
          ? this.content.substring(0, 100)
          : this.content;

      return shortContent;
    },
  },
};
</script>

<style>
</style>
