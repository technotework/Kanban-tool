<template>
  <a :class="[$style.button, $compose[compose]]" @click.prevent="onClick">
    <slot />
  </a>
</template>

<script>
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "BaseNoLinkButton",
  props: {}
};
</script>

<style lang="scss" module>
.button {
  display: block;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  border: none;
  cursor: pointer;
  user-select: none;
}
</style>

<style lang="scss" module="$compose">
.primary {
  @include primaryButton;
}
.secondary {
  @include secondaryButton;
}
.mprimary {
  @include primaryMiniButton;
}
.msecondary {
  @include secondaryMiniButton;
}
.menu {
  @include menuButton;
}
.transparent {
  @include transparentButton;
}
.mini {
  @include primarySideButton;
}
.add {
  @include addMiniButton;
}
.big {
  @include newButton;
}
</style>
