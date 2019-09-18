<template>
  <v-navigation-drawer :clipped="true" absolute right app overflow>
    <v-list-item>
      <v-list-item-content>
        <h5>Add a new task</h5>
        <AddTodo v-on:add-todo="addTodo" />
      </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
import AddTodo from "../AddTodo";
import { store } from "../../store";
export default {
  name: "SidebarRight",
  components: {
    AddTodo
  },
  methods: {
    addTodo(todo) {
      store.dispatch("addTodo", todo);
    }
  }
};
</script>
