<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "./App.scss";
export default {
  name: "app",
  components: {},
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
