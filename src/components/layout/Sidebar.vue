<template>
  <v-navigation-drawer :fixed="true" :clipped="true" app>
    <v-list nav>
      <Projects />
      <v-divider></v-divider>
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
      activeIndex: -3,
      projects: [],
      mini: false
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
    setSelectedProject(project, index) {
      store.dispatch("setSelectedProject", project);
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
<style></style>
