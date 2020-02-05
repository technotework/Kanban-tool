<template>
  <div :class="$style.grid">
    <header>
      <HolyGrailContainer :class="$style.header">
        <slot name="header" />
      </HolyGrailContainer>
    </header>
    <main>
      <HolyGrailContainer :class="$style.main">
        <slot name="main" />
      </HolyGrailContainer>
    </main>
  </div>
</template>

<script>
import HolyGrailContainer from "@/components/templates/holy-grail-container";
export default {
  name: "HolyGrailLayout",
  props: {
    
  },
  components: {
    HolyGrailContainer
  }
};
</script>
<style lang="scss" module>
.grid{
  @include s($w:100vw,$h:100vh);
  @include grid($col:none,$row:80px 1fr,$area:"header""main");

}
.header{
  grid-area:header;

}
.main{
  grid-area:main;

}
</style>


