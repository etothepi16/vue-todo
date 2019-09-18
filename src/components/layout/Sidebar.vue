<template>
  <v-navigation-drawer :clipped="true" absolute app overflow>
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
    <!-- <v-list-item
      v-bind:key="project.id"
      v-for="(project, index) in projectList"
      @add-project="addProject()"
      @delete-project="deleteProject(project)"
      v-on:click="setSelectedProject(project.name, index)"
    >
      <IndividualProject
        v-bind:project="project"
        :class="{ active: activeIndex === index }"
      />
    </v-list-item> -->
    <v-divider></v-divider>
    <AddProject v-on:add-project="addProject" />
    <!-- <v-list-item>
      <v-list-item-content>
        <h5>Add a new project</h5>
        <v-form v-on:submit.prevent="createProject">
          <v-text-field
            v-model="name"
            id="name"
            placeholder="New project name"
            required
          />
          <v-btn type="submit" class="btn">Add</v-btn>
        </v-form>
      </v-list-item-content>
    </v-list-item> -->
  </v-navigation-drawer>
</template>
<script>
import Projects from "../Projects";
import AddProject from "../AddProject";
// import IndividualProject from "../IndividualProject";
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
