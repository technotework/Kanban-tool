<template>
  <div id="app">
  <CP color="#000" />
     <router-view />

  </div>
</template>

<script>
import CP from "@/components/atoms/base-color-chip"

export default {
  name: "App",
  props: {},
  components:{CP}
};
</script>
