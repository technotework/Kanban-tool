<template>
  <draggable tag="ul" :list="items">
    <li v-for="item in items" :key="item.id">
      <span>{{ item.content }}</span>
      <SB3 :items="item.data" />
    </li>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import SB3 from "./Sandbox3";
export default {
  name: "Sandbox4",
  props: {
    value: String,
    items: Array
  },
  computed: {},
  components: {
    SB3,
    draggable
  }
};
</script>

<style lang="scss" module></style>
