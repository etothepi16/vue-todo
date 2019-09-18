<template>
  <v-navigation-drawer :clipped="true" :enable-resize-watcher="true" bottom app>
    <v-list nav>
      <v-list-item
        v-on:click="setSelectedProject('Inbox', -3)"
        :class="{ active: activeIndex === -3 }"
        id="inbox"
      >
        <v-list-item-content
          ><v-list-item-title class="title"
            >Inbox</v-list-item-title
          ></v-list-item-content
        >
      </v-list-item>
      <v-list-item
        v-on:click="setSelectedProject('Work', -2)"
        :class="{ active: activeIndex === -2 }"
      >
        <v-list-item-content
          ><v-list-item-title class="title"
            >Work</v-list-item-title
          ></v-list-item-content
        >
      </v-list-item>
      <v-list-item
        v-on:click="setSelectedProject('Personal', -1)"
        :class="{ active: activeIndex === -1 }"
      >
        <v-list-item-content
          ><v-list-item-title class="title"
            >Personal</v-list-item-title
          ></v-list-item-content
        >
      </v-list-item>
      <v-divider></v-divider>
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
<style>
.v-navigation-drawer {
  height: 100% !important;
  max-height: 100% !important;
}
</style>
