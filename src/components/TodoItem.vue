<template>
  <div class="todo-item" v-bind:class="{ 'is-complete': todo.completed }">
    <v-expansion-panel-header>{{ todo.title }}</v-expansion-panel-header>
    <v-expansion-panel-content>
      <p>Details: {{ todo.description || "none" }}</p>
      <p>Due date: {{ todo.dueDate || "none" }}</p>
      <p>
        In project: <v-chip>{{ projectName }}</v-chip>
      </p>
      <v-layout 2 justify-space-between>
        <v-checkbox
          v-model="todo.completed"
          :label="`Mark complete`"
          v-on:toggle="markComplete(todo)"
        />
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" v-on:click="deleteTodo(todo)">delete</v-icon>
          </template>
          <span>Delete</span>
        </v-tooltip>
      </v-layout>
    </v-expansion-panel-content>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    projectName() {
      let project = this.todo.project;
      let projects = store.state.projects;
      let index = projects.findIndex(pr => pr.id === project);
      let p = projects[index];
      let name = p.name;
      return name;
    }
  },
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

<style>
.is-complete {
  background-color: #8bc34acc;
}
</style>
