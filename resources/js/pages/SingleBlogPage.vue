<template>
  <div>
    <h1>Il post nel dettaglio</h1>
    <div v-if="post">
      <h2 class="mt-2">{{ post.title }}</h2>
      <img :src="'/storage/' + post.cover" :alt="post.title" />
      <p class="mt-2">{{ post.content }}</p>
      <div>
        <ul>
          <h4>Tags:</h4>
          <li v-for="tag in post.tags" :key="tag.id">
            {{ tag.name }}
          </li>
        </ul>
      </div>
      <div>
        <h4>Categoria:</h4>
        <p>{{ post.category.name }}</p>
      </div>
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
    //   per recuperare il params inviato dal link della route da PostCardComponent
    const slug = this.$route.params.slug;
    window.axios
      .get("http://127.0.0.1:8000/api/posts/" + slug)
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

<style lang="scss" scoped>
li {
  list-style-type: none;
}
</style>
