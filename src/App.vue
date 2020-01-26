<template>
  <div id="app">
    <router-view />
    <Theme>
      <Btn value="aaa" />
      <PrimaryButton value="bbb" />
    </Theme>
  </div>
</template>

<script>
import "@/components/themes/global-style";
import Btn from "@/components/atoms/base-button";
import { PrimaryButton } from "@/components/atoms/base-button/compose";
import Theme from "@/components/themes/theme";
export default {
  name: "App",
  props: {},
  components: { PrimaryButton, Btn, Theme }
};
</script>
