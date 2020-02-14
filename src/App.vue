<template>
  <div id="app">
    <router-view />
    <Auth />
  </div>
</template>

<script>
import Auth from "@/containers/Auth";
export default {
  name: "App",
  computed: {},
  data: () => {
    return {};
  },
  methods: {},
  components: { Auth }
};
</script>
