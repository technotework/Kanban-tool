<template>
  <div class="base-icon">
    <div :class="$style.icon">
      <slot />
    </div>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseIcon"
};
</script>
<style lang="scss" module>
.icon {
  --w: auto;
  --h: auto;
  --r: 100px;
  --url: "";

  @include s($w: var(--w), $h: var(--h));
  @include r(var(--r));
  @include bgi(var(--url));
}
</style>

