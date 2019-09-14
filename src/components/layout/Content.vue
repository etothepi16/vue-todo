<template>
  <div class="content">
    <Sidebar />
    <Todos />
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Todos from "../Todos";
export default {
  name: "Content",
  components: {
    Sidebar,
    Todos
  }
};
</script>

<style></style>
