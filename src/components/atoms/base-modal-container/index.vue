<template>
  <div :class="[$style.modal,$compose[compose]]" :style="styles" :compose="compose">
    <slot />
  </div>
</template>
<script>
import styles from "@/components/utils/styles-mixin";
export default {
  mixins: [styles],
  name: "BaseModalContainer"
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



