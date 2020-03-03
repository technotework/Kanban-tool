<template>
  <div :class="$style.item">
    <PostedMD :content="content" @md-save-event="onSave" @md-delete-event="onDelete" />
    <component :is="membersContainer" :parent-id="id" v-model="members" />
  </div>
</template>

<script>
import { PostedMD } from "@/components/molecules/click-to-editable-md/compose";
export default {
  name: "TaskListItem",
  props: {
    content: String,
    id: String,
    membersContainer: Object,
    value: Array
  },
  methods: {
    onSave(value) {
      value.id = this.id;
      this.$emit("md-save-event", value);
    },
    onDelete(value) {
      this.$emit("md-delete-event", { id: this.id });
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
  components: { PostedMD }
};
</script>
<style lang="scss" module>
.item {
  @include spr($w: 100%, $mh: 100px, $p: 0, $r: 0);
  @include bgc($white);
}
</style>
