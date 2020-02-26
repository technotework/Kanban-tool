
<template>
  <div>
    <template>
      <ul>
        <li v-for="(item,index) in errorMessages" :key="'error' + index"></li>
      </ul>
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
      this.createErrorMessage(err);
    };
    window.addEventListener("error", event => {
      console.log("Captured in error EventListener", event.error);
      this.createErrorMessage(event.error);
    });
    window.addEventListener("unhandledrejection", event => {
      console.log("Captured in unhandledrejection EventListener", event.reason);
      this.createErrorMessage(event.error);
    });
  },
  data: () => {
    return {
      showType: "",
      dialogue: Object,
      errorMessages: []
    };
  },
  computed: {},
  methods: {
    createErrorMessage(err) {
      let messageObj = getMessage(err);
      this.errorMessages.push(messageObj);
    }
  },
  components: { ConfirmationDialogue }
};
</script>
