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
  </div>
</template>

<script>
import ConfirmationDialogue from "@/components/molecules/confirmation-dialogue/";
import FloatMessage from "@/components/molecules/float-message/";

/*<template v-if="dialogue != null">
      <ConfirmationDialogue :text="dialogue.text" :pCallback="dialogue.p" :sCallback="dialogue.s" />
    </template>*/
export default {
  name: "MessageUnit",
  props: {
    value: Boolean,
    dialogue: Object,
    errors: Array
  },
  methods: {
    onDeleteMessage(id) {
      this.$emit("delete-message", id);
    }
  },
  components: { FloatMessage }
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