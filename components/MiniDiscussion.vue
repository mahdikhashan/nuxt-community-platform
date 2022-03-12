<template>
  <div class="mini-discussion">
    <div class="wrapper">
      <div class="avatar">
        <b-img
          v-bind="mainProps"
          :src="avatar"
          rounded="circle"
          alt="Circle image"
        ></b-img>
      </div>
      <div class="content">
        <div>{{ author }}</div>
        <div>
          <div>
            <b-badge pill href="#" variant="light">Light</b-badge>
            <nuxt-link to="/categories">
              <span>{{ author }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="items"></div>
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
        width: 75,
        height: 75,
        class: "m1",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.mini-discussion {
  border: 1px solid gray;

  > .wrapper {
    display: flex;

    > .content {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
