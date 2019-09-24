<template>
  <v-navigation-drawer :clipped="true" absolute fixed app>
    <v-list nav>
      <Projects />
      <v-divider v-if="projects.length > 1"></v-divider>
      <AddProject v-on:add-project="addProject" />
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import Projects from "../Projects";
import AddProject from "../AddProject";
import { store } from "../../store";
export default {
  name: "Sidebar",
  components: {
    Projects,
    AddProject
  },
  data() {
    return {
      activeIndex: 0,
      projects: []
    };
  },
  computed: {
    selectedProject() {
      return store.getters.getSelectedProject;
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
    setSelectedProject(id, index) {
      store.dispatch("setSelectedProject", id);
      this.setActive(index);
      // store.getters.getTodos;
    },

    addProject(project) {
      store.dispatch("addProject", project);
    },
    deleteProject(project) {
      store.dispatch("deleteProject", project);
    }
  }
};
</script>
<style>
.v-navigation-drawer {
  height: calc(100vh-64px) !important;
  top: 64px !important;
}
</style>
