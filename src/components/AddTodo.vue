<template>
  <div class="add-todo">
    <v-form v-on:submit="handleSubmit">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              v-model="title"
              class="add-todo_input"
              placeholder="Add Todo..."
            ></v-text-field>
            <Button type="submit" class="btn">Submit</Button>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { db } from "../main";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    handleSubmit(e) {
      this.addTodo(e);
    },
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        completed: false,
        userId: this.$store.getters.getUser.uid
      };
      db.collection("todos")
        .add(newTodo)
        .then(() => {
          this.$emit("add-todo", newTodo);
        });
      this.title = "";
    }
  }
};
</script>

<style></style>
