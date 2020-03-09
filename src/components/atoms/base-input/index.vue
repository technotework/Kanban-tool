<template>
  <input
    :type="type"
    :class="[$style.basicInput, $compose[compose]]"
    class="ignore"
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
}
</style>

<style lang="scss" module="$compose">
.system {
  @include inputForm;
}
.editable {
  @include editableInputForm;
}
.editable:disable {
  @include editableInputForm;
}

.editableTitle {
  @include editableInputFormTitle;
  background-color: #3a424b;
}
.editableTitle:read-only:hover {
  background-color: #3a424b;
}
.editableTitle:read-only {
  @include editableInputFormTitle;
}
</style>
