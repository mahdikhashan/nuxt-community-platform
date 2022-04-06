<template>
  <div>
    <Banner />
    <main class="container mx-auto flex justify-between mt-8">
      <section class="w-[70%]"></section>
      <aside class="w-[30%] px-6 py-4">
        <NewPost />
        <section class="w-full">
          <h3 class="font-bold text-lg pt-4 pb-2">Quick Links</h3>
          <ul class="w-full text-sm flex flex-col gap-[6px]">
            <li class="hover:text-blue-600"><nuxt-link to="/">All Categories</nuxt-link></li>
            <li class="hover:text-blue-600"><nuxt-link to="/">Recent Discussions</nuxt-link></li>
            <li class="hover:text-blue-600"><nuxt-link to="/">Activity</nuxt-link></li>
            <li class="w-full flex flex-auto justify-between hover:text-blue-600"><nuxt-link to="/">My Bookmarks</nuxt-link><span>2</span></li>
            <li class="w-full flex flex-auto justify-between hover:text-blue-600"><nuxt-link to="/">My Discussions</nuxt-link><span>2</span></li>
            <li class="w-full flex flex-auto justify-between hover:text-blue-600"><nuxt-link to="/">My Drafts</nuxt-link><span>2</span></li>
            <li class="w-full flex flex-auto justify-between hover:text-blue-600"><nuxt-link to="/">Unanswered</nuxt-link><span>2</span></li>
            <li class="hover:text-blue-600"><nuxt-link to="/">Best Of</nuxt-link></li>
          </ul>
        </section>
        <section>
          <h3 class="font-bold text-lg pt-4 pb-2">Categories</h3>
          <ul class="text-sm flex flex-col gap-[6px]">
            <li class="w-full flex flex-auto justify-between hover:text-blue-600"><nuxt-link to="/">All Categories</nuxt-link></li>
            <li class="w-full flex flex-auto justify-between hover:text-blue-600"><nuxt-link to="/">Announcements</nuxt-link><span>201</span></li>
            <li class="w-full flex flex-auto justify-between hover:text-blue-600"><nuxt-link to="/">Help Docs and Webinars</nuxt-link><span>504</span></li>
            <li class="w-full flex flex-auto justify-between hover:text-blue-600"><nuxt-link to="/">Questions about community</nuxt-link><span>2.1K</span></li>
            <li class="w-full flex flex-auto justify-between hover:text-blue-600"><nuxt-link to="/">Community.org</nuxt-link><span>151</span></li>
          </ul>
        </section>
        <section class="block">
          <h3 class="font-bold text-lg pt-4 pb-2">Popular Tags</h3>
          <Tag>Deep Dive 230</Tag>
          <Tag>Track 50</Tag>
          <Tag>How-to 390</Tag>
          <Tag>FAQ 290</Tag>
          <Tag>Success approved! 212</Tag>
          <Tag>tax</Tag>
          <Tag>demo 1</Tag>
          <Tag>newsletter</Tag>
          <Tag>Webinar</Tag>
          <Tag>Cash</Tag>
          <Tag>Travel 125</Tag>
          <Tag>Two Factor Authentication (2FA)</Tag>
        </section>
      </aside>
    </main>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NewPost from "../components/NewPost.vue";
export default {
  name: "IndexPage",
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
      discussions: [
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false,
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false,
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false,
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false,
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false,
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false,
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false,
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false,
        },
      ],
      pages: 100,
      currentPage: 5,
    };
  },
  components: { Banner, NewPost }
};
</script>
