<template>
  <div :class="$style.grid">
    <nav :class="$style.nav">
      <slot name="nav" />
    </nav>
    <article :class="$style.article">
      <slot name="article" />
    </article>
  </div>
</template>

<script>
export default {
  name: "ContentAreaLayout",
  props: {},
  components: {}
};
</script>
<style lang="scss" module>
.grid {
  @include s($w: 100%, $h: 100%);
  @include p($s32);
  @include grid($col: none, $row: 85px 1fr, $area: "nav" "article");
}
.header {
  grid-area: nav;
}
.main {
  grid-area: article;
}
</style>


