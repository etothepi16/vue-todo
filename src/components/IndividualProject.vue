<template>
  <li class="project">
    <span>{{ project.name }}</span>
  </li>
</template>

<script>
export default {
  name: "IndividualProject",
  props: ["project"]
};
</script>
