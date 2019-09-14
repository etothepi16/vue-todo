<template lang="html">
  <li class="todo-item" v-bind:class="{ 'is-complete': todo.completed }">
    <Checkbox />
    <h2>{{ todo.title }}</h2>
    <hr />
    <div class="text-center">
      <v-sheet color="white">{{ todo.description }}</v-sheet>
    </div>
    <button v-on:click="deleteTodo(todo.id)" class="del">x</button>
  </li>
</template>

<script>
import Checkbox from "./Checkbox.vue";
import { db } from "../main";
export default {
  name: "TodoItem",
  components: {
    Checkbox
  },
  props: ["todo"],
  methods: {
    deleteTodo(id) {
      db.collection("todos")
        .doc(id)
        .delete()
        .then(this.$store.dispatch("deleteTodo", id));
    }
  }
};
</script>

<style></style>
