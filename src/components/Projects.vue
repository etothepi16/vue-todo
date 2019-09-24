<template>
  <div>
    <v-list-item
      v-bind:key="project.id"
      v-for="(project, index) in projectList"
      v-on:click="setSelectedProject(project.id, index)"
    >
      <IndividualProject
        v-bind:project="project"
        :class="{ active: activeIndex === index }"
        @delete-project="deleteProject(project)"
      />
    </v-list-item>
  </div>
</template>
<script>
import IndividualProject from "./IndividualProject";
import { store } from "../store";
export default {
  name: "Projects",
  data() {
    return {
      activeIndex: null
    };
  },
  components: {
    IndividualProject
  },
  computed: {
    projectList() {
      return store.getters.getProjects;
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
    deleteProject(project) {
      store.dispatch("deleteProject", project);
    }
  }
};
</script>
