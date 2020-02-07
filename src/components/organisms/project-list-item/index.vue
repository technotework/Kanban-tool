<template>
  <div :class="$style.projectListItem" :name="name">
    <div :class="$style.thumb">
      <BaseIcon compose="normal" type="project" :class="$style.thumbIcon" />
      <div @click.stop="onClick">
        <TransparentButton>
          <BaseIcon compose="normal" type="context" :class="$style.contextMenu" />
        </TransparentButton>
      </div>
    </div>
    <span :class="$style.projectName">{{name}}</span>
    <br />
    <DateTimeText :date="date" :class="$style.date" />

    <template v-if="showContext">
      <ContextMenuList
        :id="id"
        :items="contextMenuItem"
        :class="$style.contextMenuBody"
        @context-menu-click="onMenuClick"
        @close="onClose"
      />
    </template>
  </div>
</template>

<script>
import BaseIcon from "@/components/atoms/base-icon/";
import ContextMenuList from "@/components/molecules/context-menu-list/";
import { TransparentButton } from "@/components/atoms/base-no-link-button/compose";
import DateTimeText from "@/components/atoms/base-time-text/date-time-text";

export default {
  name: "ProjectListItem",
  props: {
    id: String,
    name: String,
    date: String
  },
  data: function() {
    return {
      showContext: false,
      contextMenuItem: [
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
  components: { BaseIcon, TransparentButton, ContextMenuList, DateTimeText },
  methods: {
    onClick(e) {
      this.showContext = !this.showContext;
    },
    onClose: function(e) {
      this.showContext = !this.showContext;
    },
    onMenuClick: function(value) {
      console.log(value);
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
  @include m(0 0 $s8 0);

  .thumbIcon {
    fill: rgba(255, 255, 255, 0.4);
    display: block;
    width: 142px;
    height: auto;
    @include m(0 auto);
    @include p(12px 0 0 0);
  }
  .contextMenu {
    fill: $darkGray;
    display: block;
    width: 30px;
    height: 28px;
    @include abs($b: $s4, $r: $s16);
    &:hover {
      fill: $gray;
    }
  }
}

.projectName {
  font-weight: bold;
  font-size: $f16;
}
.contextMenuBody {
  @include abs($t: 175px, $r: 0);
}
.date:before {
  content: "Update:";
}
</style>


