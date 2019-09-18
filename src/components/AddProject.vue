<template>
  <v-list-item>
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
  </v-list-item>
</template>
<script>
import { store } from "../store";
export default {
  name: "AddProject",
  data() {
    return {
      name: "",
      userId: ""
    };
  },
  methods: {
    createProject(e) {
      e.preventDefault();
      let name = this.name;
      let userId = store.getters.getUser.uid;
      let newProject = {
        name: name,
        userId: userId
      };
      this.$emit("add-project", newProject);
    }
  }
};
</script>
