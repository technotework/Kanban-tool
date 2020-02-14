<template>
  <ContentAreaLayout>
    <template #nav>
      <ContentHeader @click="onClick">
        <template #first>Team Name</template>
        <template #second>新規作成</template>
      </ContentHeader>
    </template>
    <template #article>
      <ProjectList :items="items" />
    </template>
  </ContentAreaLayout>
</template>

<script>
import base from "@/components/utils/base-mixin";
import ProjectList from "@/components/organisms/projects/project-list/";
import ContentHeader from "@/components/organisms/content-header/";
import ContentAreaLayout from "@/components/templates/content-area-layout/";
export default {
  mixins: [base],
  name: "ProjectUnit",
  props: {
    items: Array
  },
  computed: {},
  components: {
    ContentAreaLayout,
    ContentHeader,
    ProjectList
  }
};
</script>
<style lang="scss" module>
</style>
