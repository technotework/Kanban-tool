<template>
  <div :size="size">
    <header>
      <HolyGrailContainer :style="headerStyle">
        <slot name="header" />
      </HolyGrailContainer>
    </header>
    <main>
      <HolyGrailContainer :style="mainStyle">
        <slot name="main" />
      </HolyGrailContainer>
    </main>
    <footer>
      <HolyGrailContainer :style="footerStyle">
        <slot name="footer" />
      </HolyGrailContainer>
    </footer>
  </div>
</template>

<script>
import HolyGrailContainer from "@/components/templates/holy-grail-container";
export default {
  name: "HolyGrailLayout",
  props: {
    size: {
      type: Object,
      default: () => ({
        hW: "auto",
        hH: "auto",
        mW: "auto",
        mH: "auto",
        fW: "auto",
        fH: "auto"
      })
    }
  },
  computed: {
    headerStyle: function() {
      return `width:${this.size.hW}; height:${this.size.hH};`;
    },
    mainStyle: function() {
      return `width:${this.size.mW}; height:${this.size.mH};`;
    },
    footerStyle: function() {
      return `width:${this.size.fW}; height:${this.size.fH};`;
    }
  },
  components: {
    HolyGrailContainer
  }
};
</script>
<style lang="scss" module="$compose">
</style>


