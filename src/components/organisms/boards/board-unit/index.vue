<template>
  <ContentAreaLayout>
    <template #nav>
      <AppHeader
        navname="back"
        :username="userData.username"
        :img="userData.img"
        :title="title"
        @update:title="onEditedProjectName"
        @add-event="onCreateBoard"
        @nav-event="onNavClick"
      />
    </template>
    <template #article>
      <BoardList
        v-model="items"
        :task-container="taskContainer"
        @edited-board-name="onInput"
        @context-menu-click="onClick"
        @drag-sort-list="onDragSortList"
      />
    </template>
  </ContentAreaLayout>
</template>

<script>
import base from "@/components/utils/base-mixin";
import AppHeader from "@/components/organisms/app-header/";
import BoardList from "@/components/organisms/boards/board-list/";
import ContentAreaLayout from "@/components/templates/content-area-layout/";
export default {
  mixins: [base],
  name: "BoardUnit",
  props: {
    value: Array,
    userData: Object,
    title: String,
    taskContainer: Object
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
    onDragSortList(value) {
      this.$emit("drag-sort-list", value);
    },
    onCreateBoard() {
      this.$emit("create-board");
    },
    onNavClick() {
      this.$emit("nav-event");
    }
  },
  components: {
    ContentAreaLayout,
    BoardList,
    AppHeader
  }
};
</script>
<style lang="scss" module>
</style>
