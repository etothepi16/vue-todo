<template>
  <v-content>
    <v-container fluid>
      <Content />
    </v-container>
  </v-content>
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
