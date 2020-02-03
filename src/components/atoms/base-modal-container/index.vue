<template>
  <div :class="[$style.modal,$compose[compose]]" :compose="compose">
    <slot />
  </div>
</template>
<script>
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "BaseModalContainer"
};
</script>
<style lang="scss" module>
.modal {
  @include fix($t: var(--top), $l: var(--left), $index: $index_xh);
  @include r($round);
  @include s($w: var(--w), $mh: var(--mh));
  @include bgc($lightGray);
}
</style>

<style lang="scss" module="$compose">
.none {
  @include bgc($white);
}
.dialogue {
  @include bgc($white);
  @include centerfix(var(--w), var(--mh), $index_xh);
  @include p($s24);
  @include shadow;
}
</style>



