<template>
  <v-app
    id="app"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <Header />
    <Sidebar v-if="user" />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
export default {
  name: "app",
  components: {
    Sidebar,
    Header
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  methods: {
    setUser() {
      this.$store.dispatch("setUser");
    }
  },
  created() {
    this.setUser();
  }
};
</script>

<style></style>
