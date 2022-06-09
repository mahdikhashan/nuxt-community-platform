<template>
  <aside class="w-full xl:w-[30%] px-6 py-4">
    <div v-if="!isUserLoggedIn" class="flex flex-col gap-3 mb-8">
      <span class="text-black font-bold text-xl">Welcome!</span>
      <p class="text-sm text-gray-700">
        It looks like you're new here. Sign in or register to get started.
      </p>
      <div class="flex gap-4">
        <nuxt-link to="/login">
          <Button primary="true" @click="loginUser">Sign In</Button>
        </nuxt-link>
        <nuxt-link to="/register">
          <Button gray="true" @click="registerRedirect">Register</Button>
        </nuxt-link>
      </div>
    </div>
    <NewPost />
    <section class="w-full">
      <h3 class="font-bold text-lg pt-4 pb-2">Quick Links</h3>
      <ul class="w-full text-sm flex flex-col gap-[6px]">
        <li class="hover:text-blue-600">
          <nuxt-link to="/">All Categories</nuxt-link>
        </li>
        <li class="hover:text-blue-600">
          <nuxt-link to="/">Recent Discussions</nuxt-link>
        </li>
        <li class="hover:text-blue-600">
          <nuxt-link to="/">Activity</nuxt-link>
        </li>
        <li class="w-full flex flex-auto justify-between hover:text-blue-600">
          <nuxt-link to="/">My Bookmarks</nuxt-link>
          <span>2</span>
        </li>
        <li class="w-full flex flex-auto justify-between hover:text-blue-600">
          <nuxt-link to="/">My Discussions</nuxt-link>
          <span>2</span>
        </li>
        <li class="w-full flex flex-auto justify-between hover:text-blue-600">
          <nuxt-link to="/">My Drafts</nuxt-link>
          <span>2</span>
        </li>
        <li class="w-full flex flex-auto justify-between hover:text-blue-600">
          <nuxt-link to="/">Unanswered</nuxt-link>
          <span>2</span>
        </li>
        <li class="hover:text-blue-600">
          <nuxt-link to="/">Best Of</nuxt-link>
        </li>
      </ul>
    </section>
    <section>
      <h3 class="font-bold text-lg pt-4 pb-2">Categories</h3>
      <ul class="text-sm flex flex-col gap-[6px]">
        <li class="w-full flex flex-auto justify-between hover:text-blue-600">
          <nuxt-link to="/">All Categories</nuxt-link>
        </li>
        <li
          class="w-full flex flex-auto justify-between hover:text-blue-600"
          v-for="category in getCategories"
          :key="category"
        >
          <nuxt-link to="/">{{ category.name }}</nuxt-link>
          <span>{{ category.count }}</span>
        </li>
      </ul>
    </section>
    <section class="block">
      <h3 class="font-bold text-lg pt-4 pb-2">Popular Tags</h3>
      <div>
        <tag class="px-[2px]" v-for="tag in getTags" :key="tag">{{ tag }}</tag>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  name: "SideMenu",
  computed: {
    ...mapGetters("discussion", ["getDiscussions", "getTags"]),
  },
  mounted() {
    this.$store.dispatch("discussion/getTags");
  }
};
</script>
