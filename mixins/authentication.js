export default {
  methods: {
    logoutUser() {
      this.$auth.logout()
    },
    loginUser() {
      this.$router.push({
        path: "/login"
      })
    },
    registerRedirect() {
      this.$router.push({
        path: "/register"
      })
    }
  },
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
