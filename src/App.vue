<template>
  <div id="app">
    <router-view />
    <Theme></Theme>
  </div>
</template>

<script>
import Theme from "@/components/themes/theme";
export default {
  name: "App",
  props: {},
  components: { Theme }
};
</script>
