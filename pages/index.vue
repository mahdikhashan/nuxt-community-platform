<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-alert variant="secondary" show>
      Are you receiving SNAP/EBT benefits? The Expensify.org/SNAP-VAX campaign
      is live and accepting new members. Learn more about receiving $50 for
      submitting a SNAP receipt and $50 for getting your COVID-19 vaccine here
      and join today!
    </b-alert>
    <div class="mt-3">
      <h6>Goto first and last button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
        last-number
      ></b-pagination-nav>
    </div>
    <div v-for="(discussion, index) in discussions" :key="index">
      <MiniDiscussion
        :avatar="discussion.avatar"
        :author="discussion.author"
        :type="discussion.type"
        :views="discussion.views"
        :comments="discussion.comments"
        :date="discussion.date"
        :bookmarked="discussion.bookmarked"
      ></MiniDiscussion>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
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
          bookmarked: false
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false
        },
        {
          avatar: "https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",
          author: "Mahdi Khashan",
          type: "Announcement",
          views: 200,
          comments: 3,
          date: "March 2021",
          bookmarked: false
        },
      ],
      pages: 100,
      currentPage: 5,
    };
  },
};
</script>
