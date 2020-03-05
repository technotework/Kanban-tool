<template>
  <div :class="$style.wrapper">
    <BaseEditableTextarea
      v-model.lazy="textareaContent"
      :class="$style.textarea"
      :isedit="status"
      ref="textarea"
    />
    <div :class="$style.buttons">
      <template v-if="!status">
        <SecondaryMiniButton :class="$style.button" @click="onDelete">削除</SecondaryMiniButton>
        <PrimaryMiniButton :class="$style.button" @click="onEdit">編集</PrimaryMiniButton>
      </template>
      <template v-else>
        <SecondaryMiniButton :class="$style.button" @click="onCancel">キャンセル</SecondaryMiniButton>
        <PrimaryMiniButton :class="$style.button" @click="onSave">保存</PrimaryMiniButton>
      </template>
    </div>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import BaseEditableTextarea from "@/components/atoms/base-editable-textarea/";
import {
  PrimaryMiniButton,
  SecondaryMiniButton
} from "@/components/atoms/base-no-link-button/compose";

export default {
  mixins: [base],
  name: "ClickToEditableTextarea",
  props: {
    content: String
  },
  data: function() {
    return {
      textareaContent: "",
      temp: "",
      status: false
    };
  },
  watch: {
    content: {
      immediate: true,
      handler(value) {
        this.textareaContent = value;
      }
    }
  },
  methods: {
    onEdit: function() {
      this.temp = this.$refs.textarea.getContent();
      this.status = true;
    },
    onDelete: function() {
      this.$emit("delete-event");
    },
    onSave: function() {
      this.status = false;
      let value = this.$refs.textarea.getContent();
      this.$emit("save-event", { value: value });
    },
    onCancel: function() {
      this.textareaContent = this.temp;
      this.status = false;
    }
  },
  components: { BaseEditableTextarea, PrimaryMiniButton, SecondaryMiniButton }
};
</script>
<style lang="scss" module>
.wrapper {
  position: relative;
  padding: 0 0 3.2rem 0;
}
.textarea {
  min-height: 100px;
}
.buttons {
  @include flex;
  position: absolute;
  bottom: 0;
  right: 0;
}
.button {
  margin-left: 6px;
}
</style>
