<template>
  <input
    :type="type"
    :class="[$style.basicInput, $compose[compose]]"
    v-bind="{ placeholder, required, maxlength, name, readonly }"
    v-model.lazy="myValue"
    @keyup.enter="onKeyup"
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
    type: String,
    readonly: Boolean,
    value: String
  },
  computed: {
    myValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    onKeyup(e) {
      this.$emit("keyup-enter");
    }
  }
};
</script>

<style lang="scss" module>
.basicInput {
  width: 100%;
  @include bdc($gray);
}
</style>

<style lang="scss" module="$compose">
.system {
  @include p($s8);
  @include r($round);
}
.editable {
  border: solid 1px $gray;
  @include bgc($white);
  @include p($s8);
  @include r(2px);
}
.editable:disable {
  @include bgc($transparent);
  border: solid 1px $white;
  border-bottom: solid 1px $gray;
}
</style>
