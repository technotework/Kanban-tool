<template>
  <div id="app">
    <router-view />
    <button @click="c" />
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
  methods: {
    c() {}
  },
  components: { Projects }
};
</script>
