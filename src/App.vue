<template>
  <div id="app">
    <router-view />

    <MD />
  </div>
</template>

<script>
import MD from "@/components/atoms/base-editable-md/";
export default {
  name: "App",
  props: {},
  methods: {},
  components: { MD }
};
</script>
