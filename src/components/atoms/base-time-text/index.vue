<template>
  <div :date="date"></div>
</template>

<script>
import styles from "@/components/utils/styles-mixin";

export default {
  mixins: [styles],
  name: "BaseTimeText",
  props: {
    date: { type: String }
  }
};
</script>
<style lang="scss" module>
</style>


