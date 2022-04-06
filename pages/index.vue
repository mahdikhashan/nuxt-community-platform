<template>
  <div>
    <Banner></Banner>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
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
  components: { Banner }
};
</script>
