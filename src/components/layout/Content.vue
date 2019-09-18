<template>
  <v-flex shrink>
    <Todos v-bind:todos="todos" />
  </v-flex>
</template>

<script>
import Todos from "../Todos";
export default {
  name: "Content",
  components: {
    Todos
  },
  data() {
    return {
      todos: []
    };
  }
};
</script>
