<template>
  <div>
    <h1>I post da leggere</h1>
    <div v-if="posts.length > 0">
      <PostCardListComponent :posts="posts" />
    </div>
    <div v-else>Caricamento in corso</div>
  </div>
</template>

<script>
import PostCardListComponent from "../components/PostCardListComponent.vue";
export default {
  name: "BlogComponent",

  components: {
    PostCardListComponent,
  },

  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    // console.log("mounted");
    window.axios
      .get("http://127.0.0.1:8000/api/posts")
      .then((results) => {
        if (results.status === 200 && results.data.success) {
          this.posts = results.data.results;
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
