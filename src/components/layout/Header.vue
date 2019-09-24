<template>
  <v-app-bar :clipped-left="true" :clipped-right="true" color="secondary" app>
    <v-toolbar-title>Todo List</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text><router-link to="/">Home</router-link></v-btn>
      <v-btn text v-if="!user"
        ><router-link to="/login">Login</router-link></v-btn
      >
      <v-btn text v-if="!user"
        ><router-link to="/register">Register</router-link></v-btn
      >
      <v-btn text v-if="user"><a v-on:click="logout">Logout</a></v-btn>
    </v-toolbar-items>
  </v-app-bar>
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
<style>
a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87) !important;
}
</style>
