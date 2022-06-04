<script>
import Banner from "../components/Banner.vue";
import NewPost from "../components/NewPost.vue";
import MiniDiscussion from "../components/MiniDiscussion.vue";
import Notification from "../components/Notification.vue";
import Sticker from "../components/Sticker.vue";
import authentication from "~/mixins/authentication.js";
import { mapGetters } from "vuex";

export default {
  name: "IndexPage",
  middleware: "auth",
  mixins: [authentication],
  layout: "base",
  data() {
    return {
      items: [
        {
          text: "Admin",
          href: "#",
        },
        {
          text: "Manage",
          href: "#",
        },
        {
          text: "Library",
          active: true,
        },
      ],
      pages: 100,
      currentPage: 5,
    };
  },
  components: { Banner, NewPost, MiniDiscussion, Notification, Sticker },
  computed: {
    ...mapGetters("discussion", ["getDiscussions", "getTags"]),
  },
  mounted() {
    this.$store.dispatch("discussion/getTags");
  },
};
</script>

<template>
  <div>
    <Banner />
    <main
      class="
        container
        mx-auto
        flex
        lg:flex-col
        xl:flex-row
        justify-between
        mt-8
      "
    >
      <section class="w-full xl:w-[70%] px-6 py-4 flex flex-col gap-2">
        <Notification
          >Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.</Notification
        >
        <Sticker
          >Are you receiving SNAP/EBT benefits? The Expensify.org/SNAP-VAX
          campaign is live and accepting new members. Learn more about receiving
          $50 for submitting a SNAP receipt and $50 for getting your COVID-19
          vaccine here and join today!</Sticker
        >
        <div class="my-4">
          <MiniDiscussion
            v-for="value in [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1,
              2, 3, 4, 5, 6, 7, 8, 9, 10,
            ]"
            :key="value"
          ></MiniDiscussion>
        </div>
      </section>
      <aside class="w-full xl:w-[30%] px-6 py-4">
        <div v-if="!isUserLoggedIn" class="flex flex-col gap-3 mb-8">
          <span class="text-black font-bold text-xl">Welcome!</span>
          <p class="text-sm text-gray-700">
            It looks like you're new here. Sign in or register to get started.
          </p>
          <div class="flex gap-4">
            <Button>Sign In</Button>
            <Button gray="true">Register</Button>
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
            <li
              class="w-full flex flex-auto justify-between hover:text-blue-600"
            >
              <nuxt-link to="/">My Bookmarks</nuxt-link>
              <span>2</span>
            </li>
            <li
              class="w-full flex flex-auto justify-between hover:text-blue-600"
            >
              <nuxt-link to="/">My Discussions</nuxt-link>
              <span>2</span>
            </li>
            <li
              class="w-full flex flex-auto justify-between hover:text-blue-600"
            >
              <nuxt-link to="/">My Drafts</nuxt-link>
              <span>2</span>
            </li>
            <li
              class="w-full flex flex-auto justify-between hover:text-blue-600"
            >
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
            <li
              class="w-full flex flex-auto justify-between hover:text-blue-600"
            >
              <nuxt-link to="/">All Categories</nuxt-link>
            </li>
            <li
              class="w-full flex flex-auto justify-between hover:text-blue-600"
            >
              <nuxt-link to="/">Announcements</nuxt-link>
              <span>201</span>
            </li>
            <li
              class="w-full flex flex-auto justify-between hover:text-blue-600"
            >
              <nuxt-link to="/">Help Docs and Webinars</nuxt-link>
              <span>504</span>
            </li>
            <li
              class="w-full flex flex-auto justify-between hover:text-blue-600"
            >
              <nuxt-link to="/">Questions about community</nuxt-link>
              <span>2.1K</span>
            </li>
            <li
              class="w-full flex flex-auto justify-between hover:text-blue-600"
            >
              <nuxt-link to="/">Community.org</nuxt-link>
              <span>151</span>
            </li>
          </ul>
        </section>
        <section class="block">
          <h3 class="font-bold text-lg pt-4 pb-2">Popular Tags</h3>
          <div>
            <tag class="px-[2px]" v-for="tag in getTags" :key="tag">{{
              tag
            }}</tag>
          </div>
        </section>
      </aside>
    </main>
  </div>
</template>