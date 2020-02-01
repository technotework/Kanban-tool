<template>
  <div :class="[$style.modal,$compose[compose]]" :style="styles">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseModalContainer",
  props: {
    width: { type: String },
    minHeight: { type: String },
    index: { type: Number },
    top: { type: String },
    left: { type: String },
    compose: { type: String }
  },
  computed: {
    styles() {
      return {
        "--w": this.width,
        "--mh": this.minHeight,
        "--index": this.index,
        "--top": this.top,
        "--left": this.left
      };
    }
  }
};
</script>
<style lang="scss" module>
.modal {
  @include fix($t: var(--top), $l: var(--left), $index: $index_xh);
  @include r($round);
  @include s($w: var(--w), $mh: var(--mh));
  @include bg($lightGray);
}
</style>

<style lang="scss" module="$compose">
.none {
  @include bg($lightGray);
}
.dialogue {
  @include cfix(var(--w), var(--mh), $index_xh);
  @include pd($s16);
  @include shadow;
}
</style>



