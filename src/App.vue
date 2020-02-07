<template>
  <div id="app">
    <router-view />
    <ClickToEditableText></ClickToEditableText>
  </div>
</template>

<script>
import ClickToEditableText from "@/components/molecules/click-to-editable-text/";
export default {
  name: "App",
  props: {},
  data: function() {
    return {};
  },
  components: { ClickToEditableText }
};
</script>
