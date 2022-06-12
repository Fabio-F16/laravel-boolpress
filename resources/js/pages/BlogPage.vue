<template>
  <div>
    <h1>I post da leggere</h1>
    <div v-if="posts.length > 0">
      <PostCardListComponent :posts="posts" />
      <div class="text-center">
        <button v-if="previusPageLink" @click="goPreviousPage()">Prev</button>
        {{ currentPage }}/{{ lastPage }}
        <button v-if="nextPageLink" @click="goNextPage()">Next</button>
      </div>
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
      currentPage: 1,
      previusPageLink: "",
      nextPageLink: "",
      lastPage: "",
    };
  },
  mounted() {
    this.loadPage("http://127.0.0.1:8000/api/posts");
  },
  methods: {
    loadPage(url) {
      window.axios
        .get(url)
        .then(({ status, data }) => {
          console.log(data);
          if (status === 200 && data.success) {
            this.posts = data.results.data;
            this.currentPage = data.results.current_page;
            this.previusPageLink = data.results.prev_page_url;
            this.nextPageLink = data.results.next_page_url;
            this.lastPage = data.results.last_page;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goPreviousPage() {
      this.loadPage(this.previusPageLink);
    },
    goNextPage() {
      this.loadPage(this.nextPageLink);
    },
  },
};
</script>

<style>
</style>
