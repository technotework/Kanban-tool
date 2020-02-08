<template>
  <ul :items="items" :class="$style.list">
    <li v-for="item in items" :key="item.id" :class="$style.listItem">
      <ProjectBoardListItem
        v-model="item.name"
        :id="item.id"
        :tasks="item.tasks"
      />
    </li>
  </ul>
</template>

<script>
import ProjectBoardListItem from "@/components/organisms/project-board-list-item/";
export default {
  name: "ProjectBoardList",
  props: {
    items: Array
  },
  components: { ProjectBoardListItem }
};
</script>
<style lang="scss" module>
.list {
  display: flex;
  flex-wrap: nowrap;
  width: 100vw;
  overflow-x: auto;
  @include p(0 0 $s16 0);
}
.listItem {
  @include m(0 $s32 0 0);
}
</style>
