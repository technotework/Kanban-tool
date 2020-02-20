<template>
  <div :class="$style.wrapper">
    <BaseEditableMD v-model.lazy="mdContent" :class="$style.md" :isedit="status" ref="md" />
    <div :class="$style.buttons">
      <template v-if="!status">
        <TextButton :class="$style.button" @click="onEditMD">編集</TextButton>
      </template>
      <template v-else>
        <TextButton :class="$style.button" @click="onCancelMD">キャンセル</TextButton>
        <TextButton :class="$style.button" @click="onSaveMD">保存</TextButton>
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
    content: String
  },
  data: function() {
    return {
      mdContent: "",
      temp: "",
      status: false
    };
  },
  watch: {
    content: {
      immediate: true,
      handler(value) {
        this.mdContent = value;
      }
    }
  },
  methods: {
    onEditMD: function() {
      this.temp = this.$refs.md.getContent();
      this.status = true;
    },
    onSaveMD: function() {
      this.status = false;
      let value = this.$refs.md.getContent();
      this.$emit("md-save-event", { value: value });
    },
    onCancelMD: function() {
      this.mdContent = this.temp;
      this.status = false;
    }
  },
  components: { BaseEditableMD, TextButton }
};
</script>
<style lang="scss" module>
.wrapper {
  position: relative;
  @include p(0 0 3.2rem 0);
}
.md {
  @include s($mh: 100px);
}
.buttons {
  @include flex;
  @include abs($b: 0, $r: $s8);
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
