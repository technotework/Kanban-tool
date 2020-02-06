<template>
  <span :date="date" :class="$style.date"><slot /></span>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseTimeText",
  props: {
    date: { type: String }
  }
};
</script>
<style lang="scss" module>
.date{
  display: block;
  @include text($f14);
}
</style>


