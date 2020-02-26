<template>
  <BaseModalCover :class="$style.bg">
    <BaseLoader />
  </BaseModalCover>
</template>

<script>
import BaseLoader from "@/components/atoms/base-loader/";
import BaseModalCover from "@/components/atoms/base-modal-cover";
export default {
  name: "OverlayLoader",
  props: {},
  components: {
    BaseModalCover,
    BaseLoader
  },
  methods: {}
};
</script>
<style lang="scss" module>
.bg {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>