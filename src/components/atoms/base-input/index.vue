<template>
  <input
    :type="type"
    :class="[$style.basicInput,$compose[compose]]"
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
    name: String,
    type: String
  }
};
</script>

<style lang="scss" module>
.basicInput {
  @include bdc($gray);
}
</style>

<style lang="scss" module="$compose">
.normal {
}
.system {
  @include p($s8);
  @include r($round);
}
</style>
