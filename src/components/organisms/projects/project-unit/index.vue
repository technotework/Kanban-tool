<template>
  <ContentAreaLayout>
    <template #nav>
      <ContentHeader @click="onClick">
        <template #first>Projects</template>
        <template #second>新規作成</template>
      </ContentHeader>
    </template>
    <template #article>
      <ProjectList :items.sync="items" @context-menu-click="onMenuClick" />
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
    value: Array
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
    onMenuClick: function(value) {
      this.$emit("context-menu-click", value);
    }
  },
  components: {
    ContentAreaLayout,
    ContentHeader,
    ProjectList
  }
};
</script>
<style lang="scss" module>
</style>
