<template>
  <div class="flex bg-blue-500">
    <div class="">
      <form @submit.prevent="userLogin" method="post">
        <div>
          <label>Username</label>
          <input type="text" v-model="login.username" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" v-model="login.password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  layout: "default",
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith("local", {
          data: this.login,
        });
        this.$router.push("/")
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
};
</script>