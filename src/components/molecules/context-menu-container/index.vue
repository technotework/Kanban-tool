<template>
  <div>
    <TransparentButton @click="onMenuTriggerClick">
      <slot name="button" />
    </TransparentButton>
    <template v-if="showContext">
      <slot name="menu" />
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import { TransparentButton } from "@/components/atoms/base-no-link-button/compose";

export default {
  name: "ContextMenuContainer",
  props: {},
  data: function() {
    return {
      showContext: false
    };
  },
  components: {
    TransparentButton
  },
  methods: {
    onMenuTriggerClick(e) {
      console.log("c");
      this.showContext = !this.showContext;
      e.status = this.showContext;
      this.$emit("click", e);
    },
    onClose() {
      this.showContext = !this.showContext;
    }
  }
};
</script>
<style lang="scss" module>
</style>
