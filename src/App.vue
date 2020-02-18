<template>
  <div id="app">
    <router-view />

    <Boards />
  </div>
</template>

<script>
import Auth from "@/containers/Auth";
import Boards from "@/containers/Boards";

export default {
  name: "App",
  computed: {},
  data: () => {
    return {};
  },
  methods: {},
  components: { Boards }
};
</script>
