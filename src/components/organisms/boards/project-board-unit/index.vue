<template>
  <ContentAreaLayout>
    <template #nav>
      <EditableContentHeader v-model.lazy="text" @input="textChange" @click="onClick">
        <template #first></template>
        <template #second>新規作成</template>
      </EditableContentHeader>
    </template>
    <template #article>
      <ProjectBoardList v-bind="{boardList}" />
    </template>
  </ContentAreaLayout>
</template>

<script>
import base from "@/components/utils/base-mixin";
import ProjectBoardList from "@/components/organisms/boards/project-board-list/";
import EditableContentHeader from "@/components/organisms/editable-content-header/";
import ContentAreaLayout from "@/components/templates/content-area-layout/";
export default {
  mixins: [base],
  name: "ProjectBoardUnit",
  props: {
    boardList: Array
  },
  computed: {},
  components: {
    ContentAreaLayout,
    EditableContentHeader,
    ProjectBoardList
  }
};
</script>
<style lang="scss" module>
</style>
