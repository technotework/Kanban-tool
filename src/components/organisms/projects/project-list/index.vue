<template>
  <div :class="$style.wrapper">
    <draggable :list="items" :class="$style.list" tag="ul" v-bind="dragOptions">
      <li v-for="item in items" :key="item.id" :class="$style.listItem">
        <ProjectListItem :id="item.id" :name="item.name" :date="item.date" />
      </li>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import ProjectListItem from "@/components/organisms/projects/project-list-item/";
export default {
  name: "ProjectList",
  props: {
    items: Array
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        ghostClass: this.$style.ghost
      };
    }
  },
  components: {
    ProjectListItem,
    draggable
  }
};
</script>
<style lang="scss" module>
.wrapper {
  display: inline-block;
}
.list {
  @include flex;

  .listItem {
    @include m(0 $s18 4rem $s18);
    cursor: move;
  }
}
.ghost {
  opacity: 0.3;
  cursor: move;
}
</style>
