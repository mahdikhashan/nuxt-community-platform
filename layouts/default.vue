<template>
  <div>
    <Navigation :sticky="true"/>
    <Nuxt />
  </div>
</template>

<script>
export default {
  components: ["Navigation"],
};
</script>
