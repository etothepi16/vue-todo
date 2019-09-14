<template>
  <div id="app">
    <Header />
    <Content />
  </div>
</template>

<script>
import Content from "../components/layout/Content";
import Header from "../components/layout/Header";
export default {
  components: {
    Content,
    Header
  },
  data() {
    return {
      todos: []
    };
  },
  created() {
    this.$store.dispatch("setTodos");
  }
};
</script>
