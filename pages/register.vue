<template>
  <div class="container mx-auto flex bg-blue-500">
    <div class="h-fit">
      <form @submit.prevent="userLogin" method="post">
        <div>
          <label>Username</label>
          <input type="text" v-model="login.username" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" v-model="login.email" />
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
  name: "RegisterPage",
  layout: "base",
  middleware: 'guest',
  data() {
    return {
      login: {
        username: "",
        email: "",
        password: "",
      },
      email: null,
    };
  },
  methods: {
    async registerUser() {
      try {
        await this.$axios.post("register", {
          ...this.login,
        });

        await this.$auth.loginWith("local", {
          data: this.login,
        });

        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>
