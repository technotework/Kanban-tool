<template>
  <div id="app">
    <router-view />
    <Theme>
      <BaseButton value="OK" />
    </Theme>
  </div>
</template>

<script>
import Theme from "@/components/themes/theme";
import BaseButton from "@/components/atoms/base-button";
import props from "@/components/themes/service-props-mixin";

export default {
  name: "App",
  mixins: [props],
  props: {},
  data: function() {
    return {};
  },
  components: { BaseButton, Theme }
};
</script>
