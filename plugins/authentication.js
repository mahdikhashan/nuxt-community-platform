import Vue from "vue";

if (!Vue.__authentication__) {
  Vue.__authentication__ = true;
  Vue.mixin({
    computed: {
      userName() {
        return this.$auth.user.name;
      },
      userEmail() {
        return this.$auth.user.email;
      },
      userID() {
        return this.$auth.user.id;
      },
      isUserLoggedIn() {
        return this.$auth.loggedIn;
      },
    },
  });
}