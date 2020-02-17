<template>
  <div :class="$style.wrapper">
    <draggable :items.sync="items" :class="$style.list" tag="ul" v-bind="dragOptions">
      <li v-for="item in items" :key="item.project.id" :class="$style.listItem">
        <ProjectListItem
          :id="item.project.id"
          v-model="item.project.label"
          :date="item.project.update_date"
          @context-menu-click="onMenuClick"
          @edited-project-name="onInput"
        />
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
  methods: {
    update(value) {
      this.$emit("change");
    },
    onMenuClick: function(value) {
      this.$emit("context-menu-click", value);
    },
    onInput: function(value) {
      this.$emit("edited-project-name", value);
    }
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
