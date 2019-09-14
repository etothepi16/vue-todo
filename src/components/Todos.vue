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
          v-on:del-todo="$emit('del-todo', todo.id)"
        />
      </div>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "Todos",
  components: {
    TodoItem
  },
  computed: {
    todoList() {
      return this.$store.getters.getTodos;
    }
  }
};
</script>

<style></style>
