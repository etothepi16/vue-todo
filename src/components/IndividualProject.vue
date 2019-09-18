<template>
  <v-list-item-content>
    <v-list-item-title class="del"
      ><v-icon v-on:click="deleteProject(project)">delete</v-icon
      >{{ project.name }}</v-list-item-title
    >
  </v-list-item-content>
</template>

<script>
export default {
  name: "IndividualProject",
  props: ["project"],
  methods: {
    deleteProject(project) {
      this.$emit("delete-project", project);
    }
  }
};
</script>
