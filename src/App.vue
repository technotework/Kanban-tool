<template>
  <div id="app">
    <router-view />
    <Projects />
  </div>
</template>

<script>
import Auth from "@/containers/Auth";
import Projects from "@/containers/Projects";
export default {
  name: "App",
  computed: {},
  data: () => {
    return {};
  },
  methods: {},
  components: { Projects }
};
</script>
