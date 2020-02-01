<template>
  <StyledHolyGrailLayout :size="size">
    <header>
      <HolyGrailContainer :width="size.headerWidth" :height="size.headerHeight">
        <slot name="header" />
      </HolyGrailContainer>
    </header>
    <main>
      <HolyGrailContainer :width="size.mainWidth" :height="size.mainHeight">
        <slot name="main" />
      </HolyGrailContainer>
    </main>
    <footer>
      <HolyGrailContainer :width="size.footerWidth" :height="size.footerHeight">
        <slot name="footer" />
      </HolyGrailContainer>
    </footer>
  </StyledHolyGrailLayout>
</template>

<script>
import StyledHolyGrailLayout from "./style";
import HolyGrailContainer from "@/components/templates/holy-grail-container/";

export default {
  name: "HolyGrailLayout",
  props: {
    size: {
      type: Object,
      default: () => ({
        headerWidth: "auto",
        headerHeight: "auto",
        mainWidth: "auto",
        mainHeight: "auto",
        footerWidth: "auto",
        footerHeight: "auto"
      })
    }
  },
  components: {
    HolyGrailContainer,
    StyledHolyGrailLayout
  }
};
</script>
<style lang="scss" module>
.class{

  
}
</style>


