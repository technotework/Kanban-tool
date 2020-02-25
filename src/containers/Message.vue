
<template>
  <div>
    <template v-if="isShow">
      <ConfirmationDialogue />
    </template>
    <slot />
  </div>
</template>

<script>
import ConfirmationDialogue from "@/components/molecules/confirmation-dialogue/";
import { getMessage } from "@/containers/resorces/message";

import Vue from "vue";
export default {
  name: "",
  props: {},
  created() {
    Vue.config.errorHandler = (err, vm, info) => {
      console.log(`Captured in Vue.config.errorHandler: ${info}`, err);
    };
    window.addEventListener("error", event => {
      console.log("Captured in error EventListener", event.error);
    });
    window.addEventListener("unhandledrejection", event => {
      console.log("Captured in unhandledrejection EventListener", event.reason);
    });
  },
  data: () => {
    return {
      isShow: false,
      message: {}
    };
  },
  computed: {},
  methods: {},
  components: { ConfirmationDialogue }
};
</script>
