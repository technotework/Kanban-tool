<template>
  <div id="app">
    <router-view />
    <HolyGrailLayout :size="obj">
      <template #header>header</template>
      <template #main>main</template>
      <template #footer>footer</template>
    </HolyGrailLayout>
  </div>
</template>

<script>
import HolyGrailLayout from "@/components/templates/holy-grail-layout";

export default {
  name: "App",
  props: {},
  data: function() {
    return {
      obj: {
        headerWidth: "100vw",
        headerHeight: "50px",
        mainWidth: "100vw",
        mainHeight: "auto",
        footerWidth: "100vw",
        footerHeight: "50px"
      }
    };
  },
  components: { HolyGrailLayout }
};
</script>
