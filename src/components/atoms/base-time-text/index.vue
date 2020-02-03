<template>
  <div :date="date"></div>
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
</style>


