<template>
  <ul :class="$style.list">
    <li v-for="item in items" :key="item.id">
      <ProjectTaskListItem
        :id="item.id"
        :title="item.title"
        :class="$style.listItem"
        @click-task-edit="onClick"
      />
    </li>
  </ul>
</template>

<script>
import ProjectTaskListItem from "@/components/organisms/project-task-list-item/";
export default {
  name: "ProjectTaskList",
  props: {
    items: Array
  },
  methods: {
    onClick: function(...args) {
      this.$emit("click-task-edit", ...args);
    }
  },
  components: { ProjectTaskListItem }
};
</script>
<style lang="scss" module>
.list {
  width: 100%;
  overflow-y: auto;
  @include p(0 16px);
}
.listItem {
  @include m(0 0 16px 0);
  @include s($mxw: 238px);
}
</style>
