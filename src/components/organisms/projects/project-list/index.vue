<template>
  <div :class="$style.wrapper">
    <ul :class="$style.list">
      <li v-for="item in items" :key="item.id" :class="$style.listItem">
        <ProjectListItem :id="item.id" :name="item.name" :date="item.date" />
      </li>
    </ul>
  </div>
</template>

<script>
import ProjectListItem from "@/components/organisms/projects/project-list-item/";
export default {
  name: "ProjectList",
  props: {
    items: Array
  },
  components: {
    ProjectListItem
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
  }
}
</style>
