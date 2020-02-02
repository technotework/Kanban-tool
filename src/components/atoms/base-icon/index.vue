<template>
  <div class="base-icon">
    <div :class="$style.icon" :style="styles">
      <slot />
    </div>
  </div>
</template>

<script>
import styles from "@/components/utils/styles-mixin";

export default {
  mixins: [styles],
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

