<template>
  <div id="app">
    <router-view />

    <BaseButton />
  </div>
</template>

<script>
import BaseButton from "@/components/atoms/base-button/";
export default {
  name: "App",
  props: {},
  methods: {},
  components: { BaseButton }
};
</script>
