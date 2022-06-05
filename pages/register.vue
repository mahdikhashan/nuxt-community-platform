<template>
  <div class="container mx-auto flex bg-blue-500">
    <div class="h-fit">
      Register
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  layout: "base",
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
