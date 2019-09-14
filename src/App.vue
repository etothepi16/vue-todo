<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import "./App.scss";
export default {
  name: "app",
  components: {
    Header
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
