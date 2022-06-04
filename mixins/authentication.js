export default {
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
};
