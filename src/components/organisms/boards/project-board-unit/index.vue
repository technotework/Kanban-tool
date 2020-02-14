<template>
  <ContentAreaLayout>
    <template #nav>
      <ContentHeader @click="onClick">
        <template #first>Project Name</template>
        <template #second>新規作成</template>
      </ContentHeader>
    </template>
    <template #article>
      <ProjectBoardList v-bind="{boardList}" />
    </template>
  </ContentAreaLayout>
</template>

<script>
import base from "@/components/utils/base-mixin";
import ProjectBoardList from "@/components/organisms/boards/project-board-list/";
import ContentHeader from "@/components/organisms/content-header/";
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
    ContentHeader,
    ProjectBoardList
  }
};
</script>
<style lang="scss" module>
</style>
