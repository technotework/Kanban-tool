<template>
  <div :class="$style.wrapper">
    <draggable
      v-model="items"
      :class="$style.list"
      tag="ul"
      v-bind="dragOptions"
      @end="onDragSortList"
    >
      <li
        v-for="item in items"
        :key="item.project.id"
        :data-id="item.project.id"
        :class="$style.listItem"
      >
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
    value: Array
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
    },
    onDragSortList(e) {
      let dataSet = e.item.dataset;
      this.$emit("drag-sort-list", dataSet);
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        ghostClass: this.$style.ghost
      };
    },
    items: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
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
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 14vh 75px 70px 75px;

  .listItem {
    margin: 0 30px 4rem 30px;
    cursor: move;
  }
}
.ghost {
  opacity: 0.3;
  cursor: move;
}

@include mobile {
  .list {
    margin: 20px 5px 10px 5px;
    .listItem {
      margin: 0 20px 4rem 20px;
      cursor: move;
    }
  }
}
</style>
