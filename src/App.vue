<template>
  <v-app
    id="app"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <Header />
    <Sidebar v-if="user" />
    <!-- TODO: try to prettify action button -->
    <!-- TODO: check responsiveness -->
    <router-view></router-view>
  </v-app>
</template>
<script>
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import firebase from "firebase";
import { store } from "./store";
export default {
  name: "app",
  components: {
    Header,
    Sidebar
  },
  computed: {
    user() {
      return store.getters.getUser;
    },
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  beforeCreate() {
    let user = firebase.auth().currentUser;
    store.dispatch("setUser", user);
  }
};
</script>

<style></style>
