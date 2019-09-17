<template>
  <li class="todo-item" v-bind:class="{ 'is-complete': todo.completed }">
    <span class="checkbox-holder">
      <input
        type="checkbox"
        v-bind:checked="todo.completed"
        v-on:change="markComplete(this)"
      />
    </span>
    <span class="del" v-on:click="deleteTodo(this)"
      ><v-icon>{{ svgPath }}</v-icon></span
    >
    <h2>{{ todo.title }}</h2>
    <p>{{ todo.description }}</p>
  </li>
</template>

<script>
import { mdiDelete } from "@mdi/js";
export default {
  name: "TodoItem",
  props: ["todo"],
  data: () => ({
    svgPath: mdiDelete
  }),
  methods: {
    deleteTodo(todo) {
      this.$emit("delete-todo", todo);
    },
    markComplete(todo) {
      this.$emit("mark-complete", todo);
    }
  }
};
</script>

<style></style>
