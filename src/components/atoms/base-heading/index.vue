<template>
  <div :is="heading">
    <slot />
  </div>
</template>

<script>
import {
  BaseHeading1,
  BaseHeading2,
  BaseHeading3,
  BaseHeading4
} from "./style";

export default {
  name: "BaseHeading",
  props: {
    heading: { type: String }
  },
  components: {
    lv1: BaseHeading1,
    lv2: BaseHeading2,
    lv3: BaseHeading3,
    lv4: BaseHeading4
  }
};
</script>