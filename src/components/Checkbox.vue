<template>
  <div class="checkbox-holder">
    <input type="checkbox" v-on:change="markComplete(todo.id)" />
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  methods: {
    markComplete(id) {
      this.todo.completed = !this.todo.completed;
      this.$Store.dispatch("markComplete", id);
    }
  }
};
</script>
