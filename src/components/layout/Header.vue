<template>
  <header class="header">
    <h1>Todo List</h1>
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <span v-if="!user"><router-link to="/login">Login</router-link> | </span>
      <span v-if="!user"
        ><router-link to="/register">Register</router-link></span
      >
      <span v-if="user"><a v-on:click="logout">Logout</a></span>
    </div>
  </header>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Header",
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>
<style></style>
