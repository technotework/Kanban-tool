<template>
  <ContentAreaLayout>
    <template #nav>
      <EditableContentHeader v-model.lazy="projectName" @click="onClick">
        <template #first></template>
        <template #second>新規作成</template>
      </EditableContentHeader>
    </template>
    <template #article>
      <BoardList v-model="items" @edited-board-name="onInput" />
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
    value: Array
  },
  computed: {
    projectName() {
      return "a";
    },
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
