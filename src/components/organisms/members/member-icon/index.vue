<template>
  <component :is="icon" :img="img" />
</template>

<script>
import {
  IconS,
  IconM,
  IconL
} from "@/components/atoms/base-image-icon/compose";
export default {
  name: "MemberIcon",
  props: {
    img: String,
    size: String
  },
  computed: {
    icon() {
      return "Icon" + this.size;
    }
  },
  methods: {},
  components: { IconS, IconM, IconL }
};
</script>
<style lang="scss" module>
</style>