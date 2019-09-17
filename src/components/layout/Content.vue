<template>
  <div class="content">
    <Todos v-bind:todos="todos" />
  </div>
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
