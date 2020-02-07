<template>
  <div :class="$style.wrapper">
    <div @click="onClickEdit" :class="[$style.editableTextContainer,$compose[status]]">
      <BaseEditableText
        :class="$style.editableText"
        ref="editableText"
        :contenteditable="isEditable"
      ></BaseEditableText>
    </div>
    <template v-if="isEditable">
      <MiniButton @click="onClickCompleteEdit" :class="$style.button">OK</MiniButton>
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import base from "@/components/utils/base-mixin";
import { MiniButton } from "@/components/atoms/base-no-link-button/compose";
import BaseEditableText from "@/components/atoms/base-editable-text/";
export default {
  mixins: [base],
  name: "ClickToEditableText",
  data: function() {
    return {
      isEditable: false,
      status: "uneditable"
    };
  },
  methods: {
    onClickEdit: function(e) {
      this.isEditable = true;
      this.status = "editable";
      Vue.nextTick(() => {
        this.$refs.editableText.focus();
      });
    },
    onClickCompleteEdit: function(e) {
      this.isEditable = false;
      this.status = "uneditable";
      //更新処理
    }
  },
  components: { BaseEditableText, MiniButton }
};
</script>
<style lang="scss" module>
.wrapper {
  @include flex;
}
.editableTextContainer {
  @include s($h: 40px);
}
.editableText {
  @include s($w: 100%, $h: 100%);
  @include bdc($transparent);
  @include p($s8);
  cursor: text;
}
.button {
  @include s($w: 55px, $h: auto);
}
</style>

<style lang="scss" module="$compose">
.editable {
  flex-grow: 1;
  .editableText {
    @include bdc($white);
  }
}
.uneditable {
  flex-grow: 1;
  .editableText {
    @include bdc($transparent);
    border-bottom: solid 1px $darkGray;
  }
}
</style>
