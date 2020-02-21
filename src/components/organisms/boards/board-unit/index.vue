<template>
  <ContentAreaLayout>
    <template #nav>
      <EditableContentHeader
        :title="title"
        @update:title="onEditedProjectName"
        @click="onCreateBoard"
      >
        <template #first></template>
        <template #second>新規作成</template>
      </EditableContentHeader>
    </template>
    <template #article>
      <BoardList v-model="items" @edited-board-name="onInput" @context-menu-click="onClick" />
    </template>
  </ContentAreaLayout>
</template>

<script>
import base from "@/components/utils/base-mixin";
import BoardList from "@/components/organisms/boards/board-list/";
import EditableContentHeader from "@/components/organisms/editable-content-header/";
import ContentAreaLayout from "@/components/templates/content-area-layout/";
export default {
  mixins: [base],
  name: "BoardUnit",
  props: {
    value: Array,
    title: String
  },
  computed: {
    items: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    onInput: function(value) {
      this.$emit("edited-board-name", value);
    },
    onEditedProjectName(value) {
      this.$emit("update:title", value);
    },
    onClick(value) {
      this.$emit("context-menu-click", value);
    },
    onCreateBoard() {
      this.$emit("create-board");
    }
  },
  components: {
    ContentAreaLayout,
    EditableContentHeader,
    BoardList
  }
};
</script>
<style lang="scss" module>
</style>
