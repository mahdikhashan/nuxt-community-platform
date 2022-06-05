<template>
  <div class="container mx-auto flex bg-blue-500">
    <div class="h-fit">
      <form @submit.prevent="registerUser">
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
        console.log("afsdfasdfasdfasd")
        await this.$axios.post(".netlify/functions/register", {
          ...this.login,
        });

        alert("sdfsdf")

        await this.$auth.loginWith("local", {
          data: this.login,
        });

        alert("sdfsdf")

        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>
