<template>
  <div class="add-todo">
    <form v-on:submit.prevent="handleSubmit">
      <input
        type="text"
        v-model="title"
        class="add-todo__input"
        placeholder="Add Todo..."
      />
      <Button type="submit" class="btn">Submit</Button>
    </form>
  </div>
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
      dueDate: "",
      userId: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        project: this.$store.getters.getSelectedProject,
        completed: false,
        description: "",
        dueDate: "",
        userId: this.$store.getters.getUser.uid
      };
      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style></style>
