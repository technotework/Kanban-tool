<template>
  <div :class="$style.projectListItem">
    <div :class="$style.thumb">
      <BaseIcon compose="normal" type="project" :class="$style.thumbIcon" />
      <div @click.stop="onClick">
        <TransparentButton>
          <BaseIcon compose="normal" type="context" :class="$style.contextMenu" />
        </TransparentButton>
      </div>
    </div>
    <template v-if="showContext">
      <ContextMenuList
        :id="projectID"
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
export default {
  name: "ProjectListItem",
  data: function() {
    return {
      projectID: "p1",
      projectName: "myProjectName",
      projectUpdateDate: 1580964954,
      showContext: false,
      contextMenuItem: [
        {
          value: "削除",
          name: "delete"
        }
      ]
    };
  },
  props: {},
  components: { BaseIcon, TransparentButton, ContextMenuList },
  methods: {
    onClick(e) {
      this.showContext = !this.showContext;
    },
    onClose: function(e) {
      console.log("hoge");
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
  @include bgc($gray);

  .thumbIcon {
    fill: $white;
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
      fill: $white;
    }
  }
}

.contextMenuBody {
  @include abs($t: 175px, $r: 0);
}
</style>


