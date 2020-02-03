<template>
  <input
    type="text"
    :class="$style.input"
   
    v-bind="{placeholder,required,maxlength,name}"
    @input="onInput"
  />
</template>

<script>
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
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
