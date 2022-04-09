<template>
  <div class="px-2 rounded-md hover:bg-blue-600 flex items-center justify-center text-white">
    <nuxt-link :to="address"><slot></slot></nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Link",
  props: {
    address: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style></style>
