<template>
  <v-form v-on:submit.prevent="handleSubmit">
    <v-text-field
      v-model="title"
      class="add-todo__input"
      label="Name"
      placeholder="Add a new task..."
    />
    <v-text-field
      v-model="description"
      label="Description"
      class="add-todo__input"
      placeholder="Describe your task here"
    />
    <v-text-field
      v-model="project"
      label="Project"
      class="add-todo__input"
      placeholder="Add it to a project"
    />
    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="dueDate"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="dueDate"
          label="Choose a due date"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="dueDate" scrollable>
        <div class="flex-grow-1"></div>
        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
        <v-btn text color="primary" @click="$refs.dialog.save(dueDate)"
          >OK</v-btn
        >
      </v-date-picker>
    </v-dialog>
    <v-btn type="submit" class="btn">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      project: "",
      completed: false,
      description: "",
      dueDate: new Date().toISOString().substr(0, 10),
      userId: "",
      modal: false
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        project: this.$store.getters.getSelectedProject,
        completed: false,
        description: this.description,
        dueDate: this.dueDate,
        userId: this.$store.getters.getUser.uid
      };
      this.$emit("add-todo", newTodo);
      this.title = "";
      this.project = "";
      this.description = "";
      this.dueDate = "";
    }
  }
};
</script>

<style></style>
