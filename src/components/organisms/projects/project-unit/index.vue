<template>
  <ContentAreaLayout>
    <template #nav>
      <AppHeader
        navname="logout"
        :username="userData.username"
        :img="userData.img"
        :title="title"
        @update:title="onEditedTeamName"
        @add-event="onCreateProject"
        @nav-event="onNavClick"
      >NEW PROJECT</AppHeader>
    </template>
    <template #article>
      <ProjectList
        v-model="items"
        @context-menu-click="onMenuClick"
        @edited-project-name="onInput"
        @drag-sort-list="onDragSortList"
      />
    </template>
  </ContentAreaLayout>
</template>

<script>
import base from "@/components/utils/base-mixin";
import ProjectList from "@/components/organisms/projects/project-list/";
import AppHeader from "@/components/organisms/app-header/";
import ContentAreaLayout from "@/components/templates/content-area-layout/";
export default {
  mixins: [base],
  name: "ProjectUnit",
  props: {
    value: Array,
    title: String,
    userData: Object
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
    },
    onInput: function(value) {
      this.$emit("edited-project-name", value);
    },
    onDragSortList(value) {
      this.$emit("drag-sort-list", value);
    },
    onCreateProject() {
      this.$emit("add-event");
    },
    onNavClick() {
      this.$emit("nav-event");
    },
    onEditedTeamName(value) {
      this.$emit("update:title", value);
    }
  },
  components: {
    ContentAreaLayout,
    AppHeader,
    ProjectList
  }
};
</script>
<style lang="scss" module>
</style>
