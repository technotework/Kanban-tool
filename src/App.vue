<template>
  <div id="app">
  
     <router-view />
     <Theme>
      <PrimaryButton value="hogehoge" name="piyo" />
    </Theme>
  </div>
</template>

<script>
import {PrimaryButton} from "@/components/atoms/base-button/compose"
import Theme from "@/components/themes/theme"
export default {
  name: "App",
  props: {},
  components:{PrimaryButton,Theme}
};
</script>
