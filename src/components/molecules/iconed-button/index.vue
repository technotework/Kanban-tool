<template>
  <AddMiniButton @click="onClick" :class="$style.button">
    <BaseIcon :type="type" :class="$style.icon" />
  </AddMiniButton>
</template>

<script>
import BaseIcon from "@/components/atoms/base-icon/";
import { AddMiniButton } from "@/components/atoms/base-no-link-button/compose";
import base from "@/components/utils/base-mixin";
export default {
  name: "IconedButton",
  mixins: [base],
  props: {
    type: { type: String }
  },
  components: {
    AddMiniButton,
    BaseIcon
  }
};
</script>
<style lang="scss" module>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 12px;
  height: 12px;
  fill: $white;
}
</style>


