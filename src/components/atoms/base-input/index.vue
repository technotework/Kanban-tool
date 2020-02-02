<template>
  <input
    type="text"
    :class="$style.input"
    :style="styles"
    v-bind="{placeholder,required,maxlength,name}"
    @input="onInput"
  />
</template>

<script>
import styles from "@/components/utils/styles-mixin";
export default {
  mixins: [styles],
  name: "BaseInput",
  props: {
    placeholder: String,
    required: Boolean,
    maxlength: String,
    name: String
  }
};
</script>
<style lang="scss" module>
.input {
  @include bdc($gray);
  @include spr(var(--w), var(--h), var(--p), var(--r));
}
</style>
