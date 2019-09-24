<template>
  <v-container fluid fill-height>
    <Todos v-bind:todos="todos" />
    <AddTodo v-on:add-todo="addTodo" />
  </v-container>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import { store } from "../store";
export default {
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(todo) {
      store.dispatch("addTodo", todo);
    }
  },
  beforeCreate() {
    store.dispatch("setProjects");
    store.dispatch("setTodos");
  }
};
</script>

<style></style>
