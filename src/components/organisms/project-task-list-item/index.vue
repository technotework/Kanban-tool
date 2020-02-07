<template>
  <div :class="$style.item" :id="id">
    <span :class="$style.title" :title="title">{{title}}</span>
    <TextButton :class="$style.button" @click="onClick(id,$event)">編集</TextButton>
  </div>
</template>

<script>
import { TextButton } from "@/components/atoms/base-no-link-button/compose";
export default {
  name: "ProjectTaskListItem",
  props: {
    id: String,
    title: String
  },
  methods: {
    onClick: function(id, e) {
      this.$emit("click-task-edit", { id: id, e: e });
    }
  },
  components: { TextButton }
};
</script>
<style lang="scss" module>
.item {
  position: relative;
  @include spr($w: 100%, $h: 100px, $p: $s16, $r: 0);
  @include bgc($white);
}
.title {
  @include text($f16);
}
.button {
  @include text($f14);
  @include abs($b: $s16, $r: $s16);
  text-decoration: underline;
}
</style>


