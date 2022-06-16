<script>
import Banner from "~/components/Banner.vue";
import NewPost from "~/components/NewPost.vue";
import MiniDiscussion from "~/components/MiniDiscussion.vue";
import Notification from "~/components/Notification.vue";
import Sticker from "~/components/Sticker.vue";
import authentication from "~/mixins/authentication.js";

export default {
  name: "IndexPage",
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
  mounted() {
    console.log("sadfsadf")
    this.$notify({
      group: "base",
      title: "hello",
      text: "Hello community user!"
    })
  }
};
</script>

<template>
  <div>
    <notifications group="base" />
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
      <SideMenu></SideMenu>
    </main>
  </div>
</template>
