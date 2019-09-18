<template>
  <v-navigation-drawer
    :clipped="true"
    :enable-resize-watcher="true"
    right
    bottom
    app
  >
    <v-list nav>
      <v-list-item>
        <v-list-item-content>
          <h5>Add a new task</h5>
          <AddTodo v-on:add-todo="addTodo" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
  data() {
    return {
      mini: false
    };
  },
  methods: {
    addTodo(todo) {
      store.dispatch("addTodo", todo);
    }
  }
};
</script>
<style scoped>
.v-navigation-drawer {
  height: 100% !important;
  max-height: 100% !important;
}
</style>
