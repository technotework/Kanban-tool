<template>
  <div :class="[$style.modal, $compose[compose]]" :compose="compose">
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
  position: relative;
}
</style>

<style lang="scss" module="$compose">
.none {
  @include bgc($white);
}
.dialogue {
  @include r($round);
  @include s($w: 320px, $mh: 200px);
  @include bgc($white);
  @include p($s18);
  @include shadow;
}
</style>
