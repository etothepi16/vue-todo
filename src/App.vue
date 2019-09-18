<template>
  <v-app
    id="app"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <Header />
    <Sidebar v-if="user" />
    <v-content>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
    <SidebarRight v-if="user" />
  </v-app>
</template>

<script>
import Sidebar from "./components/layout/Sidebar";
import SidebarRight from "./components/layout/SidebarRight";
import Header from "./components/layout/Header";
// import "./App.scss";
export default {
  name: "app",
  components: {
    Sidebar,
    SidebarRight,
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
