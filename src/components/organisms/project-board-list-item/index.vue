<template>
  <div :class="$style.board">
    <ClickToEditableInput
      v-model.lazy="name"
      :class="$style.input"
      role="title"
    />
    <ContextMenu
      :class="$style.contextMenu"
      @context-menu-click="onMenuClick"
      v-bind="{ items, id }"
      compose="bottom"
    />
    <ProjectTaskList :items="tasks" />
  </div>
</template>

<script>
import ClickToEditableInput from "@/components/molecules/click-to-editable-input/";
import ContextMenu from "@/components/molecules/context-menu/";
import ProjectTaskList from "@/components/organisms/project-task-list/";

export default {
  name: "ProjectBoardListItem",
  props: {
    id: String,
    tasks: Array,
    value: String
  },
  data: function() {
    return {
      items: [
        {
          value: "ボードを削除",
          name: "delete"
        }
      ]
    };
  },
  computed: {
    name: {
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
      console.log(value);
    }
  },
  components: { ClickToEditableInput, ContextMenu, ProjectTaskList }
};
</script>
<style lang="scss" module>
.board {
  position: relative;
  @include spr($w: 270px, $h: auto, $p: $s16 0, $r: $round);
  @include bgc($lightGray);
  display: flex;
  flex-direction: column;
}
.input {
  @include m(2.4rem 1.6rem 1.8rem 1.6rem);
}

.contextMenu {
  @include abs($t: $s8, $r: $s18);
  flex: 1;
}
</style>
