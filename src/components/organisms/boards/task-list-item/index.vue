<template>
  <div :class="[$style.item,{['ignore']:(editor!='')},(editor!='')?$style.noDrag:$style.drag]">
    <PostedTextarea
      :content="content"
      :status="(editor!='')"
      @save-event="onSave"
      @delete-event="onDelete"
      @start-edit-task="onStartEdit"
      @complete-edit-task="onCompleteEdit"
    >
      <component
        :is="membersContainer"
        :id="id"
        :parent-id="boardId"
        :editor="editor"
        v-model="members"
        ref="members"
        :class="$style.member"
      />
    </PostedTextarea>
  </div>
</template>

<script>
import { PostedTextarea } from "@/components/molecules/click-to-editable-textarea/compose";
export default {
  name: "TaskListItem",
  props: {
    content: String,
    id: String,
    editor: String,
    membersContainer: Object,
    boardId: String,
    value: Array
  },
  methods: {
    onSave(value) {
      value.id = this.id;
      this.$emit("save-event", value);
    },
    onDelete(value) {
      this.$emit("delete-event", { id: this.id });
    },
    onStartEdit() {
      this.$emit("start-edit-task", { id: this.id });
    },
    onCompleteEdit() {
      this.$emit("complete-edit-task", { id: this.id });
    }
  },
  computed: {
    members: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  components: { PostedTextarea }
};
</script>
<style lang="scss" module>
.item {
  @include task;
}
.member a {
  display: block;
  width: 168px;
  margin-left: 1px;
  text-align: left;
}
.noDrag {
  cursor: default;
}
.drag {
  cursor: move;
}
</style>
