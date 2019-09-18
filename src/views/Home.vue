<template>
  <div>
    <!-- TODO: MIGRATE ALL LAYOUT TO VUETIFY COMPONENTS -->
    <Content />
  </div>
</template>

<script>
import Content from "../components/layout/Content";
export default {
  components: {
    Content
  },

  beforeCreate() {
    this.$store.dispatch("setProjects");
    this.$store.dispatch("setTodos");
  }
};
</script>
