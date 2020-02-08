<template>
  <div :class="$style.wrapper">
    <BaseEditableMD
      v-model.lazy="myValue"
      :class="$style.md"
      :isedit="isedit"
      ref="md"
    />
    <div :class="$style.buttons">
      <template v-if="!isedit">
        <TextButton :class="$style.button" @click="onEditMD">
          編集
        </TextButton>
      </template>
      <template v-else>
        <TextButton :class="$style.button" @click="onCancelMD">
          キャンセル
        </TextButton>
        <TextButton :class="$style.button" @click="onSaveMD">
          保存
        </TextButton>
      </template>
    </div>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import BaseEditableMD from "@/components/atoms/base-editable-md/";
import { TextButton } from "@/components/atoms/base-no-link-button/compose";

export default {
  mixins: [base],
  name: "ClickToEditableMD",
  props: {
    value: String
  },
  data: function() {
    return {
      isedit: false,
      temp: ""
    };
  },
  methods: {
    onEditMD: function() {
      this.temp = this.$refs.md.getContent();
      this.isedit = true;
    },
    onSaveMD: function() {
      this.isedit = false;
    },
    onCancelMD: function() {
      this.myValue = this.temp;
      this.isedit = false;
    }
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
  components: { BaseEditableMD, TextButton }
};
</script>
<style lang="scss" module>
.wrapper {
  position: relative;
  @include p(0 0 3.5rem 0);
}
.md {
  height: 300px;
}
.buttons {
  @include flex;
  @include abs($b: 0, $r: 0);
}
.button {
  display: block;
  @include text($f12);
  text-decoration: underline;
  @include c($primary);
  :focus {
    @include c($phover);
  }
}
</style>
