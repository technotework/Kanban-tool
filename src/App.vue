<template>
  <div id="app">
    <router-view />
    <ProjectListItem />
  </div>
</template>

<script>
import ProjectListItem from "@/components/organisms/project-list-item/";
export default {
  name: "App",
  props: {},
  data: function() {
    return {};
  },
  components: { ProjectListItem }
};
</script>
