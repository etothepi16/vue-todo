<template>
  <div class="container">
    <Header />
    <Sidebar />
    <!-- TODO: MIGRATE ALL LAYOUT TO VUETIFY COMPONENTS -->
    <Content />
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Content from "../components/layout/Content";
export default {
  components: {
    Content,
    Sidebar,
    Header
  },

  beforeCreate() {
    this.$store.dispatch("setProjects");
    this.$store.dispatch("setTodos");
  }
};
</script>
