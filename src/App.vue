<template>
  <div id="app">
  
     <router-view />
     <Theme>
      <Btn>aaa</Btn>
    </Theme>
  </div>
</template>

<script>
import Btn from "@/components/atoms/base-link-button"
import Theme from "@/components/themes/theme"
export default {
  name: "App",
  props: {},
  components:{Btn,Theme}
};
</script>
