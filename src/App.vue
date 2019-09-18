<template>
  <v-app
    id="app"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <Header />
    <Sidebar v-if="user" />

    <!-- TODO: MAKE MOBILE RESPONSIVE -->
    <router-view></router-view>

    <SidebarRight v-if="user" />
  </v-app>
</template>

<script>
import Sidebar from "./components/layout/Sidebar";
import SidebarRight from "./components/layout/SidebarRight";
import Header from "./components/layout/Header";
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
