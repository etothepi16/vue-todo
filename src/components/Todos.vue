<template>
  <div
    v-if="
      this.$store.getters.getTodos && this.$store.getters.getTodos.length > 0
    "
    class="todos"
  >
    <ul class="todos__list">
      <div v-bind:key="todo.id" v-for="todo in todoList">
        <TodoItem
          v-bind:todo="todo"
          @delete-todo="deleteTodo(todo)"
          @mark-complete="markComplete(todo)"
        />
      </div>
    </ul>
  </div>
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
