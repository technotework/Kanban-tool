<template>
  <div :class="$style.grid">
    <header :class="$style.header.gridItem">
      <slot name="header" />
    </header>
    <main :class="$style.main.gridItem">
      <slot name="main" />
    </main>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
  props: {},
  components: {}
};
</script>
<style lang="scss" module>
.grid {
  @include s($w: 100vw, $h: 100vh);
  @include grid($col: none, $row: 80px 1fr, $area: "header" "main");
}
.gridItem {
  position: relative;
  width: 100%;
  height: 100%;
}
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
</style>


