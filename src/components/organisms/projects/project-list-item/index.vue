<template>
  <div :class="$style.projectListItem">
    <div :class="$style.thumb">
      <BaseIcon compose="normal" type="project" :class="$style.thumbIcon" />
      <ContextMenu
        :class="$style.contextMenu"
        @context-menu-click="onMenuClick"
        v-bind="{ menuItems, id }"
        compose="top"
      />
    </div>
    <ClickToEditableInput role="label" v-model.lazy="title" />
    <DateTimeText :date="date" :class="$style.date" />
  </div>
</template>

<script>
import ClickToEditableInput from "@/components/molecules/click-to-editable-input/";
import DateTimeText from "@/components/atoms/base-time-text/date-time-text";
import BaseIcon from "@/components/atoms/base-icon/";
import ContextMenu from "@/components/molecules/context-menu/";
export default {
  name: "ProjectListItem",
  props: {
    id: String,
    value: String,
    date: String
  },
  data: function() {
    return {
      menuItems: [
        {
          value: "編集",
          name: "edit"
        },
        {
          value: "削除",
          name: "delete"
        }
      ]
    };
  },
  computed: {
    title: {
      get() {
        return this.value;
      },
      set(value) {
        this.value = value;
        this.$emit("edited-project-name", { name: value, id: this.id });
      }
    }
  },
  components: { ContextMenu, DateTimeText, BaseIcon, ClickToEditableInput },
  methods: {
    onMenuClick: function(value) {
      this.$emit("context-menu-click", value);
    }
  }
};
</script>
<style lang="scss" module>
.projectListItem {
  position: relative;
  width: 270px;
}
.thumb {
  position: relative;
  @include s($w: 270px, $h: 178px);
  @include r($round);
  @include bgc($lightGray);
  @include m(0 0 2px 0);

  .thumbIcon {
    fill: rgba(255, 255, 255, 0.4);
    display: block;
    width: 142px;
    height: auto;
    @include m(0 auto);
    @include p(12px 0 0 0);
  }
  .contextMenu {
    @include abs($b: 0, $r: $s16);
  }
}

.projectName {
  font-weight: bold;
  font-size: $f16;
}
.date:before {
  content: "Update:";
}
</style>
