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
  @include s($w: 100%, $h: 100%);
  
  @include flex;
  flex-direction: column;
}
.listItem {
  @include m(0 0 $s16 0);
}
</style>


