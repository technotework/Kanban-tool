<template>
  <div :class="$style.grid">
    <header :class="$style.header">
      <slot name="header" />
    </header>
    <main :class="$style.main">
      <slot name="main" />
    </main>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
  props: {},
  components: {}
};
</script>
<style lang="scss" module>
.grid {
  @include s($w: 100vw, $h: 100vh);
  @include grid($col: none, $row: 80px 1fr, $area: "header" "main");
}
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
</style>


