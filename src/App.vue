<template>
  <div id="app">
  
     <router-view />
 <BaseLinkButton width="120px" height="30px" round="20px" padding="5px 0 0 0" href="https://www.google.com" mode="button" backgroundColor="#ff0" target="_blank">リンク</BaseLinkButton>
  </div>
</template>

<script>
import BaseLinkButton from "@/components/atoms/base-link-button"

export default {
  name: "App",
  props: {},
  components:{BaseLinkButton}
};
</script>
