<template>
  <div id="app">
    <router-view />
    <Theme>
      <PrimaryButton :value="service.dialogue.pButtonName" />
    </Theme>
  </div>
</template>

<script>
import Theme from "@/components/themes/theme";
import {
  PrimaryButton,
  SecondaryButton
} from "@/components/atoms/base-button/compose";
import props from "@/components/themes/service-props-mixin";

export default {
  name: "App",
  mixins: [props],
  props: {},
  data: function() {
    return {};
  },
  components: { PrimaryButton, Theme }
};
</script>
