<template>
  <div id="app">
    <router-view />
    <div>
      <BaseButtonRadio name="radio" target="radio1" value="radio1" v-model="isActive">A</BaseButtonRadio>
      <BaseButtonRadio name="radio" target="radio2" value="radio2" v-model="isActive">B</BaseButtonRadio>
    </div>
  </div>
</template>

<script>
import BaseButtonRadio from "@/components/atoms/base-button-radio/";
export default {
  name: "App",
  computed: {},
  data: () => {
    return {
      isActive: "radio2"
    };
  },
  methods: {},
  components: { BaseButtonRadio }
};
</script>
