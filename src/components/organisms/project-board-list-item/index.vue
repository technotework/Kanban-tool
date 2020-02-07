<template>
  <div :class="$style.board" :content="content" >
  <ClickToEditableInput v-model="content" />
  
  </div>
</template>

<script>
import ClickToEditableInput from "@/components/molecules/click-to-editable-input/"

export default {
  name: "ProjectBoardListItem",
  props: {
    content: String
  },
  components: {ClickToEditableInput}
};
</script>
<style lang="scss" module>
.board {
  @include spr($w: 270px, $h: auto, $p: $s16, $r: $round);
  @include bgc($lightGray);
}
</style>


