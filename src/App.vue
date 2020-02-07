<template>
  <div id="app">
    <router-view />
    <EditInput />
  </div>
</template>

<script>
import { EditInput } from "@/components/atoms/base-input/compose"
export default {
  name: "App",
  props: {},
  data: function() {
    return {};
  },
  components: { EditInput }
};
</script>
