<template>
  <ul :items="items">
    <li v-for="item in items" :key="item.id">
      {{ item.id }}
      <SB2 v-model="item.content" />
    </li>
  </ul>
</template>

<script>
import SB2 from "./Sandbox2";
export default {
  name: "Sandbox3",
  props: {
    value: String,
    items: Array
  },
  computed: {},
  components: {
    SB2
  }
};
</script>

<style lang="scss" module></style>
