<template>
  <div :class="$style.wrapper">
    <div @click="onClickEdit" :class="[$style.editableInputContainer,$compose[status]]">
      <EditInput
        :class="$style.editableInput"
        ref="editableInput"
        v-model="content"
        :readonly="isReadOnly"
      />
      <template v-if="isReadOnly">
        <IconM type="edit" :class="$style.icon" />
      </template>
    </div>
    <template v-if="!isReadOnly">
      <MiniButton @click="onClickCompleteEdit" :class="$style.button">OK</MiniButton>
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import { IconM } from "@/components/atoms/base-icon/compose";
import base from "@/components/utils/base-mixin";
import { MiniButton } from "@/components/atoms/base-no-link-button/compose";
import { EditInput } from "@/components/atoms/base-input/compose";
export default {
  mixins: [base],
  name: "ClickToEditableInput",
  data: function() {
    return {
      content: "",
      isReadOnly: true,
      status: "uneditable"
    };
  },
  methods: {
    onClickEdit: function(e) {
      this.isReadOnly = false;
      this.status = "editable";
      Vue.nextTick(() => {
        //this.$refs.editableInput.focus();
      });
    },
    onClickCompleteEdit: function(e) {
      this.isReadOnly = true;
      this.status = "uneditable";
      //更新処理
    }
  },
  components: { EditInput, MiniButton, IconM }
};
</script>
<style lang="scss" module>
.wrapper {
  @include flex;
}
.editableInputContainer {
  position: relative;
  @include s($h: 40px);
  overflow: hidden;
}
.editableInput {
  @include s($w: 100%, $h: 100%);
  @include bdc($transparent);
  @include p($s8 38px $s8 $s8);
  cursor: text;
}
.button {
  @include s($w: 55px, $h: auto);
  @include m(0 0 0 $s8);
}
.icon {
  fill: $gray;
  @include abs($t: 10px, $r: 12px);
}
</style>

<style lang="scss" module="$compose">
.editable {
  flex-grow: 1;
  .editableInput {
    @include bdc($white);
    @include p($s8);
  }
}
.uneditable {
  flex-grow: 1;
  .editableInput {
    @include bdc($transparent);
    border-bottom: solid 1px $darkGray;
  }
}
</style>
