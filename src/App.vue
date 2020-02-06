<template>
  <div id="app">
    <router-view />
    <BaseLayout>
      <template #header>header</template>
      <template #main>main</template>
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from "@/components/templates/base-layout";

export default {
  name: "App",
  props: {},
  data: function() {
    return {};
  },
  components: { BaseLayout }
};
</script>
