<template>
  <div :class="$style.projectListItem" :name="name">
    <div :class="$style.thumb">
      <BaseIcon compose="normal" type="project" :class="$style.thumbIcon" />
      <ContextMenu :class="$style.contextMenu" @context-menu-click="onMenuClick" v-bind={items,id} compose="top" />
    </div>
    <span :class="$style.projectName">{{name}}</span>
    <br />
    <DateTimeText :date="date" :class="$style.date" />

  </div>
</template>

<script>
import DateTimeText from "@/components/atoms/base-time-text/date-time-text";
import BaseIcon from "@/components/atoms/base-icon/";
import ContextMenu from "@/components/molecules/context-menu/";
export default {
  name: "ProjectListItem",
  props: {
    id: String,
    name:String,
    date: String
  },
  data: function() {
    return {
      items: [
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
  components: { ContextMenu, DateTimeText, BaseIcon },
  methods: {
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


