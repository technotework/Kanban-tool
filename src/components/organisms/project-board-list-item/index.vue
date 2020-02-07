<template>
  <div :class="$style.board"></div>
</template>

<script>
export default {
  name: "ProjectBoardListItem",
  props: {},
  components: {}
};
</script>
<style lang="scss" module>
.board {
  @include spr($w: 270px, $h: auto, $p: $s16, $r: $round);
  @include bgc($lightGray);
}
</style>


