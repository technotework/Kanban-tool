<template>
  <div :class="$style.item">
    <PostedTextarea :content="content" @save-event="onSave" @delete-event="onDelete" />
    <component :is="membersContainer" :id="id" :parent-id="boardId" v-model="members" />
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
  @include spr($w: 100%, $mh: 100px, $p: 0, $r: 0);
  @include bgc($white);
}
</style>
