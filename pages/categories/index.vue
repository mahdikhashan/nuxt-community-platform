<template>
  <div>
    <Banner />
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
      <SideMenu />
    </main>
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";

export default {
    name: "CategoriesPage",
    layout: "base",
    components: { Categories }
};
</script>
