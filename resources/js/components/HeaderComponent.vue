<template>
  <header>
    <nav>
      <ul>
        <li v-for="(item, index) in navMenu" :key="index">
          <router-link :to="{ name: item.navLink }">{{
            item.label
          }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      navMenu: [
        {
          navLink: "home",
          label: "Home",
        },
        {
          navLink: "blog",
          label: "Blog",
        },
        {
          navLink: "contatti",
          label: "Contatti",
        },
      ],
    };
  },
};
</script>

<style>
</style>
