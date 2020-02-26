<template>
  <MessageUnit @delete-message="onDeleteMessage" :errors="errorMessages">
    <slot />
  </MessageUnit>
</template>

<script>
import MessageUnit from "@/components/organisms/message-unit/";
import { getMessage } from "@/containers/resorces/message";
import { v4 as uuidv4 } from "uuid";
import Vue from "vue";
export default {
  name: "",
  props: {
    value: Boolean,
    target: String,
    dialogue: Object,
    loader: Boolean
  },
  created() {
    Vue.config.errorHandler = (err, vm, info) => {
      this.createErrorMessage(err);
    };
    window.addEventListener("error", event => {
      this.createErrorMessage(event.error);
    });
    window.addEventListener("unhandledrejection", event => {
      this.createErrorMessage(event.reason);
    });
  },
  destroyed() {
    window.removeEventListener("error");
    window.removeEventListener("unhandledrejection");
    this.dialogue = null;
    this.errorMessages = [];
  },
  data: () => {
    return {
      errorMessages: []
    };
  },
  methods: {
    createErrorMessage(err) {
      if (err != undefined && err.error != undefined) {
        let messageObj = getMessage(err);
        messageObj.id = uuidv4();
        this.errorMessages.push(messageObj);
      }
    },
    onDeleteMessage(id) {
      let index;
      for (let i = 0; i < this.errorMessages.length; i++) {
        if (this.errorMessages[i].id == id) {
          index = i;
        }
      }
      this.errorMessages.splice(index, 1);
    }
  },
  components: { MessageUnit }
};
</script>