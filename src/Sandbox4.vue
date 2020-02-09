<template>
  <ul :items="items">
    <li v-for="item in items" :key="item.id">
      <span>{{ item.content }}</span>
      <SB3 :items="item.data" />
    </li>
  </ul>
</template>

<script>
import SB3 from "./Sandbox3";
export default {
  name: "Sandbox4",
  props: {
    value: String,
    items: Array
  },
  computed: {},
  components: {
    SB3
  }
};
</script>

<style lang="scss" module></style>
