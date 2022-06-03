<template>
  <div><Banner />
    <main class="container mx-auto flex lg:flex-col xl:flex-row justify-between mt-8">
      <section class="w-full xl:w-[70%] px-6 py-4 flex flex-col gap-2">
        <Sticker>Are you receiving SNAP/EBT benefits? The Expensify.org/SNAP-VAX campaign is live and accepting new members. Learn more about receiving $50 for submitting a SNAP receipt and $50 for getting your COVID-19 vaccine here and join today!</Sticker>
        <div class="my-4">
          <Categories
            v-for="value in [1, 2, 3, 4, 5, 6]"
            :key="value"
          ></Categories>
        </div>
      </section>
      <aside class="w-full xl:w-[30%] px-6 py-4">
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
import Categories from "../../components/Categories.vue";
export default {
    name: "CategoriesPage",
    layout: "default",
    middleware: "auth",
    components: { Categories }
};
</script>
