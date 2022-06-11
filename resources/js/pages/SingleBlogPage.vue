<template>
  <div>
    <h1>Il post nel dettaglio</h1>
    <div v-if="post">
      <h2 class="mt-2">{{ post.title }}</h2>
      <img :src="'/storage/' + post.cover" :alt="post.title" />
      <p class="mt-2">{{ post.content }}</p>
    </div>
    <div v-else>Caricamento in corso</div>
    <router-link :to="{ name: 'blog' }"> Torna ai post </router-link>
  </div>
</template>

<script>
export default {
  name: "SingleBlogPage",
  data() {
    return { post: undefined };
  },
  mounted() {
    const id = this.$route.params.id;
    window.axios
      .get("http://127.0.0.1:8000/api/posts/" + id)
      .then(({ status, data }) => {
        if (status === 200 && data.success) {
          this.post = data.results;
          console.log(results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
</style>
