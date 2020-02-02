<template>
  <input type="text" :class="$style.input" :style="styles" @input="onInput" />
</template>

<script>
import styles from "@/components/utils/styles-mixin";
export default {
  mixins: [styles],
  name: "BaseInput"
};
</script>
<style lang="scss" module>
.input {
  @include bdc($gray);
  @include spr(var(--w), var(--h), var(--p), var(--r));
}
</style>
