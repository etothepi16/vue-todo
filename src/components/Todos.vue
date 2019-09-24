<template>
  <v-expansion-panels
    v-if="
      this.$store.getters.getTodos && this.$store.getters.getTodos.length > 0
    "
    class="todos"
    app
  >
    <v-expansion-panel
      class="todos__list"
      v-bind:key="todo.id"
      v-for="todo in todoList"
    >
      <TodoItem
        v-bind:todo="todo"
        @delete-todo="deleteTodo(todo)"
        @mark-complete="markComplete(todo)"
      />
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { store } from "../store";
export default {
  name: "Todos",
  components: {
    TodoItem
  },
  computed: {
    todoList() {
      return store.getters.getTodos;
    }
  },
  methods: {
    deleteTodo(todo) {
      store.dispatch("deleteTodo", todo);
    },
    markComplete(todo) {
      store.dispatch("markComplete", todo);
    }
  }
};
</script>

<style></style>
