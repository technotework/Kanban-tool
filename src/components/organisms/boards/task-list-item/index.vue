<template>
  <div :class="$style.item">
    <PostedTextarea :content="content" @save-event="onSave" @delete-event="onDelete" />
    <component
      :is="membersContainer"
      :id="id"
      :parent-id="boardId"
      v-model="members"
      :class="$style.member"
    />
  </div>
</template>

<script>
import { PostedTextarea } from "@/components/molecules/click-to-editable-textarea/compose";
export default {
  name: "TaskListItem",
  props: {
    content: String,
    id: String,
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
  margin: -27px 0 0 0;
  width: 188px;
  text-align: left;
}
</style>
