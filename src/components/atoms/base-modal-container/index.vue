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
  background-color: $white;
}
.dialogue {
  @include alert;
}
</style>
