<template>
  <MenuButton v-bind="{ name }" @click="onClick">{{value}}</MenuButton>
</template>

<script>
import { MenuButton } from "@/components/atoms/base-no-link-button/compose";
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "ContextMenuListItem",
  props: {
    name: String,
    value: String
  },
  components: {
    MenuButton
  }
};
</script>
<style lang="scss" module></style>
