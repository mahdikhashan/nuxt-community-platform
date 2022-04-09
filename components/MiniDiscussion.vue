<template>
  <div class="h-[80px] last:border-b-[1px] last:border-gray-300 before:content-[''] before:border-t-[1px] before:block before:border-gray-300 before:w-[100%]">
    <div class="flex justify-between items-center h-full w-full relative">
      <div class="flex items-center">
        <div class="ml-4">
          <img
            class="rounded-full w-11 h-11"
            src="avatar.jpg"
            alt="Circle image"
          />
        </div>
        <div class="flex flex-col ml-2">
          <nuxt-link class="font-normal text-lg" to="/categories"
            >Announcing the "Expensify CPA Card", built specifically for
            accountants</nuxt-link
          >
          <div>
            <span>
              <Tag>Announcement</Tag>
              <nuxt-link to="/categories">
                <span>{{ author }}</span>
              </nuxt-link>
              <span class="text-xs inline-block text-gray-500 my-[2px] mx-[4px]">5.9K views</span>
              <span class="text-xs inline-block text-gray-500 my-[2px] mx-[4px]">0 comments</span>
              <span class="text-xs inline-block text-gray-500 my-[2px] mx-[4px]"
                >Started by
                <nuxt-link to="/categories">
                  <span>{{ author }}</span>
                </nuxt-link>
              </span>
              <span class="text-xs inline-block text-gray-500 my-[2px] mx-[4px]">November 2021</span>
              <nuxt-link to="/categories">
                <span>Expensify news</span>
              </nuxt-link>
            </span>
          </div>
        </div>
      </div>

      <div class="absolute top-2 right-1 flex items-center justify-center gap-1">
        <nuxt-link to="/categories">
          <img
            src="bookmark.svg"
            alt="booked"
            style="width: 15px"
          />
        </nuxt-link>
        <nuxt-link to="/categories">
          <img
            src="dots.svg"
            alt="booked"
            style="width: 25px"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniDiscussion",
  props: {
    avatar: String,
    author: String,
    type: String,
    views: Number,
    comments: Number,
    date: String,
    bookmarked: Boolean,
  },
  data() {
    return {
      mainProps: {
        blankColor: "#777",
        width: 40,
        height: 40,
        class: "m1",
      },
    };
  },
};
</script>