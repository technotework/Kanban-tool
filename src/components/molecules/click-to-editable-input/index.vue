<template>
  <div :class="$style.wrapper" >
    <div @click="onClickEdit" :class="[$style.editableInputContainer,$compose[status]]">
      <EditInput
        :class="$style.editableInput"
        :disable="isDisable"
        :content="content"
      />
      <template v-if="isDisable">
        <IconM type="edit" :class="$style.icon" />
      </template>
    </div>
    <template v-if="!isDisable">
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
  props:{
    content:String,
  },
  data: function() {
    return {
      isDisable: true,
      status: "uneditable"
    };
  },
  methods: {
    onClickEdit: function(e) {
      this.isDisable = false;
      this.status = "editable";
    },
    onClickCompleteEdit: function(e) {
      this.isDisable = true;
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
  flex-wrap: nowrap;
}
.editableInputContainer {
  position: relative;
  @include s($h: 39px);
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
  fill: $darkGray;
  @include s($w:18px,$h:18px);
  @include abs($t: 12px, $r: 10px);
}
</style>

<style lang="scss" module="$compose">
.editable {
 
  .editableInput {
    @include bgc($white);
    @include p($s8);
  }
}
.uneditable {
  flex-grow: 1;
  .editableInput {
    @include bgc($transparent);
  }
}
</style>
