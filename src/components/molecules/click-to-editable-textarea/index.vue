<template>
  <div :class="$style.wrapper">
    <BaseEditableTextarea
      v-model.lazy="textareaContent"
      :class="$style.textarea"
      :isedit="status"
      ref="textarea"
      @dblclick="onDClick"
    />
    <div :class="$style.buttons">
      <template v-if="!status">
        <ContextMenu
          @context-menu-click="onMenuClick"
          v-bind="{ menuItems }"
          compose="top"
          :class="$style.menu"
        />
      </template>
      <template v-else>
        <SecondaryMiniButton :class="$style.button" @click="onCancel">キャンセル</SecondaryMiniButton>
        <PrimaryMiniButton :class="$style.button" @click="onSave">保存</PrimaryMiniButton>
      </template>
    </div>
  </div>
</template>

<script>
import ContextMenu from "@/components/molecules/context-menu/";
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
    content: String,
    status: Boolean
  },
  data: function() {
    return {
      textareaContent: "",
      temp: "",

      menuItems: [
        {
          value: "編集",
          name: "edit"
        },
        {
          value: "削除",
          name: "delete"
        }
      ]
    };
  },
  watch: {
    content: {
      immediate: true,
      handler(value) {
        this.textareaContent = value;
      }
    },
    status: {
      immediate: true,
      handler(value) {
        if (value == false && this.temp != "") {
          this.textareaContent = this.temp;
        }
      }
    }
  },
  methods: {
    onMenuClick: function(value) {
      if (value.name == "delete") {
        this.onDelete();
      } else if (value.name == "edit") {
        this.onEdit();
        this.$emit("start-edit-task");
      }
    },
    onDClick: function() {
      this.onEdit();
      this.$emit("start-edit-task");
    },
    onEdit: function() {
      this.temp = this.$refs.textarea.getContent();
      //this.status = true;
    },
    onDelete: function() {
      this.$emit("delete-event");
    },
    onSave: function() {
      //this.status = false;
      this.temp = "";
      let value = this.$refs.textarea.getContent();
      this.$emit("save-event", { value: value });
      this.$emit("complete-edit-task");
    },
    onCancel: function() {
      this.textareaContent = this.temp;
      //this.status = false;
      this.$emit("complete-edit-task");
    }
  },
  components: {
    BaseEditableTextarea,
    PrimaryMiniButton,
    SecondaryMiniButton,
    ContextMenu
  }
};
</script>
<style lang="scss" module>
.wrapper {
  position: relative;
  padding: 0 0 32px 0;
}
.textarea {
  min-height: 80px;
}
.menu {
  position: absolute;
  top: -14px;
  right: 9px;
}
.buttons {
  display: flex;
  position: absolute;
  bottom: 1px;
  right: 0;
}
.button {
  margin-left: 6px;
}
</style>
