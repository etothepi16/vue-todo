<template>
  <div class="sidebar">
    <ul class="projects__list">
      <li v-on:click="setSelectedProject('Inbox')" id="inbox">
        <span>Inbox</span>
      </li>
      <li v-on:click="setSelectedProject('Work')"><span>Work</span></li>
      <li v-on:click="setSelectedProject('Personal')"><span>Personal</span></li>
      <div v-bind:key="project.id" v-for="project in projectList">
        <IndividualProject v-bind:project="project" />
      </div>
    </ul>
    <AddTodo v-on:add-todo="addTodo" />
  </div>
</template>
<script>
import IndividualProject from "../IndividualProject";
import AddTodo from "../AddTodo";
import { store } from "../../store";
export default {
  name: "Sidebar",
  components: {
    AddTodo,
    IndividualProject
  },
  data() {
    return {
      projects: []
    };
  },
  computed: {
    projectList() {
      return store.getters.getProjects;
    },
    selectedProject() {
      return store.getters.getSelectedProject;
    }
  },
  methods: {
    setSelectedProject(name) {
      store.dispatch("setSelectedProject", name);
      // store.getters.getTodos;
    },
    addTodo(todo) {
      store.dispatch("addTodo", todo);
    }
  }
};
</script>
<style></style>
