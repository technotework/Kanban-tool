<template>
  <div :is="tag" :tag="tag" :class="[$style.heading,$compose[tag]]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseHeading",
  props: {
    tag: String,
    compose: String
  }
};
</script>
<style lang="scss" module>
.heading {
  font-weight: bold;
  display: inline-block;
}
</style>

<style lang="scss" module="$compose">
.h1 {
  @include text($f32);
}
.h2 {
  @include text($f28);
}
.h3 {
  @include text($f24);
}
.h4 {
  @include text($f20);
}
</style>
