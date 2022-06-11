<template>
  <div>
    <h1>404 - Pagina non trovata</h1>
    <div>
      <router-link :to="{ name: 'home' }">Vai alla homePage </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style>
</style>
