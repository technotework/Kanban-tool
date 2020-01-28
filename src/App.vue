<template>
  <div id="app">
    <router-view />
    <Theme>
      <BaseLayout>
        <template #header>header</template>
        <template #main>main</template>
        <template #footer>footer</template>
      </BaseLayout>
    </Theme>
  </div>
</template>

<script>
import Theme from "@/components/themes/theme";
import { BaseLayout } from "@/components/templates/holy-grail-layout/compose";

export default {
  name: "App",
  props: {},
  data: function() {
    return {};
  },
  components: { BaseLayout, Theme }
};
</script>
