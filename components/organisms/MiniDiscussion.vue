<template>
  <div class="md">
    <div class="md--element">
      <div style="display: flex; align-items: center">
        <div class="md--element--avatar">
          <b-img
            v-bind="mainProps"
            :src="avatar"
            rounded="circle"
            alt="Circle image"
          ></b-img>
        </div>
        <div class="md--element--content">
          <nuxt-link class="md--element--content__title" to="/categories"
            >Announcing the "Expensify CPA Card", built specifically for
            accountants</nuxt-link
          >
          <div>
            <span>
              <Tag>Announcement</Tag>
              <nuxt-link to="/categories">
                <span>{{ author }}</span>
              </nuxt-link>
              <span class="md--element--content__item">5.9K views</span>
              <span class="md--element--content__item">0 comments</span>
              <span class="md--element--content__item"
                >Started by
                <nuxt-link to="/categories">
                  <span>{{ author }}</span>
                </nuxt-link>
              </span>
              <span class="md--element--content__item">November 2021</span>
              <nuxt-link to="/categories">
                <span>Expensify news</span>
              </nuxt-link>
            </span>
          </div>
        </div>
      </div>

      <div class="md--element--menu">
        <nuxt-link to="/categories">
          <img
            src="../assets/images/svg/bookmark.svg"
            alt="booked"
            style="width: 15px"
          />
        </nuxt-link>
        <nuxt-link to="/categories">
          <img
            src="../assets/images/svg/dots.svg"
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

<style lang="scss" scoped>
.md {
}

.md--element {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-left: 8px;
}

.md--element--avatar {
  // nothing to style
  margin-right: 16px;
}

.md--element--content {
  display: flex;
  flex-direction: column;

  * > a {
    color: rgb(118, 118, 118);
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    text-decoration: none;
    display: inline;
  }

  * > a:hover {
    color: rgb(11, 27, 52);
  }
}

.md--element--content__title {
  text-decoration: none;
  color: rgb(11, 27, 52);
  font-size: 16px;
  font-weight: 600;
}

.md--element--content__item {
  color: rgb(118, 118, 118);
  font-size: 12px;
  line-height: 1.5;
  display: inline-block;
  max-height: 18px;
  margin: 2px 4px;
}

.md--element--menu {
  align-items: flex-start;
}

.md:first-child {
  border-top: 1px solid rgb(206, 209, 214);
}

.md::before {
  border-top: 1px none rgb(206, 209, 214);
  content: "";
  display: block;
  width: 100%;
}

.md::after {
  border-bottom: 1px solid rgb(206, 209, 214);
  content: "";
  display: block;
  width: 100%;
}
</style>
