<template>
  <div id="app">
    <router-view />
    <Theme>
      <BaseLayout>
        <template #header>
          <BothSideRight>ほげ</BothSideRight>
        </template>
        <template #main>main</template>
        <template #footer>footer</template>
      </BaseLayout>
    </Theme>
  </div>
</template>

<script>
import Theme from "@/components/themes/theme";
import { BaseLayout } from "@/components/templates/holy-grail-layout/compose";
import BothSideRight from "@/components/templates/both-side-right/";

export default {
  name: "App",
  props: {},
  data: function() {
    return {};
  },
  components: { BothSideRight, BaseLayout, Theme }
};
</script>
