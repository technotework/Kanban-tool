<template>
  <div>
    <ul :class="$style.float">
      <li v-for="item in errors" :key="item.id">
        <FloatMessage
          type="ErrorText"
          :id="item.id"
          :message="item.text"
          @delete-message="onDeleteMessage"
        />
      </li>
    </ul>

    <slot />
    <template v-if="dialogue != null">
      <ConfirmationDialogue :text="dialogue.text" :pCallback="dialogue.p" :sCallback="dialogue.s" />
    </template>

    <template v-if="isShowLoad">
      <OverlayLoader />
    </template>
  </div>
</template>

<script>
import OverlayLoader from "@/components/molecules/overlay-loader/";
import ConfirmationDialogue from "@/components/molecules/confirmation-dialogue/";
import FloatMessage from "@/components/molecules/float-message/";

export default {
  name: "MessageUnit",
  props: {
    value: Boolean,
    dialogue: Object,
    isShowLoad: Boolean,
    errors: Array
  },
  methods: {
    onDeleteMessage(id) {
      this.$emit("delete-message", id);
    }
  },
  components: { FloatMessage, ConfirmationDialogue, OverlayLoader }
};
</script>
<style lang="scss" module>
.float {
  position: fixed;
  width: 95vw;
  height: auto;
  bottom: 0.8rem;
  left: calc(50% - 95vw / 2);
  z-index: $index_xm;
}
.float li {
  margin-bottom: 0.8rem;
}
</style>