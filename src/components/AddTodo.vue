<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialogVisible" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn id="action" @click="dialogVisible = true">Add a task</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add a todo item</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  v-model="title"
                  class="add-todo__input"
                  label="Name"
                  placeholder="Add a new task"
                  :rules="[rules.required]"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  v-model="description"
                  label="Description"
                  class="add-todo__input"
                  placeholder="Describe it here"
                  :rules="[rules.required]"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-select
                  v-model="project"
                  label="Project"
                  :items="projectList"
                  class="add-todo__input"
                  placeholder="Add to project"
                  :rules="[rules.required]"
                  required
                />
              </v-col>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="dueDate"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field
                      v-model="dueDate"
                      label="Choose a due date"
                      readonly
                      :rules="[rules.required]"
                      required
                      v-on="on"
                    ></v-text-field>
                  </v-col>
                </template>
                <v-date-picker v-model="dueDate" scrollable>
                  <div class="flex-grow-1"></div>
                  <v-btn text color="primary" @click="modal = false"
                    >Cancel</v-btn
                  >
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(dueDate)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-dialog>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="dialogVisible = false">Cancel</v-btn>
          <v-btn text @click.prevent="addProject">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { store } from "../store";
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
      modal: false,
      dialogVisible: false,
      rules: {
        required: value => !!value || "Required."
      }
    };
  },
  computed: {
    projectList() {
      let projects = store.state.projects;
      let list = [];
      projects.forEach(project => {
        list.push(project.name);
      });
      return list;
    }
  },
  methods: {
    addProject(e) {
      e.preventDefault();

      const newTodo = {
        title: this.title,
        project: this.project,
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
      this.dialogVisible = false;
    }
  }
};
</script>

<style scoped>
#action {
  position: absolute;
  top: 90%;
  left: 2%;
}
</style>
