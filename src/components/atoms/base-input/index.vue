<template>
  <input
    :type="type"
    :class="[$style.basicInput, $compose[compose]]"
    class="ignore"
    v-bind="{ placeholder, required, maxlength, name, readonly }"
    v-model.lazy="myValue"
    @keydown.enter="onKeydown($event.keyCode)"
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
    onKeydown(keyCode) {
      if (keyCode == 13) {
        this.$emit("keydown-enter");
      }
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
