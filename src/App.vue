<template>
  <div id="app">
    <router-view />
    <Theme>
      <C>
        <D>
          <B value="hoge" />
        </D>
      </C>
      <B value="hoge" />
    </Theme>
  </div>
</template>

<script>
import "@/components/themes/global-style";
import D from "@/components/atoms/base-modal-container";
import C from "@/components/atoms/base-modal-cover";
import B from "@/components/atoms/base-button";
import Theme from "@/components/themes/theme";
export default {
  name: "App",
  props: {},
  components: { D, C, Theme, B }
};
</script>
