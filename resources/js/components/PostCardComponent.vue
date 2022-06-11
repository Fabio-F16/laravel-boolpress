<template>
  <div>
    <img :src="'storage/' + cover" :alt="title" />
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "PostCardComponent",
  props: ["title", "cover"],
};
</script>

<style>
</style>
